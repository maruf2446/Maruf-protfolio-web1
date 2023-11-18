import React from 'react';
import { IoArrowForwardOutline } from "react-icons/io5";
import Strings from './Shared/Strings';

const Services = () => {
  const servicesList = [
    {
      id: 1,
      title: Strings.FRONTED,
      desc:Strings.FRONTED_DESC,
      logo:"https://cdn-icons-png.flaticon.com/512/7858/7858975.png",
    },
    {
      id: 2,
      title: Strings.BACKEND,
      desc:Strings.BACKEND_DESC,
      logo:"https://c8.alamy.com/comp/R1PYDB/code-vector-icon-isolated-on-transparent-background-code-transparency-logo-concept-R1PYDB.jpg",
    },
    {
      id: 1,
      title: Strings.ONLINE,
      desc:Strings.ONLINE_DESC,
      logo:"https://img.lovepik.com/element/45009/1573.png_860.png",
    },
  ]
  return (
    <div className='px-12 mt-12'>
      <div className='flex items-center'>
        <div className='w-[20px] h-[7px] bg-green-600 rounded-full'></div>
        <div className='w-full border-[1px] mx-4 mt-[-2px]'></div>
        <h2 className='text-[24px] font-bold'>{Strings.SERVICES}</h2>
        <div className='w-full border-[1px]  mt-[-2px] mx-4'></div>
        <div className='w-[20px] h-[7px] bg-green-600 rounded-full'></div>
      </div>
      <div className='flex justify-around mt-16'>
        {
          servicesList.map((item)=>(
            <div className='text-center flex flex-col justify-center items-center gap-6'>
              <div className='bg-gray-200 rounded-full w-[80px] h-[80px]'>
                <img src={item.logo} className='w-[80px] h-[80px] p-5 hover:scale-110 transition-all cursor-pointer' alt="" />
              </div>
              <h2 className='mt-5 font-bold'>{item.title}</h2>
              <h2 className='text-gray-400'>{item.desc}</h2>
              <IoArrowForwardOutline className='bg-green-500 text-[35px] p-2 text-white rounded-full cursor-pointer hover:scale-110 transition-all' /> 
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Services;