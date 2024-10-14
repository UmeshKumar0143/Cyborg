import React from 'react'
import car from '../assets/img/car.png'
import { IoLocationSharp, IoPeopleOutline, IoPersonOutline } from 'react-icons/io5'
import { CiLocationOn } from 'react-icons/ci'
const Hero = ({}) => {
  return (
    <div className={`container  mt-6 md:mt-10 md:flex md:ml-20 md:gap-10 `}>
            <img src={car} alt="" className='rounded-xl md:w-[718px]' />
            <div className='mt-4'>
                <h1 className=' text-4xl xl:text-7xl  text-nowrap  tracking-tighter font-bold'>Jeddah Bronco Team</h1>
                <div>
                <div className='flex gap-4 mt-4 xl:mt-8 items-center'>
                    <CiLocationOn className='text-3xl xl:text-4xl text-orange-400 '/>
                    <span className='text-lg xl:text-2xl'>Jeddah, Saudi Arabia</span>
                </div>
                <div className='flex gap-4 mt-4 items-center'>
                    <IoPeopleOutline className='text-3xl xl:text-4xl text-orange-400 '/>
                    <span className='text-lg xl:text-2xl'>1,070 members · Public group</span>
                </div>
                <div className='flex gap-4 mt-4 items-center'>
                    <IoPersonOutline className='text-3xl xl:text-4xl text-orange-400 '/>
                    <span className='text-base font-semibold'>Organized by Covert Error(Omar) & 1 other</span>
                </div>
                </div> 
            <div  className='mt-10  flex justify-center md:justify-start'>
            <button className="px-4 lg:px-6 py-2 rounded-full border border-zinc-400 font-semibold text-white bg-[linear-gradient(to_right,#FB913A,#EB5A0D)] text-xl  xl:text-3xl">
             Join CyberAgora
            </button>
            </div>
            </div>
    </div>
  )
}

export default Hero