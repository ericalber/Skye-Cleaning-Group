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
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(18,60,84,.72), rgba(18,60,84,.48)), url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1600&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative container-px py-16 sm:py-24">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-white"
          >
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/80">San Francisco • North Bay</p>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl">Your home, the Skye standard.</h1>
            <p className="mt-4 max-w-xl text-lg text-white/90">
              Effortless scheduling. Background-checked professionals. Results you feel proud to come home to.
            </p>
            <p className="mt-3 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/90">
              Skye Done-Right Promise: if anything isn’t perfect, we return at no cost.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="chip">Background-checked team</span>
              <span className="chip">Safe, eco-friendly supplies</span>
              <span className="chip">No long-term contracts</span>
            </div>
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
