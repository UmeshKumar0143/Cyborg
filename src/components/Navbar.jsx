import React, { useState } from 'react';
import Logo from '../assets/img/logo.svg';
import Logowhite from '../assets/img/logow.svg';
import { CiGlobe, CiSearch } from 'react-icons/ci';
import { FaBars, FaMoon } from 'react-icons/fa';
import { IoLocationSharp, IoSearch } from 'react-icons/io5';
import { MdOutlineWbSunny } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';

const Navbar = ({ toggleDarkMode, darkmode}) => {
  const [toggle, settoggle] = useState(false);
  const onToggle = () => {
    settoggle(!toggle); 
  }
  return (
    <div className=''>
      <div className="px-10 flex py-3 items-center justify-between">
        <div>
          <img src={darkmode?Logowhite: Logo} alt="logo" className="w-28 md:w-36 lg:w-48 xl:w-56" />
        </div>

        <div className="xl:flex hidden gap-4 items-center">
          <div className="relative flex items-center border border-black rounded-full">
           
          
            <CiSearch className={`text-2xl absolute top-3 left-3`} />
            <input
              className={`px-10 py-2 text-xl ${darkmode ? "bg-black" : "bg-white"} border-none outline-none rounded-l-full w-[200px] lg:w-[300px] `}
              type="text"
              placeholder="Search events"
            />
            {/* Divider */}
            <div className={`w-[1px] h-8 ${darkmode ? "bg-white" : "bg-black"} mx-2`}></div>
            {/* Location Input */}
            <input
              type="text"
              className={`py-2 pl-5 border-none text-xl ${darkmode ? "bg-black" : "bg-white"} outline-none rounded-r-full w-[150px] lg:w-[250px] xl:w-[350px]`}
              placeholder="Manchester, UK"
            />
           
            <IoLocationSharp className={`absolute top-2 text-2xl right-[50%]  `} />
     
            <div className="w-9 bg-[#FB923C] h-9 rounded-full absolute right-1 flex justify-center items-center">
              <IoSearch className="text-xl text-white" />
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <button className="px-4 lg:px-6 py-2 rounded-full border border-zinc-400 font-bold text-sm xl:text-xl">
              Log in
            </button>
            <button className="px-4 lg:px-6 py-2 rounded-full border border-zinc-400 font-bold text-white bg-[linear-gradient(to_right,#FB913A,#EB5A0D)] text-sm xl:text-xl">
              Sign up
            </button>
          </div>
        </div>

        <div>
          <button onClick={toggleDarkMode} className='md:px-2 md:py-2 px-1 py-1 rounded-full border-2 border-black'>
            {darkmode ? <MdOutlineWbSunny className='md:text-xl text-sm font-bold' /> : <FaMoon className='md:text-xl text-sm font-bold' />}
          </button>
        </div>



        <div className="flex justify-center sm:mr-10 items-center gap-2">
          <div className="flex justify-center gap-1 items-center">
            <CiGlobe className="font-bold text-xl xl:text-2xl" />
            <span className="text-sm sm:text-lg xl:text-2xl font-medium">Eng</span>
          </div>
          <div className="w-12 h-12 relative z-[100] xl:hidden rounded-full flex justify-center items-center bg-[linear-gradient(to_right,#FB913A,#EB5A0D)]">
            <button onClick={onToggle}>{toggle?<RxCross2 className='text-lg text-white font-bold'/>: <FaBars className="text-lg text-white font-bold" /> }</button>
            { toggle && <div className='flex absolute w-28 top-10 right-3 rounded-xl  z-[10] bg-[linear-gradient(to_right,#FB913A,#EB5A0D)] flex-col'>
            <button className='  border-b  py-2 border-black'>Log in</button>
              <button className='
               text-center border-b  py-2 border-black'>Sign up</button>
            </div>}

          </div>
        </div>
      </div>

      {/* Mobile search bar */}
      <div className='relative md:hidden w-[350px] flex items-center container ml-[1px] border-2 rounded-full  border-black'>
        <span><CiSearch className={`text-lg top-3 font-semibold left-3 inline absolute`} /></span>
        <input
          className={`pl-4 pr-0 ${darkmode?"bg-black": "bg-white"} w-[140px] py-2 border-r-0 outline-none  rounded-full rounded-r-none `}
          type="text"
          placeholder="Search events"
        />
        <div className='w-[1px] h-8 bg-black absolute top-1 left-[45%]'></div>
        <input
          type="text"
          className={`border-l-0  ${darkmode?"bg-black": "bg-white"} w-[130px] py-2 pl-3 ml-4 rounded-full outline-none top-2 border-black `}
          placeholder="Manchester, UK"
        />
        <span><IoLocationSharp className={`absolute top-3 right-[48%] `} /></span>
        <div className='w-9 bg-[#FB923C] h-9 rounded-full absolute right-1 flex justify-center items-center'>
          <IoSearch className='text-xl text-white' />
        </div>
      </div>

      {/* Categories section */}
      <div className='md:flex hidden mt-8 justify-center items-center'>
        <div className='w-[732px] h-[50px] lg:w-[918px] flex items-center justify-around bg-[#FB923C] rounded-full'>
          {["All", "Automotive", "Off Road"].map((item, index) => (
            <div className='relative' key={index}>
              <span className='font-bold'>{item}</span>
              {index !== 2 && <span className={`h-[30px] w-[2px] ml-28 ${darkmode ? "bg-white" : "bg-black"} absolute`}></span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
