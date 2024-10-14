import React from 'react'
import member1 from '../assets/img/member1.png'
import member2 from '../assets/img/member2.png'
import member3 from '../assets/img/member3.png'
import member4 from '../assets/img/member4.png'

const members = [{url:member1,name: "Robert Brown"},
                 {url:member2,name: "Leslie Livingston"},    
                 {url:member3,name: "Joseph McFall"},    
                 {url:member4,name: "Helene Engels"},  
                 {url:member1,name: "Robert Brown"},
                 {url:member2,name: "Leslie Livingston"},    
                 {url:member3,name: "Joseph McFall"},    
                 {url:member4,name: "Helene Engels"}, 
                 {url:member1,name: "Robert Brown"},
                 {url:member2,name: "Leslie Livingston"},    
                 {url:member3,name: "Joseph McFall"},    
                 {url:member4,name: "Helene Engels"}, 
                 {url:member1,name: "Robert Brown"},
                 {url:member2,name: "Leslie Livingston"},    
                 {url:member3,name: "Joseph McFall"},    
                 {url:member4,name: "Helene Engels"},
                 {url:member1,name: "Robert Brown"},
                 {url:member2,name: "Leslie Livingston"},    
                 {url:member3,name: "Joseph McFall"},    
                 {url:member4,name: "Helene Engels"}, 
                 {url:member1,name: "Robert Brown"},
                 {url:member2,name: "Leslie Livingston"},    
                 {url:member3,name: "Joseph McFall"},    
                 {url:member4,name: "Helene Engels"}, 
                 {url:member1,name: "Robert Brown"},
                 {url:member2,name: "Leslie Livingston"},    
                 {url:member3,name: "Joseph McFall"},    
                 {url:member4,name: "Helene Engels"}, 
                 {url:member1,name: "Robert Brown"},
                 {url:member2,name: "Leslie Livingston"},    
                 {url:member3,name: "Joseph McFall"},    
                 {url:member4,name: "Helene Engels"}, 
                 {url:member1,name: "Robert Brown"},
                 {url:member2,name: "Leslie Livingston"},    
                 {url:member3,name: "Joseph McFall"},       
]
const Ourmember = () => {
  return (
    <div className={` mt-10 `}>
        <div>
         <h1 className={`xl:text-5xl text-center xl:text-left xl:ml-32 text-3xl  font-semibold`}>Our <span className='text-orange-400'>Members</span></h1>
         </div>
         <div className='container xl:ml-20'>
         <div className='flex gap-3 flex-wrap  mt-8 ml-10'>
        {members.map((item,index)=> <div key={index} className="xl:w-[147px] xl:h-[90px]  w-[80px]  h-[80px] border  flex justify-center items-end rounded-lg "
          style={{ backgroundImage: `url(${item.url})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize : "cover"
          }} >
            <span className='text-white text-center text-sm xl:text-base  font-bold mb-5'>{item.name}</span>
         </div>)}
         </div>
         </div>
    </div>
  )
}

export default Ourmember