import { NextResponse } from 'next/server'
import {
  resolveRecipientAddress,
  resolveSenderAddress,
  transporter,
  verifyTransporter,
} from '@/lib/email'

type SelfTestPayload = {
  to?: string
  subject?: string
  text?: string
  html?: string
  replyTo?: string
}

const DEFAULT_SUBJECT = 'SMTP self-test'
const DEFAULT_TEXT = 'ok'

export async function POST(request: Request) {
  let payload: SelfTestPayload = {}

  try {
    payload = await request.json()
  } catch (error) {
    console.warn('Self-test received invalid JSON body, using defaults.', error)
  }

  const candidateFrom = resolveSenderAddress() || process.env.SMTP_USER || ''
  const candidateTo = payload.to?.trim() || resolveRecipientAddress()

  if (!candidateFrom) {
    console.error('SMTP self-test aborted: missing sender address.')
    return NextResponse.json(
      { ok: false, message: 'Missing SMTP sender address.' },
      { status: 500 },
    )
  }

  if (!candidateTo) {
    console.error('SMTP self-test aborted: missing recipient address.')
    return NextResponse.json(
      { ok: false, message: 'Missing SMTP recipient address.' },
      { status: 500 },
    )
  }

  const replyTo = payload.replyTo?.trim() || undefined

  try {
    await verifyTransporter()

    const info = await transporter.sendMail({
      from: candidateFrom,
      to: candidateTo,
      subject: payload.subject?.trim() || DEFAULT_SUBJECT,
      text: payload.text?.trim() || DEFAULT_TEXT,
      html: payload.html,
      replyTo,
    })

    console.log('SMTP self-test sent', info)
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('SMTP self-test failed', error)
    const message = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ ok: false, message }, { status: 500 })
  }
}
