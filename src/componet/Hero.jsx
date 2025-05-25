import React from 'react'
import Form from './Form'

function Hero() {
  return (
    <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url(https://digital.ihg.com/is/image/ihg/ihgor-member-rate-web-offers-1440x720?fit=crop,1&wid=1440&hei=720)] bg-no-repeat bg-cover bg-center h-screen'>
        <p className='bg-[#49B9FF]/70   PX-3.5 PY-1 rounded-full mt-20'>The Ultimate Hotel Experience </p>
        <h1  className='font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4'>Discover Your Perfect Getaway  Destination </h1>
        <p className='max-w-130 mt-2 text-sm md:text-base'>Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your Journey today.</p>
       <Form/>
    </div>
  )
}

export default Hero