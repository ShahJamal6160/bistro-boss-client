import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../../src/assets/home/slide1.jpg'
import slide2 from '../../src/assets/home/slide2.jpg'
import slide3 from '../../src/assets/home/slide3.jpg'
import slide4 from '../../src/assets/home/slide4.jpg'
import slide5 from '../../src/assets/home/slide5.jpg'
import SectionTitle from '../Components/SectionTitle';
const Category = () => {
    return (
        <section>
            <SectionTitle
                heading={"From 11.00 am to 10.00 pm"}
                subHeading={"Order Online"}
            ></SectionTitle>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24 "
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Soup</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Salad</h3>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;