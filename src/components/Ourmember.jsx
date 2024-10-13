import React from 'react'
import member1 from '../assets/img/member1.png'
import member2 from '../assets/img/member2.png'
import member3 from '../assets/img/member3.png'
import member4 from '../assets/img/member4.png'

const members = [{url:member1,name: "Robert Brown"},
                 {url:member2,name: "Leslie Livingston"},    
                 {url:member3,name: "Joseph McFall"},    
                 {url:member4,name: "Helene Engels"},    
]
const Ourmember = () => {
  return (
    <div className={`container mt-10 `}>
        <div>
         <h1 className={`xl:text-5xl text-center xl:text-left xl:ml-32 text-3xl  font-semibold`}>Our <span className='text-orange-400'>Members</span></h1>
         </div>
         <div className='xl:ml-32'>
         <div className='flex gap-2  mt-8 ml-10'>
        {members.map((item,index)=> <div key={index} className="w-[187px]  border h-[120px] flex justify-center items-end rounded-lg "
          style={{ backgroundImage: `url(${item.url})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize : "cover"
          }} >
            <span className='text-white text-center font-bold mb-5'>{item.name}</span>
         </div>)}
         </div>
         <div className='flex gap-2 mt-8 ml-10'>
        {members.map((item,index)=> <div key={index} className="w-[187px]  border h-[120px] flex justify-center items-end rounded-lg"
          style={{ backgroundImage: `url(${item.url})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize : "cover"
          }} >
            <span className='text-white text-center font-bold mb-5'>{item.name}</span>
         </div>)}
         </div>
         <div className='flex gap-2 mt-8 ml-10'>
        {members.map((item,index)=> <div key={index} className="w-[187px] border h-[120px] flex justify-center items-end rounded-lg"
          style={{ backgroundImage: `url(${item.url})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize : "cover"
          }} >
            <span className='text-white text-center font-bold mb-5'>{item.name}</span>
         </div>)}
         </div>
         <div className='flex gap-2 mt-8 ml-10'>
        {members.map((item,index)=> <div key={index} className="w-[187px] border h-[120px] flex justify-center items-end rounded-lg"
          style={{ backgroundImage: `url(${item.url})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize : "cover"
          }} >
            <span className='text-white text-center font-bold mb-5'>{item.name}</span>
         </div>)}
         </div>
         </div>
    </div>
  )
}

export default Ourmember