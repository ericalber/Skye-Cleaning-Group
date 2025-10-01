import { NextResponse } from 'next/server'
import { z } from 'zod'

import { quoteServiceOptions, type QuoteServiceValue } from '@/data/quoteServices'
import { resolveRecipientAddress, resolveSenderAddress, transporter, verifyTransporter } from '@/lib/email'

const serviceValues = quoteServiceOptions.map((option) => option.value) as [QuoteServiceValue, ...QuoteServiceValue[]]

const payloadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  zip: z.string().min(5),
  service: z.enum(serviceValues),
  bedrooms: z.enum(['0', '1', '2', '3', '4', '5+']).optional(),
  bathrooms: z.enum(['0', '1', '2', '3', '4', '5+']).optional(),
  details: z.string().max(500).optional(),
})

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const result = payloadSchema.safeParse(json)

    if (!result.success) {
      return NextResponse.json({ error: 'Invalid payload', issues: result.error.flatten() }, { status: 400 })
    }

    const data = result.data

    if (process.env.QUOTE_WEBHOOK_URL) {
      try {
        await fetch(process.env.QUOTE_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'skye-quote', payload: data }),
        })
      } catch (error) {
        console.error('Quote webhook error', error)
        return NextResponse.json({ error: 'Failed to forward quote' }, { status: 502 })
      }
    } else if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        await verifyTransporter()
        const to = resolveRecipientAddress()
        const from = resolveSenderAddress() || process.env.SMTP_USER || ''

        if (!from) {
          throw new Error('Missing SMTP sender address.')
        }

        if (!to) {
          throw new Error('Missing quote recipient address.')
        }
        await transporter.sendMail({
          to,
          from,
          subject: `New quote request - ${data.name}`,
          text: JSON.stringify(data, null, 2),
          html: `<h2>New quote request</h2>
<p><strong>Name:</strong> ${data.name}</p>
<p><strong>Email:</strong> ${data.email}</p>
<p><strong>Phone:</strong> ${data.phone}</p>
<p><strong>ZIP:</strong> ${data.zip}</p>
<p><strong>Service:</strong> ${data.service}</p>
<p><strong>Bedrooms:</strong> ${data.bedrooms ?? ' - '}</p>
<p><strong>Bathrooms:</strong> ${data.bathrooms ?? ' - '}</p>
<p><strong>Details:</strong></p>
<p>${data.details ?? ' - '}</p>`,
          replyTo: data.email,
        })
      } catch (error) {
        console.error('Quote email error', error)
        return NextResponse.json({ error: 'Failed to send quote email' }, { status: 502 })
      }
    } else {
      console.info('Skye Cleaning Group quote request (no delivery configured)', data)
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Quote API error', error)
    return NextResponse.json({ error: 'Unexpected server error' }, { status: 500 })
  }
}
