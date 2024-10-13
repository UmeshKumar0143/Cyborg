import React from 'react'
import pary from '../assets/img/party.jpg'
const Joinus = () => {
  return (
    <div className='mt-32 flex  justify-center  items-center'>
    <div className='w-[300px] bg-white md:w-[1003px] md:gap-32 md:h-[300px] md:flex md:flex-row-reverse border-2 pb-10    rounded-2xl '>
            <div className='container py-10 md:py-0'>
                <img src={pary} alt="" className='md:w-[488px] w-[290px] h-[170px] md:h-[285.64px]' />
            </div>
            <div className=' md:ml-10 md:mt-20'>
                <h1 className='text-3xl md:text-4xl text-center md:text-nowrap font-bold'>Join <span className='text-orange-400'>Jeddah Bronco Team</span></h1>
                <p className='text-zinc-400  text-center'>Lorem ipsum dolor sit amet, elit. vitae nisi lobortis condimentum quis eget arcu. Nulla ut turpis. </p>
                <div className='flex justify-center mt-4'>
                <button className="px-4 lg:px-6 py-2  rounded-full border border-zinc-400 font-bold text-white  bg-[linear-gradient(to_right,#FB913A,#EB5A0D)] text-sm  xl:text-xl">
              Sign up
            </button>
            </div>
            </div>
    </div>
    </div>
  )
}

export default Joinus