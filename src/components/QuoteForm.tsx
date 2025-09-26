'use client'

import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'next/navigation'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(8, 'Please enter a valid phone number'),
  zip: z.string().min(5, 'ZIP code must be at least 5 characters'),
  service: z.enum(
    [
      'recurring',
      'deep',
      'deep_carpet',
      'deep_windows',
      'deep_airbnb',
      'deep_post_construction',
      'deep_move_out',
      'deep_special_event',
      'move',
      'apartment',
      'light',
      'event',
    ],
    {
      error: 'Select a service',
    },
  ),
  bedrooms: z.enum(['0', '1', '2', '3', '4', '5+']).optional(),
  bathrooms: z.enum(['0', '1', '2', '3', '4', '5+']).optional(),
  details: z.string().max(500).optional(),
  smsConsent: z.boolean().optional(),
})

type FormData = z.infer<typeof schema>

export type QuoteService = FormData['service']

const serviceOptions: { value: FormData['service']; label: string }[] = [
  { value: 'recurring', label: 'Recurring Cleaning' },
  { value: 'deep', label: 'Deep Clean - Whole Home' },
  { value: 'deep_carpet', label: 'Deep Clean - Carpet & Upholstery' },
  { value: 'deep_windows', label: 'Deep Clean - Interior Windows' },
  { value: 'deep_airbnb', label: 'Deep Clean - Airbnb Turnover' },
  { value: 'deep_post_construction', label: 'Deep Clean - Post Construction' },
  { value: 'deep_move_out', label: 'Deep Clean - Move-Out Inspection' },
  { value: 'deep_special_event', label: 'Deep Clean - Special Event Reset' },
  { value: 'move', label: 'Move-In / Move-Out' },
  { value: 'apartment', label: 'Apartment & Condo' },
  { value: 'light', label: 'Light Commercial' },
  { value: 'event', label: 'Post-Event Refresh' },
]

const allowedServiceParams = new Set(serviceOptions.map((option) => option.value))

export default function QuoteForm({
  compact = false,
  initialService,
}: {
  compact?: boolean
  initialService?: FormData['service']
}) {
  const searchParams = useSearchParams()
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      service: initialService,
      smsConsent: false,
    },
  })

  useEffect(() => {
    if (initialService && allowedServiceParams.has(initialService)) {
      setValue('service', initialService)
      return
    }
    const serviceParam = searchParams.get('service')
    if (serviceParam && allowedServiceParams.has(serviceParam as FormData['service'])) {
      setValue('service', serviceParam as FormData['service'])
    }
  }, [initialService, searchParams, setValue])

  const onSubmit = async (data: FormData) => {
    setSubmitted(false)
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error(await response.text())
      }

      setSubmitted(true)
      reset({ service: data.service, smsConsent: data.smsConsent })
    } catch (error) {
      console.error('Quote submission failed', error)
      alert('Something went wrong. Please try again or contact us directly.')
    }
  }

  const inputBase = useMemo(
    () =>
      'h-11 w-full rounded-2xl border border-black/5 bg-white px-3 text-[--ink-900] placeholder:text-slate-500 shadow-sm focus-visible:ring-2 focus-visible:ring-[var(--skye-400)] focus-visible:outline-none',
    [],
  )

  const textBase = useMemo(
    () =>
      'w-full rounded-2xl border border-black/5 bg-white px-3 py-3 text-[--ink-900] placeholder:text-slate-500 shadow-sm focus-visible:ring-2 focus-visible:ring-[var(--skye-400)] focus-visible:outline-none',
    [],
  )

  const shellClass = compact ? 'card border border-slate-200/70 bg-white' : 'glass card p-6 sm:p-8 backface-hidden'
  const successClass = compact ? 'text-[var(--skye-700)]' : 'text-[--skye-50]'

  return (
    <div className={`${shellClass} w-full ${compact ? '' : 'max-w-xl'} rounded-2xl`} role="form" aria-label="Request Cleaning">
      <div className="mb-6 space-y-2">
        <h2 className={`text-2xl font-semibold ${compact ? 'text-[--ink-900]' : 'text-white'} sm:text-3xl`}>Request Cleaning</h2>
        <p className={`${compact ? 'text-slate-600' : 'text-white/80'} text-xs sm:text-sm`}>
          Tell us about your space and we’ll confirm availability within one business day.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2" suppressHydrationWarning>
        <div>
          <input {...register('name')} placeholder="Full name" className={inputBase} aria-invalid={!!errors.name} />
          {errors.name && <p className="mt-1 text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <input {...register('email')} placeholder="Email" className={inputBase} aria-invalid={!!errors.email} />
          {errors.email && <p className="mt-1 text-red-500">{errors.email.message}</p>}
        </div>
        <div>
          <input {...register('phone')} placeholder="Phone" className={inputBase} aria-invalid={!!errors.phone} />
          {errors.phone && <p className="mt-1 text-red-500">{errors.phone.message}</p>}
        </div>
        <div>
          <input {...register('zip')} placeholder="ZIP Code" className={inputBase} aria-invalid={!!errors.zip} />
          {errors.zip && <p className="mt-1 text-red-500">{errors.zip.message}</p>}
        </div>

        <div className="sm:col-span-2">
          <select {...register('service')} className={inputBase} aria-invalid={!!errors.service}>
            <option value="">Desired Service</option>
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.service && <p className="mt-1 text-red-500">{errors.service.message}</p>}
        </div>

        <div>
          <select {...register('bedrooms')} className={inputBase}>
            <option value="">Bedrooms</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5+">5+</option>
          </select>
        </div>
        <div>
          <select {...register('bathrooms')} className={inputBase}>
            <option value="">Bathrooms</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5+">5+</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <textarea {...register('details')} placeholder="Access notes, pets, priorities" rows={3} className={textBase} />
        </div>

        <div className="sm:col-span-2 flex items-start gap-3 rounded-2xl border border-black/5 bg-white px-4 py-3 text-xs text-slate-600">
          <input
            {...register('smsConsent')}
            id="smsConsent"
            type="checkbox"
            className="mt-1 size-4 rounded border-slate-300 text-[var(--skye-600)] focus:ring-[var(--skye-400)]"
          />
          <label htmlFor="smsConsent" className="leading-relaxed">
            I agree to receive SMS updates about scheduling and visit reminders. Message & data rates may apply.
          </label>
        </div>

        <div className="sm:col-span-2 mt-2">
          <button disabled={isSubmitting} className="btn btn-primary w-full text-base disabled:opacity-70">
            {isSubmitting ? 'Sending…' : 'Request Cleaning Now'}
          </button>
          {submitted && (
            <p className={`mt-2 text-xs ${successClass}`} role="status" aria-live="polite">
              We received your request and will reach out shortly.
            </p>
          )}
        </div>
      </form>
    </div>
  )
}
