import React from 'react';
import { FooterInsta, FooterFacebook } from './Iconimg';
import Footerlogo from '../assets/images/webp/footerlogo.webp';

const Footer = () => {
    return (
        <div className='bg-[#025066]'>
            <div className='container mx-auto xl:max-w-[1320px] lg:px-4 px-6'>
                <div className='flex lg:flex-row flex-col lg:justify-between lg:items-end pt-[72px] pb-[68px]'>
                    <div>
                        <img src={Footerlogo} alt="Footerlogo" className='max-w-[87px] w-full cursor-pointer' />
                        <p className='text-[16px] font-normal leading-[139.687%] mt-[32px] text-white lg:max-w-[433px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet. s</p>
                        <div className='flex gap-[15px] items-center mt-[32px]'>
                            <FooterInsta />
                            <FooterFacebook />
                        </div>
                    </div>
                    <div className='flex sm:gap-[65px] gap-[45px] lg:mt-0 mt-7'>
                        <ul className='flex flex-col gap-[17px]'>
                            <li><a href="" className='text-[16px] font-normal leading-[139.687%] text-white no-underline after:w-[0] hover:after:w-[100%] hover:after:left-0 after:bottom-[-5px] after:left-[50%] after:transition-all after:duration-300 after:ease-linear  after:bg-[#ffffff] after:h-[2px] after:rounded-[10px] after:absolute relative'>Renovation</a></li>
                            <li><a href="" className='text-[16px] font-normal leading-[139.687%] text-white no-underline after:w-[0] hover:after:w-[100%] hover:after:left-0 after:bottom-[-5px] after:left-[50%] after:transition-all after:duration-300 after:ease-linear  after:bg-[#ffffff] after:h-[2px] after:rounded-[10px] after:absolute relative'>Carpentry</a></li>
                            <li><a href="" className='text-[16px] font-normal leading-[139.687%] text-white no-underline after:w-[0] hover:after:w-[100%] hover:after:left-0 after:bottom-[-5px] after:left-[50%] after:transition-all after:duration-300 after:ease-linear  after:bg-[#ffffff] after:h-[2px] after:rounded-[10px] after:absolute relative'>Tiling</a></li>
                            <li><a href="" className='text-[16px] font-normal leading-[139.687%] text-white no-underline after:w-[0] hover:after:w-[100%] hover:after:left-0 after:bottom-[-5px] after:left-[50%] after:transition-all after:duration-300 after:ease-linear  after:bg-[#ffffff] after:h-[2px] after:rounded-[10px] after:absolute relative'>Ceiling</a></li>
                        </ul>
                        <ul className='flex flex-col gap-[17px]'>
                            <li><a href="" className='text-[16px] font-normal leading-[139.687%] text-white no-underline after:w-[0] hover:after:w-[100%] hover:after:left-0 after:bottom-[-5px] after:left-[50%] after:transition-all after:duration-300 after:ease-linear  after:bg-[#ffffff] after:h-[2px] after:rounded-[10px] after:absolute relative'>Renovation</a></li>
                            <li><a href="" className='text-[16px] font-normal leading-[139.687%] text-white no-underline after:w-[0] hover:after:w-[100%] hover:after:left-0 after:bottom-[-5px] after:left-[50%] after:transition-all after:duration-300 after:ease-linear  after:bg-[#ffffff] after:h-[2px] after:rounded-[10px] after:absolute relative'>Carpentry</a></li>
                            <li><a href="" className='text-[16px] font-normal leading-[139.687%] text-white no-underline after:w-[0] hover:after:w-[100%] hover:after:left-0 after:bottom-[-5px] after:left-[50%] after:transition-all after:duration-300 after:ease-linear  after:bg-[#ffffff] after:h-[2px] after:rounded-[10px] after:absolute relative'>Tiling</a></li>
                            <li><a href="" className='text-[16px] font-normal leading-[139.687%] text-white no-underline after:w-[0] hover:after:w-[100%] hover:after:left-0 after:bottom-[-5px] after:left-[50%] after:transition-all after:duration-300 after:ease-linear  after:bg-[#ffffff] after:h-[2px] after:rounded-[10px] after:absolute relative'>Ceiling</a></li>
                        </ul>
                        <ul className='flex flex-col gap-[17px]'>
                            <li><a href="" className='text-[16px] font-normal leading-[139.687%] text-white no-underline after:w-[0] hover:after:w-[100%] hover:after:left-0 after:bottom-[-5px] after:left-[50%] after:transition-all after:duration-300 after:ease-linear  after:bg-[#ffffff] after:h-[2px] after:rounded-[10px] after:absolute relative'>Renovation</a></li>
                            <li><a href="" className='text-[16px] font-normal leading-[139.687%] text-white no-underline after:w-[0] hover:after:w-[100%] hover:after:left-0 after:bottom-[-5px] after:left-[50%] after:transition-all after:duration-300 after:ease-linear  after:bg-[#ffffff] after:h-[2px] after:rounded-[10px] after:absolute relative'>Carpentry</a></li>
                            <li><a href="" className='text-[16px] font-normal leading-[139.687%] text-white no-underline after:w-[0] hover:after:w-[100%] hover:after:left-0 after:bottom-[-5px] after:left-[50%] after:transition-all after:duration-300 after:ease-linear  after:bg-[#ffffff] after:h-[2px] after:rounded-[10px] after:absolute relative'>Tiling</a></li>
                            <li><a href="" className='text-[16px] font-normal leading-[139.687%] text-white no-underline after:w-[0] hover:after:w-[100%] hover:after:left-0 after:bottom-[-5px] after:left-[50%] after:transition-all after:duration-300 after:ease-linear  after:bg-[#ffffff] after:h-[2px] after:rounded-[10px] after:absolute relative'>Ceiling</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='py-[20px] bg-[#033A49]'>
                <p className='text-[16px] font-normal leading-[139.687%] text-white text-center'>Copyright@IS Company2021 </p>
            </div>
        </div>
    )
}

export default Footer