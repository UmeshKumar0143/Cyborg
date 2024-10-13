import React from 'react'
import Logo from '../assets/img/Logow.svg'
import { IoLocateSharp, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5'
import { FaEnvelope, FaEnvelopeOpen } from 'react-icons/fa'
import { BsFillTelephoneOutboundFill } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'
const Footer = () => {
    const socialIcons =  [<IoLogoLinkedin/>,
        <IoLogoInstagram/>,
        <IoLogoFacebook/>,
        <IoLogoTwitter/>]
  return (
    <div className='bg-black text-white  md:h-[607px] py-48 md:py-60 -mt-[150px]'>
    <div className= 'md:flex md:justify-around'>
       <div>
        <div className='flex md:ml-10 flex-col items-center justify-center md:items-start md:justify-start '>
            <img src={Logo} alt="" className='md:w-80' />
            <p className='text-center mt-6 md:text-wrap md:w-[361px]   text-zinc-300'> Lorem ipsum dolor sit amet, elit. vitae nisi lobortis condimentum quis eget arcu. Nulla ut turpis. </p>
            <div>
                <div className='flex gap-2 mt-3 md:mt-6 md:ml-3'>
               {socialIcons.map((item,index)=>{
                return <div className={`h-[33px] w-[33px] ${index==0?"bg-orange-500": "bg-white"} rounded-full flex items-center justify-center`}>
                    <div >
                        <span className={`text-xl ${index!=0 && 'text-orange-500'}`}>{item}</span>
                    </div>
                </div>
               })}
               </div>
            </div>
            </div>
       </div>
       <div className='flex justify-center gap-10 mt-10'>
       <div>
        <h5 className='text-white text-xl font-bold'>Discover</h5>
        <div className='flex flex-col gap-2 mt-2'>
        {["Cities","Post Events","Current Events","Join Us","Contact Us","Help"].map((item,index)=>{
            return <a href='#' className='text-center md:text-left'>{item} </a>
        })}
        </div>
       </div>
       <div>
        <h5 className='text-white text-xl font-bold'>Quick Learns</h5>
        <div className='flex flex-col gap-2 mt-2'>
        {["Home","About Us","Groups","Calender","Topics","Online Events"].map((item,index)=>{
            return <a href='#' className='text-center md:text-left'>{item} </a>
        })}
        </div>
       </div>
       </div>
       <div className='mt-12'>
        <h1 className='text-xl text-center md:text-left font-bold'>Contact Links</h1>
        <div className='flex  flex-col mt-3 gap-4 items-center md:items-start '>
        <a href="#" className='md:text-left inline-flex text-lg gap-2 items-center'><span className='text-orange-500'><FaEnvelopeOpen/></span>info@cyberagora.sa</a>
        <a href="#" className='md:text-left inline-flex gap-2 text-lg items-center'><span className='text-orange-500'><BsFillTelephoneOutboundFill/></span>920013624</a>
        <a href="#" className='md:text-left inline-flex text-wrap text-center  text-lg '><span className='text-orange-500 text-3xl'><FaLocationDot/></span>8222 Shamakh Bin Khalif-Al Rehab District Jeddah, Saudi Arabia</a>
        </div>
       </div>
    </div> 
        <div className=' border-t md:flex md:items-center md:justify-between border-white px-2  mt-10'>
                <p className='text-sm mt-3 text-center'>Copyright © 2024 <span className='text-[#00AAA4]'>CyberAgora</span>. All rights reserved.</p>
                <div className='flex gap-2 md:mt-2 justify-center'>
                    {["Cookies","Terms & Conditions","Privacy Policy"].map((item,index)=>{
                        return <a href='#'>{item}</a>
                    })}
                </div>
        </div>
      
    </div>
  )
}

export default Footer