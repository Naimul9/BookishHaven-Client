import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

import book1 from '../assets/book1.jpg'
import book2 from '../assets/book2.jpg'
import book3 from '../assets/book3.jpg'
import book4 from '../assets/book4.jpg'




const Slider = () => {

 

    return (
        <div className='container px-6 py-12 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={ true }
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Slide image = {book1} 
            text='Check out the latest additions to our collection!'
            button='Browse New Arrivals'></Slide>
        </SwiperSlide>
       
        <SwiperSlide>
            <Slide image={book2}
            text='Join us for our Summer Reading Program'
            button ='Register Now'></Slide>
        </SwiperSlide>
       
        <SwiperSlide>
            <Slide
            image={book3}
            text='Access our digital library from anywhere'
            button='Explore Digital Resources'
            ></Slide>
        </SwiperSlide>


        <SwiperSlide>
            <Slide
            image={book4}
            text='Utilize our extensive library services'
            button='View Services'>

            </Slide>
        </SwiperSlide>
       
     
      </Swiper>
    </div>
    );
};

export default Slider;