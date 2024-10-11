import React, { useState } from 'react';

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function to change the state
  const toggleDiv = () => {
    setIsOpen(!isOpen); // Toggling between open and closed state
  };

  return (
    <div className='w-[100%] h-[100vh] bg-red-700 flex items-center justify-center'>
      <div className='w-[90%] h-[90%] flex items-center justify-between bg-blue-200'>
        
        <div className='w-[10%] h-[90%] bg-green-300'></div>
        
        {/* Main div which slides up and down */}
        <div className={`w-[50vw] h-[80%] bg-yellow-300 absolute right-[23%] overflow-auto`}>
          {/* Content that moves up and down */}
          <div className={`w-[100%] h-[100%] bg-blue-300 flex flex-col items-center pt-20 transition-transform duration-500 ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
            <h1 className='pb-2 text-bold font-semibold'>Area Name:</h1>
            <div className='w-[80%] h-[50%] bg-red-200'></div>
            <h1 className='pt-5 font-semibold'>Design: Classical: Finish White</h1>
          </div>
          {/* <div className='w-[100%] h-[100%] bg-blue-500'>hello</div> */}
        </div>
        
        {/* Arrow icon to trigger the toggle */}
        <div className='w-[10%] h-[90%] bg-yellow-300 flex items-center justify-center'>
          <i 
            className="ri-arrow-up-line text-5xl cursor-pointer"
            onClick={toggleDiv} // Triggering the toggle function
          ></i>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
