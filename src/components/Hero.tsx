'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gray-900 overflow-hidden h-screen">
      {/* New modern tech background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Modern tech background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-gray-900/90" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8 lg:py-40 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center w-full"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Elevate Your
            </span>{' '}
            <br className="md:hidden" />
            Mobile Experience
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 max-w-lg mx-auto text-xl text-gray-300"
          >
            Discover premium mobile accessories designed for performance and style.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Link
              href="#products"
              className="relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3 text-sm font-medium text-white shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 group"
            >
              <span className="relative z-10">Shop Now</span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            
            <Link
              href="#"
              className="rounded-full bg-white/10 px-8 py-3 text-sm font-medium text-white backdrop-blur-md ring-1 ring-white/10 hover:bg-white/20 hover:ring-white/20 transition-all duration-300"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}