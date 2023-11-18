import React from 'react';
import { IoLogoGithub, IoLogoYoutube, IoLogoLinkedin, IoLogoDribbble } from "react-icons/io5";

const SideBar = () => {
  return (
    <div className='w-[90px] border-r-[1px] h-screen fixed flex flex-col justify-around items-center mt-12'>
      <h2 className='-rotate-90'>HOMEPAGE</h2>
      <div className='flex flex-col gap-6 mb-5 text-[20px]'>
        <IoLogoGithub className='cursor-pointer hover:scale-110 transition-all ease-in-out'/>
        <IoLogoYoutube className='cursor-pointer hover:scale-110 transition-all ease-in-out'/>
        <IoLogoLinkedin className='cursor-pointer hover:scale-110 transition-all ease-in-out'/>
        <IoLogoDribbble className='cursor-pointer hover:scale-110 transition-all ease-in-out'/>
      </div>
    </div>
  );
};

export default SideBar;