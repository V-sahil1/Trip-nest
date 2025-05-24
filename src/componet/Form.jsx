import React from 'react'
import { assets, cities } from '../assets/assets';

function Form(){

    return (
        <form className='bg-white/1 rounded-[12px] p-5 backdrop-blur-md text-white  px-6 py-4  flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto mt-8 font-bold'>

            <div>
                <div className='flex items-center gap-2'>
                   <img src={assets.calenderIcon} alt="calender" className='h-4' />
                    <label htmlFor="destinationInput" className='text-white/90 text-base'>Destination</label>
                </div>
                <input list='destinations' id="destinationInput" type="text" className=" bg-transparent border border-white/20 text-white placeholder-white/70 p-2 rounded-md md:text-lg px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Type here" required />
                <datalist id='destinations'>
                    {cities.map((city,index)=>(
                        <option value={city} key={index}/>
                    ))}
                </datalist>
            </div>

            <div>
                <div className='flex items-center gap-2'>
                    <img src={assets.calenderIcon} alt="calender" className='h-4' />
                    <label htmlFor="checkIn" className='text-white/90 text-base mb-1'>Check in</label>
                </div>
                <input id="checkIn" type="date" className=" bg-transparent border border-white/20 text-white placeholder-white/70 p-2 rounded-md px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>
             <img src={assets.calenderIcon} alt="calender" className='h-4' />

            <div>
                <div className='flex items-center gap-2'>
                    
                    <label htmlFor="checkOut" className='text-white/90 text-base mb-1'>Check out</label>
                </div>
                <input id="checkOut" type="date" className=" bg-transparent border border-white/20 text-white placeholder-white/70 p-2 rounded-md px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
                <label htmlFor="guests" className='text-white/90 text-base mb-1'>Guests</label>
                <input min={1} max={4} id="guests" type="number" className=" bg-transparent border border-white/20 text-white placeholder-white/70 p-2 rounded-md px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16" placeholder="0" />
            </div>

            <button className='flex items-center justify-center gap-1 rounded-md bg-black/70 hover:bg-black/80  py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1' >
              <img src={assets.searchIcon} alt="searchicon" className='h-7' />
                <span>Search</span>
            </button>
        </form>
    );
}

export default Form