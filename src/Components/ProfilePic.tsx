import React from 'react';
import img2 from "../assets/img/pro.jpg"

const ProfilePic = () => {
  return (
    <div className='fixed'>
      <img src={img2} className='h-screen object-cover' />
    </div>
  );
};

export default ProfilePic;