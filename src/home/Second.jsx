import React, { useState } from 'react';

const Second = () => {
  const [currentImage, setCurrentImage] = useState("https://magppie-sunrooof.vercel.app/assets/after-sqq70029.png");

  // Function to change the image when "After" button is clicked
  const imgchange1 = () => {
    setCurrentImage("https://magppie-sunrooof.vercel.app/assets/before-D3X0u4gs.png");
  };
  const imgchange2 = () => {
    setCurrentImage("https://magppie-sunrooof.vercel.app/assets/after-sqq70029.png");
  };

  return (
    <div className='bg-[#F3aF4F6] h-full w-full'>
      <div>
        <h1 className='text-4xl  pt-6 text-center text-gray-800 font-gilroy'>Witness the change After Sun-roof</h1>
        
        <div className='w-[90%] p-10 h-[90%] m-auto'>
          <div className='w-full h-[90vh] overflow-hidden relative'>
          
            <img 
              src={currentImage} 
              alt="After Sunroof" 
              className='absolute inset-0 w-full h-full object-cover' // Ensures the image covers the div fully
            />
          </div>
          <div className='flex items-center justify-center mt-8 space-x-4'>
            <button
            onClick={imgchange2} 
            className='px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700'>Before</button>
            <button 
              onClick={imgchange1} 
              className='px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700'
            >
              After
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Second;
