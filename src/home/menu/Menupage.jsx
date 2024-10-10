import React from 'react';
import { motion } from "framer-motion";

const Menupage = ({ menuOpen, setmenuOpen }) => {
  
  const closeMenu = () => {
    setmenuOpen(false); // Close the menu
  };

  return (
    <>
      {/* Overlay that will be shown when menu is open */}
      {menuOpen && (
        <div 
          className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40'
          onClick={closeMenu} // Close menu when clicked outside
        />
      )}

      {/* The actual Menupage */}
      <motion.div
        className='fixed top-0 right-0 z-50 h-full w-[40%] bg-red-600'
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)', // Safari-specific
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
        }}
        animate={{ right: menuOpen ? 0 : '-50%' }}
        initial={{ right: '-50%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <h1 className='text-white p-8'>Menu Page</h1>
      </motion.div>
    </>
  );
}

export default Menupage;
