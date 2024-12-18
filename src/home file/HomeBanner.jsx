
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

const HomeBanner = () => {

    return (
        <div>


    <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
        <div>
        <div>
        <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(  https://elomus-theme.myshopify.com/cdn/shop/files/slider2-elomus1-1920x900.jpg?crop=center&format=pjpg&height=900&v=1613722537&width=1920  )",
        }}>
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content ">
        <div className="">
        <div className=' text-white '>
        <p className=' droFont text-xl'>The world’s Smallest Quadcopter</p>
        <p className=' mt-6 text-7xl font-bold '>Elomus F18<br></br> Drone 3 Auto</p>
        <p className=' droFont mt-10  '>Newest hover function, Elomus F18 Drone 3 Auto Quadcopter UFO with 2Mp Wifi Camera</p>
        <button className='  btn mt-5 droFont bg-white text-black '>SHOP NOW</button>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <div>
        <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(  https://elomus-theme.myshopify.com/cdn/shop/files/slider1-elomus1-1920x900.jpg?crop=center&format=pjpg&height=900&v=1613722537&width=1920  )",
        }}>
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content ">
        <div className="">
        <div className=' text-white '>
        <p className=' droFont text-xl'>The world’s Smallest Quadcopter</p>
        <p className=' mt-6 text-7xl font-bold '>BuzzBee <br></br>Nano Drone</p>
        <p className=' droFont mt-10  '>Ideal for indoor usage & ultra portable. 3 User modes, junior, intermediate & healess.</p>
        <button className='  btn mt-5 droFont bg-white text-black '>SHOP NOW</button>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </SwiperSlide>
        </Swiper>
    </>
            
        </div>
    );
};

export default HomeBanner;