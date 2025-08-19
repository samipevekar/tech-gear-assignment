'use client'

import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/20/solid'

interface ProductCardProps {
  product: {
    id: number
    name: string
    description: string
    price: number
    image: string
    category: string
    rating: number
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="group relative bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-900">
            <a href="#">
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${product.price}</p>
      </div>
      <div className="mt-2 flex items-center">
        {[0, 1, 2, 3, 4].map((rating) => (
          <StarIcon
            key={rating}
            className={`h-4 w-4 ${
              rating < product.rating
                ? 'text-yellow-400'
                : 'text-gray-300'
            }`}
            aria-hidden="true"
          />
        ))}
        <span className="ml-1 text-xs text-gray-500">{product.rating}</span>
      </div>
      <div className="mt-4">
        <button
          type="button"
          className="w-full rounded-md bg-primary py-2 text-sm font-medium text-white hover:bg-secondary transition-colors"
        >
          Add to cart
        </button>
      </div>
    </motion.div>
  )
}