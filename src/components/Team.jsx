import React from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5'
import girl1team from '../assets/img/girlteam.jpeg'
import girl2team from '../assets/img/girl2.jpeg'
import man1team from '../assets/img/man1team.jpeg'
import man2team from '../assets/img/man2team.jpeg'

const Teams = [{src: man1team ,name: "Macauley Herring",desc: "CEO & Founder"},
               {src: man2team ,name: "Ivan Mathews",desc: "CTO"},
               {src: girl2team,name: "Elen Benitez",desc: "CPO"},
               {src: girl1team,name: "Kacy Wade",desc: "Customer Success"}
]
const Team = () => {
  return (
    <div className='mt-10 '>
        <div className='ml-3'>
         <h1 className={`xl:text-5xl xl:ml-32 text-center xl:text-left text-3xl font-semibold`}>Our <span className='text-orange-400'>Team</span></h1>
         </div>
         <div className='flex xl:ml-32 flex-wrap gap-4'>
       {Teams.map((item,index)=>  <div key={index} className='w-[276px] mt-10 ml-10 h-[355px] flex flex-col justify-center items-center border-2 rounded-xl'>
            <div className=' rounded-full'>
                <img src={item.src} alt="" className='w-[154px] rounded-full object-cover object-center h-[154px]' />
            </div>
            <div className='text-center mt-8'>
                <h1 className='font-bold'>{item.name}</h1>
                <span className='text-center text-orange-400'>{item.desc}</span>
                <div className='flex gap-3 text-lg mt-4 text-zinc-400 justify-center items-center'><IoLogoFacebook/><IoLogoTwitter/><IoLogoInstagram/></div>
            </div>
         </div>)}
         </div>
    </div>
  )
}

export default Team     