import React, { useState } from 'react';
import Menupage from "../home/menu/Menupage"; // Adjust the path to where Menupage is located
import FrontCenter from './FrontCenter';

const Front = () => {
  const [menuOpen, setmenuOpen] = useState(false);

  const menubarOpens = () => {
    setmenuOpen(true);  // Open the menu when clicking the icon
  }

  return (
    <div className='bg-[#1B1A1A] h-screen w-screen'>
      <div className='w-full h-[15vh] shadow-lg shadow-black-500/50 bg-[#1B1A1A] px-4'>
        <div className='flex justify-between items-center h-full p-8'>
          <h1 className='text-4xl text-white'>Welcome</h1>
          <div className='text-white text-base md:text-3xl lg:text-4xl'>
            <i onClick={menubarOpens} className="ri-menu-line"></i>
          </div>
        </div>
      </div>

      {/* Passing menuOpen and setmenuOpen to Menupage */}
      <Menupage menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
      <div
      className='w-full h-full p-8 text-white flex justify-center item-center  '
      >
      <FrontCenter/>
      </div>
      
    </div>
  );
}

export default Front;
