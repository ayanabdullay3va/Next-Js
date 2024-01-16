import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { TbMeat } from "react-icons/tb";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default () => {
  return (
    <>
    <div className='div'>  <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation 
      
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide > <img src="https://preview.colorlib.com/theme/pulse/img/slider/slider-1.jpg.webp" alt="" />

      <h1  className='text1'>Special Dish.
</h1><p>By Chef Francis Smith</p>
      
 
     </SwiperSlide>

      <SwiperSlide><img src="https://preview.colorlib.com/theme/pulse/img/slider/slider-3.jpg.webp" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://preview.colorlib.com/theme/pulse/img/slider/slider-2.jpg.webp" alt="" /></SwiperSlide>
    </Swiper></div>
    <div className='info-div'>


<div className='info'>
<TbMeat />
<h2>Welcome</h2>

</div>
<div className='cards'>
  <div className='card1'><h2>2002</h2>
  
  <b>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</b></div>
  <div className='card2'><h2>2010</h2>
  <b>Stpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium.</b>
  </div>
  <div className='card3'><h2>2018</h2>
  <b>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</b></div>
</div>
<div className='image'><img src="https://preview.colorlib.com/theme/pulse/img/sign.png.webp" alt="" /></div>

    </div>

    <div className='div1'>
      <div className='sec-img'><img src="https://preview.colorlib.com/theme/pulse/img/review-bg.jpg.webp" alt="" />
      <h1>Testimonials</h1>
      </div>
      <div className='sec-text1'><p>Integer sed facilisis eros. In iaculis rhoncus velit in malesuada. In hac habitasse platea dictumst. Fusce erat ex, consectetur sit amet ornare suscipit, porta et erat. Donec nec nisi in nibh commodo laoreet. Mauris dapibus justo ut feugiat malesuada. Fusce ultricies ante tortor, non vestibulum est feu-giat ut. </p></div>
    </div>
    </>
  );
};