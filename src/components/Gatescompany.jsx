import React from 'react';
import Workerimg from '../assets/images/webp/Workerimg.webp';

const Gatescompany = () => {
    return (
        <div className='lg:pt-[83px] pt-[70px]'>
            <div className='container mx-auto xl:max-w-[1320px] lg:px-4 px-6'>
                <div className='flex flex-row flex-wrap justify-center'>
                    <div data-aos="fade-right" className='lg:w-1/2 w-full flex flex-col justify-center'>
                        <p className='text-[20px] font-medium text-black sm:mb-[25px] mb-[18px]'>OTHER SERVICES</p>
                        <h2 className='sm:text-[48px] text-[32px] font-bold text-[#025066] leading-[111%] lg:max-w-[420px]'>Gates Construction Company</h2>
                        <p className='text-[25px] font-normal leading-[139.687%] text-[#025066] sm:mt-[44px] mt-[28px]'>Best Builing Material</p>
                        <p className='text-[16px] font-normal text-[rgba(2,80,102,0.70)] lg:max-w-[469px] sm:mt-[17px] mt-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet. s</p>
                        <p className='text-[25px] font-normal leading-[139.687%] text-[#025066] sm:mt-[33px] mt-[20px]'>Experience Workers</p>
                        <p className='text-[16px] font-normal text-[rgba(2,80,102,0.70)] lg:max-w-[469px] sm:mt-[17px] mt-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet. s</p>
                        <p className='text-[25px] font-normal leading-[139.687%] text-[#025066] sm:mt-[33px] mt-[20px]'>Modern Technologies</p>
                        <p className='text-[16px] font-normal text-[rgba(2,80,102,0.70)] lg:max-w-[469px] sm:mt-[17px] mt-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet. s</p>
                    </div>
                    <div data-aos="zoom-out" className='lg:w-1/2 md:w-10/12 w-full lg:mt-0 mt-8'>
                        <img src={Workerimg} alt="Workerimg" className='w-full lg:h-[755px] lg:object-cover lg:object-center' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gatescompany