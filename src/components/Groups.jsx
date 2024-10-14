import React from 'react'
import vip from '../assets/img/vip.png'
import mod from '../assets/img/mod.png'
import admin from '../assets/img/admin.png'
import active from '../assets/img/active.png'

const Img = [{title:"VIP Group",src:vip},{title:"Active Group",src:active},{title:"Moderators Group",src:mod},{title:"Admins Group",src:admin}]; 

const Groups = () => {
  return (
        <div className='mt-28 xl:ml-32'>
            <h1 className={`xl:text-5xl text-center xl:text-left text-3xl font-semibold`}>Our <span className='text-orange-400'>Groups</span></h1>
        <div className={`flex mt-6  ml-10 items-center xl:ml-32 flex-wrap gap-6`}>
            <div className='flex flex-wrap mt-4 gap-4'>
            {Img.map((item,index)=>{
            return <div key={index} className='rounded-xl border-2 w-[276px] h-[252px] flex flex-col items-center justify-center gap-3 '>
            <img src={item.src} alt="" className={`w-60 object-cover object-center  ${index===1 || index==2? "-mb-16 ":"mt-0"} ${index==3?"-mb-16":"mt-2"}`}  />
            <h1 className={`text-center text-2xl ${index===1 || index==2? "mt-32":"mt-2"} ${index==3?"-mt-32": "mt-16"} font-bold`}>{item.title}</h1>
            </div>
            })}
            </div>            
        </div>
        </div>
  )
}

export default Groups