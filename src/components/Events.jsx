import React from 'react'
import people1 from '../assets/img/people1.png'
import people2 from '../assets/img/people2.png'
import people3 from '../assets/img/people3.png'
import { SlCalculator } from 'react-icons/sl';

const Peoples = [people1,people2,people3]; 

const Events = () => {
  return (
    <div className='mt-32   w-full xl:px-32'>
        <div className='xl:flex xl:justify-between'>
        <h1 className='xl:text-5xl text-3xl text-center xl:text-left xl:ml-20   font-bold'>Upcoming <span className='text-orange-400'>Events</span></h1>
        <button className="px-4 lg:px-10 py-2 hidden md:inline  rounded-full border border-zinc-400 font-medium text-sm  xl:text-xl">See All Events</button>
        </div>
        <div className='md:flex mt-9 xl:ml-28 gap-6'>
        {Peoples.map((item,index)=>
            <div key={index} className='px-4 mt-3  xl:w-[480px] xl:h-[562x] w-[300px] mx-auto xl:mx-0 xl:border-2 rounded-2xl xl:py-8 '>
                <div className='mt-8'>
                <img src={people1} alt="" className='rounded-xl' />
                <p className='text-orange-500 mt-2'>Hosted by : Lorem ipsum dolor </p>
                <p className='font-bold text-lg mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className='text-orange-500 flex mt-2 justify-between items-center'>
                    <span className='inline-flex items-center gap-2'><SlCalculator/> Monday, Oct 2</span>
                    <span className='inline-flex items-center gap-2'><SlCalculator/> 5:00 PM PKT</span>
                </div>
                <div className='text-orange-500 flex mt-2 justify-between items-center'>
                    <span className='inline-flex items-center gap-2'><SlCalculator/>09 Going</span>
                    <span className='inline-flex items-center mr-[60px] gap-2'><SlCalculator/>Free</span>
                </div>
                <div className='flex justify-center mt-10'>
                <button className="px-4 lg:px-6 py-2 rounded-full border border-zinc-400 font-medium text-white bg-[linear-gradient(to_right,#FB913A,#EB5A0D)] text-xl  xl:text-xl">
             Read More
            </button>
                </div>
            </div>
            )}
            </div>
    </div>
  )
}

export default Events