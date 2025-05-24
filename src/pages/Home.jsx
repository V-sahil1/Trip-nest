import React from 'react'
import Hero from '../componet/Hero'
import FeaturedDestination from '../componet/FeaturedDestination'
import ExclusiveOffer from '../componet/ExclusiveOffer'
import Testimonial from '../componet/Testimonial'
import NewsLatter from '../componet/NewsLatter'
import Footer from '../componet/Footer'

function Home() {
  return (
    <div>
        <Hero/>
        <FeaturedDestination/>
        <ExclusiveOffer/>
        <Testimonial/>
        <NewsLatter/> 
       
    </div>
  )
}

export default Home