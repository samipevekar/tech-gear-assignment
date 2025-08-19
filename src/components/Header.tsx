'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Products', href: '#products' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header 
      className="sticky top-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm backdrop-saturate-150 shadow-md border-b border-white/20" />
      
      <nav className="relative mx-auto max-w-7xl px-6 py-4 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="#" className="flex items-center">
              <motion.span 
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                TechGear
              </motion.span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.href}
                  className="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors px-3 py-2 rounded-lg hover:bg-white/40"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-x-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#"
                className="rounded-full bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-2 text-sm font-medium text-white shadow-lg hover:shadow-blue-400/30 transition-all"
              >
                Shop Now
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-gray-700 hover:bg-white/40 transition-all"
              onClick={() => setMobileMenuOpen(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile menu with glass effect */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-50"
          >
            {/* Glass background */}
            <div 
              className="absolute inset-0 bg-white/40 backdrop-blur-lg backdrop-saturate-150"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            <div className="relative h-full overflow-y-auto">
              <div className="flex items-center justify-between px-6 py-4">
                <Link href="#" className="flex items-center">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    TechGear
                  </span>
                </Link>
                <motion.button
                  type="button"
                  className="-m-2.5 rounded-lg p-2.5 text-gray-700 hover:bg-white/40 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </motion.button>
              </div>
              
              <div className="mt-6 flow-root px-6">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <motion.div
                        key={item.name}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-3 text-base font-medium text-gray-900 hover:bg-white/40 transition-all"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  <div className="py-6">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-400 text-center shadow-lg hover:shadow-blue-400/30 transition-all"
                      >
                        Shop Now
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
