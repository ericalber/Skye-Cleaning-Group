'use client'

import { Suspense } from 'react'
import { easeOut, motion } from 'framer-motion'
import QuoteForm from './QuoteForm'

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
}

export default function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-85"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(7, 18, 28, 0.45), rgba(11, 32, 49, 0.65), rgba(13, 36, 56, 0.75)), url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1600&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay',
        }}
      />
      <div className="relative z-[1] container-px py-16 sm:py-24">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-white"
          >
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/80">San Francisco • North Bay</p>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl">Your home, the Skye standard.</h1>
            <p className="mt-4 max-w-xl text-base text-white/90 sm:text-lg">
              Effortless scheduling. Background-checked professionals. Results you feel proud to come home to.
            </p>
            <p className="mt-3 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/90">
              Skye Done-Right Promise: if anything isn’t perfect, we return at no cost.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15, duration: 0.6, ease: easeOut }}
            className="flex md:justify-end"
          >
            <Suspense fallback={null}>
              <QuoteForm />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
