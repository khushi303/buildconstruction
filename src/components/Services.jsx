import React from 'react'
import { Serviceplaybtn } from './Iconimg';
import buildingimg from '../assets/images/png/servicebuildingimg.png';

const Services = () => {
    return (
        <div className='lg:pt-[113px] md:pt-[80px] pt-[70px] pb-[70px]'>
            <div className='container mx-auto xl:max-w-[1320px] lg:px-4 px-6'>
                <div className='flex flex-row flex-wrap'>
                    <div className='lg:w-7/12 w-full flex sm:flex-row flex-col lg:justify-between lg:pr-[50px]'>
                        <div data-aos="fade-right" className='border border-solid border-[#025066] bg-[rgba(196,196,196,0.00)] sm:max-w-[141px] sm:gap-0 gap-5 w-full flex sm:flex-col flex-row sm:justify-center justify-between px-4 items-center lg::max-h-[519px] '>
                            <p className='wr_verticle text-[16px] font-bold text-[#025066] sm:pt-[27px] whitespace-nowrap sm:tracking-[unset] tracking-[3px]'>HERE WE DO</p>
                            <div className='sm:h-[168px] h-[1px] sm:w-[1px] max-w-[266pxpx] sm:max-w-[unset] w-full bg-[#025066] sm:mt-[23px]'></div>
                            <p className='text-[51.368px] text-[#025066] font-medium sm:mb-[23px]'>01</p>
                        </div>
                        <div data-aos="fade-down" className='lg:pl-6 xl:pl-0 sm:pl-24 sm:mt-0 mt-8'>
                            <p className='text-[20px] font-medium text-black'>OUR SERVICES</p>
                            <h2 className='sm:text-[48px] text-[32px] font-bold sm:max-w-[280px] text-[#025066] leading-[117%] pt-[10px] sm:pt-[16px]'>Construction building.</h2>
                            <p className='text-[16px] font-normal sm:max-w-[368px] leading-[139.687%] text-[rgba(2,80,102,0.70)] xl:mt-[38px] lg:mt-[25px] sm:mt-[35px] mt-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet. Vivamus eros nibh, dictum sed venenatis vitae, ornare eget magna. Etiam mattis, felis eu interdum posuere, justo neque dictum sapien, eu luctus neque nulla non ante. Quisque pharetra facilisis mauris a hendrerit. Donec rutrum maximus turpis id luctus. In gravida pulvinar elit, a auctor mauris scele risque ac. Aliquam facilisis tortor elit, auctor semper est ve stibulum ut. Nam sit amet libero vulputate, faucibus purus et, vestibulum sem. Nunc ac nulla erat. Nulla facilis</p>
                            <button><a href="" className='flex items-center gap-1 xl:mt-[29px] lg:mt-[14px] sm:mt-[25px] mt-[20px]'><span className='text-[16px] font-bold text-[#025066] leading-[120.187%]'>VIEW PROJECTS </span><Serviceplaybtn /></a></button>
                        </div>
                    </div>
                    <div data-aos="fade-up" className='lg:w-5/12 md:w-10/12 w-full xl:pl-[50px] lg:mt-0 mt-6 mx-auto'>
                        <img src={buildingimg} alt="buildingimg" className='w-full lg:max-w-[503px] lg:h-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;