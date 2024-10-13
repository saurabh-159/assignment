import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';

const SingleButtonSwiper = () => {
  const swiperRef = useRef(null); // Swiper reference for controlling
  const [isFirstSlide, setIsFirstSlide] = useState(true); // State to track current slide

  const toggleSlide = () => {
    if (isFirstSlide) {
      swiperRef.current.swiper.slideNext(); // Slide down
    } else {
      swiperRef.current.swiper.slidePrev(); // Slide up
    }
    setIsFirstSlide(!isFirstSlide); // Toggle the state
  };

  // Function to update state on slide change (for cursor swipe as well)
  const handleSlideChange = (swiper) => {
    setIsFirstSlide(swiper.activeIndex === 0); // Check if it's the first slide
  };

  return (
    <div className='w-full h-screen bg-gradient-to-r from-white-500 to-yellow-400 flex items-center justify-center'>
      <div className='w-[90%] h-[90%] flex items-center justify-between bg-blue-200 shadow-2xl rounded-lg'>
        <div className='w-[10%] h-[90%] bg-green-300'></div>
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          slidesPerView={1} // Only two slides
          direction={'vertical'} // Vertical direction
          scrollbar={{ draggable: true }} // Enable draggable scrollbar
          modules={[Scrollbar]} // Import Scrollbar module
          threshold={10} // Lower threshold for easier slide change
          touchRatio={1.5} // Increase touch sensitivity
          className="w-[60%] h-[80%] bg-black shadow-lg rounded-lg overflow-hidden"
          onSlideChange={handleSlideChange} // Track slide change for cursor swipe
        >
          <SwiperSlide className="flex items-center justify-center h-full bg-blue-500 text-white text-2xl">
            Slide 1
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center h-full bg-green-500 text-white text-2xl">
            Slide 2
          </SwiperSlide>
        </Swiper>
        <div className="mt-4">
          {/* Toggle between up and down arrow icons using CDN class names */}
          <i
            onClick={toggleSlide} // Toggle between up and down
            className={`cursor-pointer text-5xl text-gray-700 hover:text-gray-900 transition duration-300 ${
              isFirstSlide ? 'ri-arrow-down-line' : 'ri-arrow-up-line'
            }`} // Use Remix Icon class names directly
          ></i>
        </div>
        <div className='w-[10%] h-[90%] bg-green-300'></div>
      </div>
    </div>
  );
};

export default SingleButtonSwiper;
