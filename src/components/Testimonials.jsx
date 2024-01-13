import React from 'react';
import Slider from "react-slick";
import Profileimg from '../assets/images/webp/profileimg.webp';
import Profileimg1 from '../assets/images/webp/slideimg2.webp';
import { Fivestar, Sliderarrowprev, Sliderarrownext } from './Iconimg';

const Testimonials = () => {
    const slider = React.useRef(null);
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        fade: true,
        lazyLoad: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='lg:pt-[88px] pt-[70px] lg:pb-[124px] pb-[70px]'>
            <div className='container mx-auto xl:max-w-[1320px] lg:px-4 px-6'>
                <h3 data-aos="fade-left" className='text-[20px] font-medium text-black leading-[100%] text-center'>TESTIMONIALS</h3>
                <h2 data-aos="fade-left" className='sm:text-[48px] text-[32px] font-bold text-[#025066] leading-[111%] text-center pt-[19px]'>What Clients say about us</h2>
                <div data-aos="fade-up" className='mt-[45px] relative'>
                    <Slider ref={slider} {...settings}>
                        <div>
                            <div className='flex items-center justify-center flex-col'>
                                <img src={Profileimg} alt="Profileimg" className='max-w-[126px] w-full' />
                                <p className='text-[16px] font-bold mt-[19px] text-[#025066] mb-[30px]'>TREGSDKH</p>
                                <Fivestar />
                                <p className='text-[16px] font-normal leading-[139.687%] text-[rgba(2,80,102,0.70)] w-[469px] text-center mt-[18.95px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet. s</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center justify-center flex-col'>
                                <img src={Profileimg1} alt="Profileimg1" className='max-w-[126px] w-full' />
                                <p className='text-[16px] font-bold mt-[19px] text-[#025066] mb-[30px]'>TREGSDKH</p>
                                <Fivestar />
                                <p className='text-[16px] font-normal leading-[139.687%] text-[rgba(2,80,102,0.70)] w-[469px] text-center mt-[18.95px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet. s</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center justify-center flex-col'>
                                <img src={Profileimg} alt="Profileimg" className='max-w-[126px] w-full' />
                                <p className='text-[16px] font-bold mt-[19px] text-[#025066] mb-[30px]'>TREGSDKH</p>
                                <Fivestar />
                                <p className='text-[16px] font-normal leading-[139.687%] text-[rgba(2,80,102,0.70)] w-[469px] text-center mt-[18.95px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet. s</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center justify-center flex-col'>
                                <img src={Profileimg1} alt="Profileimg1" className='max-w-[126px] w-full' />
                                <p className='text-[16px] font-bold mt-[19px] text-[#025066] mb-[30px]'>TREGSDKH</p>
                                <Fivestar />
                                <p className='text-[16px] font-normal leading-[139.687%] text-[rgba(2,80,102,0.70)] w-[469px] text-center mt-[18.95px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet. s</p>
                            </div>
                        </div>
                    </Slider>
                    <div onClick={() => slider?.current?.slickPrev()} className='absolute cursor-pointer top-[17%] sm:left-[17%] left-[5%]'>
                        <Sliderarrowprev />
                    </div>
                    <div onClick={() => slider?.current?.slickNext()} className='absolute cursor-pointer top-[17%] sm:right-[17%] right-[5%]'>
                        <Sliderarrownext />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;