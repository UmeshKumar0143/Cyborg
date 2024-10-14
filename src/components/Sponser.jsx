import React from 'react'
import Jiggle from '../assets/img/jiggle.svg'
import symetric from '../assets/img/symetric.svg'
import Rese from '../assets/img/rese.svg'
import Wish from '../assets/img/wish.svg'
import wely from '../assets/img/wely.svg'

const Sponsers = [Jiggle,symetric,Rese,Wish,wely]; 

const Sponser = () => {
  return (
    <div className={`overflow-hidden mt-16`}>
        <h5 className='text-center md:text-2xl text-zinc-400 text-xl '>Sponsered By </h5>
        <div className='mt-8 flex xl:ml-52 -ml-52 gap-4  md:gap-16'>
            {Sponsers.map((item,index)=>
           <img  key={index}src={item} alt="" className='w-44 xl:w-48' />
            )}
        </div>
    </div>
  )
}

export default Sponser