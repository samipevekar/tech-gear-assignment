import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/FeaturedProducts'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}