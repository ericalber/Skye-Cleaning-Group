import { NextResponse } from 'next/server'
import { z } from 'zod'

const payloadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  zip: z.string().min(5),
  service: z.enum(['recurring', 'deep', 'move', 'apartment', 'light', 'event']),
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
    } else {
      console.info('Skye Cleaning Group quote request', data)
      // To enable email via SMTP, install nodemailer and configure the environment variables:
      // SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, QUOTE_TO
      // const transporter = nodemailer.createTransport({
      //   host: process.env.SMTP_HOST,
      //   port: Number(process.env.SMTP_PORT ?? 587),
      //   secure: Number(process.env.SMTP_PORT ?? 587) === 465,
      //   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      // })
      // await transporter.sendMail({
      //   to: process.env.QUOTE_TO,
      //   from: 'Skye Cleaning Group <no-reply@skyecgroup.com>',
      //   subject: `New quote request — ${data.name}`,
      //   text: JSON.stringify(data, null, 2),
      // })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Quote API error', error)
    return NextResponse.json({ error: 'Unexpected server error' }, { status: 500 })
  }
}
