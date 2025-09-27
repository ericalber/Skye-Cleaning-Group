import nodemailer from 'nodemailer'

declare module 'nodemailer'

const smtpHost = process.env.SMTP_HOST
const smtpPort = Number(process.env.SMTP_PORT ?? 587)
const smtpSecure = String(process.env.SMTP_SECURE ?? '').toLowerCase() === 'true'
const smtpUser = process.env.SMTP_USER
const smtpPass = process.env.SMTP_PASS

export const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpSecure,
  auth: smtpUser && smtpPass ? { user: smtpUser, pass: smtpPass } : undefined,
  logger: true,
  debug: true,
})

let warnedFromFallback = false

function extractEmail(value?: string | null) {
  if (!value) return null
  const trimmed = value.trim()
  if (!trimmed) return null
  const match = trimmed.match(/<([^>]+)>/)
  const email = match ? match[1] : trimmed
  return email.includes('@') ? email.toLowerCase() : null
}

export function resolveSenderAddress() {
  const candidate = process.env.QUOTE_FROM
  const fallback = smtpUser

  if (candidate) {
    const candidateEmail = extractEmail(candidate)
    const fallbackEmail = extractEmail(fallback)

    if (candidateEmail && fallbackEmail) {
      const candidateDomain = candidateEmail.split('@').pop()
      const fallbackDomain = fallbackEmail.split('@').pop()

      if (candidateDomain && fallbackDomain && candidateDomain === fallbackDomain) {
        return candidate
      }
    }

    if (!warnedFromFallback) {
      console.warn('QUOTE_FROM is being ignored because it does not match the SMTP domain. Falling back to SMTP_USER.')
      warnedFromFallback = true
    }
  }

  return fallback ?? ''
}

export function resolveRecipientAddress() {
  return process.env.QUOTE_TO ?? smtpUser ?? ''
}

export async function verifyTransporter() {
  try {
    const result = await transporter.verify()
    console.log('SMTP connection verified', result)
    return true
  } catch (error) {
    console.error('SMTP connection failed', error)
    throw error
  }
}
