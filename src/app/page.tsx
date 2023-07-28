import Cards from '@/components/Cards'
import CarouselSlider from '@/view/Carousel'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/header'
import Hero from '@/view/Hero'

export default function Home() {
  return (
   <>
   <div className='pt-2 cc'>
   <Header/>

  <Hero/>
<div className='py-1 bg-white/40'></div>
   <div className="container mx-auto mt-10">
      {/* <h1 className="mb-8 text-4xl font-bold">Carousel Slider</h1> */}
      <CarouselSlider />
    </div>
    {/* <h1 className='flex justify-center mt-4 text-5xl font-bold'>Top Products</h1> */}
    {/* <div className='flex justify-center gap-x-10'>
      <Cards/>
      <Cards/>
      <Cards/>
    </div> */}
    <div className='mt-16 '>
    <Footer/>
    </div>
   </div>
   </>
  )
}
