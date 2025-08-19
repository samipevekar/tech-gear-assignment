export interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  rating: number
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Wireless Earbuds Pro',
    description: 'Premium sound quality with active noise cancellation',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80',
    category: 'Audio',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Fast Wireless Charger',
    description: '15W fast charging for all Qi-enabled devices',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80',
    category: 'Charging',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    description: 'Portable waterproof speaker with 20h battery life',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80',
    category: 'Audio',
    rating: 4.7,
  },
  {
    id: 4,
    name: 'Phone Stand',
    description: 'Adjustable stand for optimal viewing angles',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1601158935942-52255782d322?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80',
    category: 'Accessories',
    rating: 4.3,
  },
  {
    id: 5,
    name: 'Screen Protector',
    description: 'Tempered glass with anti-fingerprint coating',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80',
    category: 'Protection',
    rating: 4.6,
  },
  {
    id: 6,
    name: 'Power Bank 10000mAh',
    description: 'Compact design with fast charging support',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80',
    category: 'Charging',
    rating: 4.4,
  },
  {
    id: 7,
    name: 'Smart Watch',
    description: 'Fitness tracking and notifications',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80',
    category: 'Wearables',
    rating: 4.5,
  },
  {
    id: 8,
    name: 'Car Phone Holder',
    description: '360° rotation with strong suction cup',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1600267165477-6d4cc741b379?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80',
    category: 'Accessories',
    rating: 4.2,
  },
  {
  id: 9,
  name: 'Gaming Headset',
  description: 'Surround sound headset with noise-canceling mic',
  price: 89.99,
  image: 'https://www.soundguys.com/wp-content/uploads/2022/04/hyperx-cloud-alpha-wireless-product-image.jpg', // replace with actual turn0image6 URL
  category: 'Audio',
  rating: 4.6,
},
{
  id: 10,
  name: 'Mechanical Keyboard',
  description: 'RGB backlit keyboard with blue switches',
  price: 109.99,
  image: 'https://m.media-amazon.com/images/I/717Amd8t6OL.jpg', // replace with actual turn0image11 URL
  category: 'Accessories',
  rating: 4.7,
},

]
