'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'next/navigation'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(8, 'Please enter a valid phone number'),
  zip: z.string().min(5, 'ZIP code must be at least 5 characters'),
  service: z.enum(['recurring', 'deep', 'move', 'apartment', 'light', 'event'], {
    error: 'Select a service',
  }),
  bedrooms: z.enum(['0', '1', '2', '3', '4', '5+']).optional(),
  bathrooms: z.enum(['0', '1', '2', '3', '4', '5+']).optional(),
  details: z.string().max(500).optional(),
})

type FormData = z.infer<typeof schema>

const serviceOptions: { value: FormData['service']; label: string }[] = [
  { value: 'recurring', label: 'Recurring Cleaning' },
  { value: 'deep', label: 'One-Time Deep Clean' },
  { value: 'move', label: 'Move-In / Move-Out' },
  { value: 'apartment', label: 'Apartment & Condo' },
  { value: 'light', label: 'Light Commercial' },
  { value: 'event', label: 'Post-Event Refresh' },
]

const allowedServiceParams = new Set(serviceOptions.map((option) => option.value))

export default function QuoteForm({ compact = false }: { compact?: boolean }) {
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
      service: undefined,
    },
  })

  useEffect(() => {
    const serviceParam = searchParams.get('service')
    if (serviceParam && allowedServiceParams.has(serviceParam as FormData['service'])) {
      setValue('service', serviceParam as FormData['service'])
    }
  }, [searchParams, setValue])

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
      reset({ service: data.service })
    } catch (error) {
      console.error('Quote submission failed', error)
      alert('Something went wrong. Please try again or contact us directly.')
    }
  }

  return (
    <div
      className={`${compact ? '' : 'glass card p-6 sm:p-8'} w-full ${compact ? '' : 'max-w-xl'} rounded-2xl`}
      role="form"
      aria-label="Request Cleaning"
    >
      {!compact && <h2 className="mb-4 text-3xl font-bold text-white drop-shadow">Request Cleaning</h2>}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2"
        suppressHydrationWarning
      >
        <div>
          <input
            {...register('name')}
            placeholder="Name"
            className="h-11 w-full rounded-2xl border border-black/5 bg-white/90 px-3 outline-none shadow-[0_2px_6px_rgba(0,0,0,0.06)] focus-visible:ring-2 focus-visible:ring-[var(--skye-400)]"
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="mt-1 text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <input
            {...register('email')}
            placeholder="Email"
            className="h-11 w-full rounded-2xl border border-black/5 bg-white/90 px-3 outline-none shadow-[0_2px_6px_rgba(0,0,0,0.06)] focus-visible:ring-2 focus-visible:ring-[var(--skye-400)]"
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="mt-1 text-red-500">{errors.email.message}</p>}
        </div>
        <div>
          <input
            {...register('phone')}
            placeholder="Phone"
            className="h-11 w-full rounded-2xl border border-black/5 bg-white/90 px-3 outline-none shadow-[0_2px_6px_rgba(0,0,0,0.06)] focus-visible:ring-2 focus-visible:ring-[var(--skye-400)]"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className="mt-1 text-red-500">{errors.phone.message}</p>}
        </div>
        <div>
          <input
            {...register('zip')}
            placeholder="Zip Code"
            className="h-11 w-full rounded-2xl border border-black/5 bg-white/90 px-3 outline-none shadow-[0_2px_6px_rgba(0,0,0,0.06)] focus-visible:ring-2 focus-visible:ring-[var(--skye-400)]"
            aria-invalid={!!errors.zip}
          />
          {errors.zip && <p className="mt-1 text-red-500">{errors.zip.message}</p>}
        </div>

        <div className="sm:col-span-2">
          <select
            {...register('service')}
            className="h-11 w-full rounded-2xl border border-black/5 bg-white/90 px-3 outline-none shadow-[0_2px_6px_rgba(0,0,0,0.06)] focus-visible:ring-2 focus-visible:ring-[var(--skye-400)]"
            aria-invalid={!!errors.service}
          >
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
          <select
            {...register('bedrooms')}
            className="h-11 w-full rounded-2xl border border-black/5 bg-white/90 px-3 outline-none shadow-[0_2px_6px_rgba(0,0,0,0.06)] focus-visible:ring-2 focus-visible:ring-[var(--skye-400)]"
          >
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
          <select
            {...register('bathrooms')}
            className="h-11 w-full rounded-2xl border border-black/5 bg-white/90 px-3 outline-none shadow-[0_2px_6px_rgba(0,0,0,0.06)] focus-visible:ring-2 focus-visible:ring-[var(--skye-400)]"
          >
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
          <textarea
            {...register('details')}
            placeholder="Details"
            rows={3}
            className="w-full rounded-2xl border border-black/5 bg-white/90 px-3 py-2 outline-none shadow-[0_2px_6px_rgba(0,0,0,0.06)] focus-visible:ring-2 focus-visible:ring-[var(--skye-400)]"
          />
        </div>

        <div className="sm:col-span-2 mt-1">
          <button disabled={isSubmitting} className="btn btn-primary w-full text-base disabled:opacity-70">
            {isSubmitting ? 'Sending…' : 'Request Cleaning Now'}
          </button>
          {submitted && (
            <p className="mt-2 text-[--skye-50]" role="status" aria-live="polite">
              We received your request and will reach out shortly.
            </p>
          )}
        </div>
      </form>
    </div>
  )
}
