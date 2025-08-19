'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

const navigation = {
  main: [
    { name: 'Home', href: '#' },
    { name: 'Products', href: '#products' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg',
    },
    {
      name: 'Twitter',
      href: '#',
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/twitter.svg',
    },
    {
      name: 'Instagram',
      href: '#',
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg',
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg',
    },
  ],
}

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-16 lg:px-8 mt-30">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Stay Connected
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Join our community for the latest updates and offers
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex justify-center space-x-10"
        >
          {navigation?.social?.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">{item.name}</span>
              <Image width={6} height={6} src={item.icon} alt={item.name} className="h-6 w-6 invert" />
            </Link>
          ))}
        </motion.div>

        <motion.nav
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </motion.nav>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 text-center text-xs leading-5 text-gray-400"
        >
          &copy; 2025 TechGear. All rights reserved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-400">
            123 Tech Street, Innovation City, IC 12345
          </p>
          <p className="text-sm text-gray-400 mt-1">
            Email: info@techgear.com | Phone: (123) 456-7890
          </p>
        </motion.div>
      </div>
    </footer>
  )
}