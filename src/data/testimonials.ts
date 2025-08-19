export interface Testimonial {
  id: number
  name: string
  role: string
  comment: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Tech Blogger',
    comment: 'TechGear products have transformed my mobile experience. The wireless earbuds are by far the best I\'ve used!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Graphic Designer',
    comment: 'The fast wireless charger is a game-changer. I can power up my devices quickly without dealing with cables.',
    rating: 4,
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Digital Nomad',
    comment: 'As someone always on the go, TechGear\'s power bank has been a lifesaver. Compact yet powerful!',
    rating: 5,
  },
]