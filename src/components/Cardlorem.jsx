import React from 'react';
import Crdimg1 from '../assets/images/png/loremimg1.png'
import Crdimg2 from '../assets/images/png/loremimg2.png'
import Crdimg3 from '../assets/images/png/loremimg3.png';
import { Serviceplaybtn } from './Iconimg';

const Cardlorem = () => {
    const Carddata = [
        {
            id: 0,
            img: Crdimg1,
        },
        {
            id: 1,
            img: Crdimg2,
        },
        {
            id: 2,
            img: Crdimg3,
        }
    ]
    return (
        <div id='blog' className='bg-[#025066] lg:pt-[77px] pt-[70px] lg:pb-[85px] pb-[70px]'>
            <div className='container xl:max-w-[1320px] mx-auto lg:px-4 px-6'>
                <div className='flex flex-row flex-wrap lg:justify-between lg:gap-0 md:gap-7 sm:gap-5 gap-6 justify-center'>
                    {Carddata.map((a, index) => {
                        return (
                            <>
                                <div key={index.id} data-aos="zoom-in" className='lg:w-[31.73%] sm:w-[48%]'>
                                    <div className='pl-[15px] pr-[14px] pt-[15px] pb-[26px] rounded-[5px] bg-white'>
                                        <img src={a.img} alt="cardimg" className='rounded-[5px] w-full' />
                                        <h3 className='text-[25px] font-bold leading-[139.687%] text-[#025066] mt-[20px] mb-[11px]'>Lorem ipsum dolo</h3>
                                        <p className='text-[rgba(2,80,102,0.70)] text-[16px] font-normal leading-[139.687%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper </p>
                                        <button><a href="" className='flex items-center gap-1 mt-[13px]'><span className='text-[16px] font-bold text-[#025066] leading-[120.187%]'>VIEW PROJECTS </span><Serviceplaybtn /></a></button>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Cardlorem