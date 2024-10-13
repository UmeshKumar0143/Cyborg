import React from 'react'
import pary from '../assets/img/party.jpg'
const Joinus = () => {
  return (
    <div className='mt-32 flex  justify-center  items-center'>
    <div className='w-[300px] bg-white md:w-[1203px] md:gap-32 md:h-[350px] md:px-5 py-5 md:flex md:flex-row-reverse border-2 pb-10    rounded-2xl '>
            <div className=' md:py-0 md:ml-5  md:w-[7750px] h-full border-2  '>
                <img src={pary} alt="" className='md:w-[700px]   w-[290px]  h-[170px] md:h-full ' />
            </div> 
            <div className=' xl:mt-10 md:w-[350px]  '>
                <h1 className='text-3xl md:text-4xl md:text-left text-center md:text-nowrap font-bold'>Join <span className='text-orange-400'>Jeddah Bronco Team</span></h1>
                <p className=' md:text-lg mt-6 text-center md:text-left'>Lorem ipsum dolor sit amet, elit. vitae nisi lobortis condimentum quis eget arcu. Nulla ut turpis. </p>
                <div className='flex justify-center md:justify-start mt-6'>
                <button className="px-4  lg:px-10 py-2  rounded-full border border-zinc-400 font-bold text-white  bg-[linear-gradient(to_right,#FB913A,#EB5A0D)] text-sm  xl:text-xl">
              Sign up
            </button>
            </div>
            </div>
    </div>
    </div>
  )
}

export default Joinus