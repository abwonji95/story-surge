'use client'
import Link from "next/link";
import { useState, useRef, useEffect } from "react";


import { RxChevronLeft, RxChevronRight, RxDotFilled } from "react-icons/rx";


export default function Carousel(){


  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
    },

    {
      url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    },
  ];

  const Ref = useRef(null);
 
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex:any) => {
    setCurrentIndex(slideIndex);
  };

  const autoSlider=()=>{
    for (let i = 100; i > 0; i--) {
      console.log("time remaining is => ", i)
  }

  }

  useEffect(()=>{},[])

  return (
    <div>
      <div className='max-w-full h-[780px] w-full m-auto py-16 px-4 '>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500 text-white'
      ></div>
      <div className=" flex flex-col float-left text-black text-xl font-semibold">
          <h1 className="text-justify">
            Text description text description text description
            text description text description

          </h1>
          <Link href="/welcome" className="text-blue-700 flex flex-row"><span>Get Started <RxChevronRight/></span></Link>
        </div>
      
      
      <div className="float-right flex flex-row gap-7 p-2">
        
      <div className='py-2 float-right'>
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer float-right '>
          <RxDotFilled />     
          </div>
        ))}
      </div>
      <div className='text-2xl text-black cursor-pointer'>
        <RxChevronLeft  onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='text-2xl text-black cursor-pointer'>
      <RxChevronRight  onClick={nextSlide} size={30} />
      </div>
     
                
                
      </div>
    </div>
    </div>
  )
}
    