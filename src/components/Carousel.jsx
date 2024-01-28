import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import {Image1, Image2, Image3,Image4,Image5} from '../assets/carousel'
import {Link} from 'react-router-dom'

const Carousel = () => {
  useEffect(() => {
    const mySwiper = new Swiper('.swiper-container', {
      // Optional: Add Swiper options here...
      loop: true, // Enable continuous loop
      spaceBetween:10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []);

  return (
    <div className='py-10 bg-yellow-500 overflow-hidden'>
      <div className='swiper-container w-[95vw] md:w-[65vw] mx-auto h-[50vh] md:h-[65vh]'>
        <div className='swiper-wrapper'>
          <div className='swiper-slide'>
            <Link to="/women">
            <img src={Image1} className='w-full h-full object-fit rounded-lg rounded-lg' alt="Pic1" />
            </Link>
          </div>
          <div className='swiper-slide'>
            <Link to="/men">
            <img src={Image2} className='w-full h-full object-fit rounded-lg' alt="Pic2" />
            </Link>
          </div>
          <div className='swiper-slide'>
            <Link to="/children">
            <img src={Image3} className='w-full h-full object-fit rounded-lg' alt="Pic3" />
            </Link>
          </div>
          <div className='swiper-slide'>
            <Link to="women">
            <img src={Image4} className='w-full h-full object-fit rounded-lg' alt="Pic3" />
            </Link>
          </div>
          <div className='swiper-slide'>
            <Link to="men">
            <img src={Image5} className='w-full h-full object-fit rounded-lg' alt="Pic3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
