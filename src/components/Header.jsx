import React, { useState } from 'react'
import { Searchicon, Facebook, Tweeter, Instagram } from './Iconimg';
import Imgheader from '../assets/images/png/buildImgheader.png';

const Header = () => {
    const [show, setshow] = useState(true)
    if (show === false) {
        document.body.classList.add("max-lg:overflow-hidden")

    } else {
        document.body.classList.remove("max-lg:overflow-hidden")
    }
    return (
        <div>
            <div className='shadow-[6px_11px_30px_0px_rgba(0,0,0,0.05)]'>
                <div className='container mx-auto xl:max-w-[1320px] px-lg-3 px-6'>
                    <div className='flex items-center justify-end gap-[38px] sm:pt-[45px] sm:pb-[35px] py-6'>
                        <ul className={`${show ? 'flex md:flex-row items-center flex-col justify-center sm:gap-[52px] gap-[30px] bg-white max-md:min-h-screen transition-all duration-300 ease-linear max-md:fixed top-0 bottom-0 max-md:h-full left-[-100%] max-md:w-full z-[5]' : 'flex transition-all bg-white duration-300 ease-linear flex-row max-md:flex-col items-center sm:gap-[52px] gap-[30px] justify-center max-md:min-h-screen max-md:fixed top-0 bottom-0 max-md:h-full left-0 max-md:w-full z-[5]'}`}>
                            <li><a onClick={() => setshow(!show)} href="#home" className='font-normal navlink text-[16px] text-[#025066] no-underline transition-all duration-300 ease-linear'>HOME</a></li>
                            <li><a onClick={() => setshow(!show)} href="#portfolio" className='font-normal navlink text-[16px] text-[#025066] no-underline transition-all duration-300 ease-linear'>PORTFOLIO</a></li>
                            <li><a onClick={() => setshow(!show)} href="#blog" className='font-normal navlink text-[16px] text-[#025066] no-underline transition-all duration-300 ease-linear'>BLOG</a></li>
                            <li><a onClick={() => setshow(!show)} href="#contact" className='font-normal navlink text-[16px] text-[#025066] no-underline transition-all duration-300 ease-linear'>CONTACT</a></li>
                            <li><a onClick={() => setshow(!show)} href="#shop" className='font-normal navlink text-[16px] text-[#025066] no-underline transition-all duration-300 ease-linear'>SHOP</a></li>
                        </ul>
                        <div className="">
                            <Searchicon />
                        </div>
                        <div onClick={() => setshow(!show)} className='md:hidden w-[32px] h-[28px] relative z-[6] flex justify-between flex-col'>
                            <span className={`${show ? 'bg-[#025066] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all' : "bg-[#025066] transition-all duration-300 rounded-[3px] ease-linear h-[4px] w-full rotate-[50deg] translate-y-[22px]"}`}></span>
                            <span className={`${show ? 'bg-[#025066] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all' : "duration-300 rounded-[3px] ease-linear transition-all hidden"}`}></span>
                            <span className={`${show ? 'bg-[#025066] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all' : "bg-[#025066] transition-all duration-300 rounded-[3px] ease-linear h-[4px] w-full rotate-[-50deg] translate-y-[-50%]"}`}></span>
                        </div>
                    </div>
                </div>
            </div>
            <div id='home' className='bg-BgHeader bg-fixed bg-center relative max-lg:h-[1120px] max-md:h-[1012px] max-sm:h-[785px] overflow-hidden'>
                <div className='container mx-auto xl:max-w-[1320px] px-lg-3 px-6'>
                    <div className='flex flex-row flex-wrap 2xl:pt-[153px] xl:pt-[120px] lg:pt-[80px] sm:pt-[70px] pt-[50px]'>
                        <div className='lg:w-6/12 w-full'>
                            <h1 data-aos="fade-down" className='lg:text-[55px] md:text-[72px] sm:text-[50px] text-[32px] 2xl:text-[72px] font-bold lg:max-w-[498px] text-white leading-[124.687%]'>Morbi facilisis nulla purus, ac</h1>
                            <p data-aos="fade-down" className='text-[18px] font-[normal max-w-[539px] text-white xl:mt-[42px] lg:mt-[25px] sm:mt-[30px] mt-[20px]'>Mauris viverra justo et dictum mattis. Donec massa felis, tempus nec erat id, fermentum rhoncus justo. Donec viverra quam nulla, id faucibus metus ullamcorp</p>
                            <div data-aos="fade-up">
                                <button className='px-[33px] py-[18px] bg-white hover:shadow-[0_3px_20px_rgba(225,225,225,1)] transition-all duration-300 ease-linear hover:scale-[1.012] text-[#025066] rounded-[10px] text-[20px] font-medium xl:mt-[61px] lg:mt-[30px] sm:mt-[45px] mt-[30px]'>CONTACT NOW</button>
                            </div>
                            <div data-aos="fade-up" className='flex items-ceter gap-[13.94px] 2xl:mt-[173px] xl:mt-[70px] lg:mt-[40px] sm:mt-[70px] mt-[45px] pb-[23px]'>
                                <Facebook />
                                <Tweeter />
                                <Instagram />
                            </div>
                        </div>
                        <div className='lg:w-6/12 w-full lg:mt-0 mt-7'>
                            <div className='mr-[-8px]  '>
                                <img data-aos="fade-left" data-aos-easing="ease-in-sine" src={Imgheader} alt="Imgheader" className=" w-full lg:max-w-[840px] md:max-w-[780px] max-w-[550px] sm:max-w-[650px] !max-h-[511px] absolute lg:right-[-10px] right-[-23px] max-4xl:pl-40 max-2xl:pl-60 max-xl:ps-96 max-lg:ps-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;