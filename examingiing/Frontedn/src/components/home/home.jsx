// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import "./../home/home.scss"
import 'animate.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation

      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide >
      <img src="https://preview.colorlib.com/theme/pulse/img/slider/slider-1.jpg.webp" alt="" />
        <div  className='slider1'>
     
     <p className='swipertext1' >Food and more.</p>
    <p className='swipertext2'>By Chef Francis Smith</p></div>
     
      </SwiperSlide>
      <SwiperSlide>

      <div  className='slider1'><img src=" https://preview.colorlib.com/theme/pulse/img/slider/slider-2.jpg.webp" alt="" />
     
     <p className='swipertext1 animate__animated animate__fadeInUp' >Special Dish.</p>
    <p className='swipertext2'>By Chef Francis Smith</p></div>
     
      </SwiperSlide>
      <SwiperSlide>

      <div  className='slider1'><img src=" https://preview.colorlib.com/theme/pulse/img/slider/slider-3.jpg.webp" alt="" />
     
     <p className='swipertext1' >Hygienic Food.</p>
    <p className='swipertext2'>By Chef Francis Smith</p></div>
     
      </SwiperSlide>
    </Swiper>
  );
};