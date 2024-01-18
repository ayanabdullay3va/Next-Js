import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import "./../swiper/swiper.scss"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card from './../cards/card';
export default () => {
  return (<>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className='swiper1image'>
           
            <h1>Shop With Us</h1>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br /> 
                Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.

 
</p>
        </div>
        <button className='about-btn'>
            Shop now
        </button>
        <button className='text-btn'>
            Club membership
        </button>
      </SwiperSlide>
   
    </Swiper>
      <Card/>
      </>
  );

};
