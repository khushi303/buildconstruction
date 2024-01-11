import React, { useState } from 'react';
import Interiordesignimg from '../assets/images/png/interiordesignimg.png';
// import Closebtn from '../assets/images/png/closebtn.png';
import { Serviceplaybtn, InteriorPlaybtn } from './Iconimg';

const InteriorDesign = () => {
    const [showmodal, setshowmodal] = useState(false)
    if (showmodal === true) {
        document.body.classList.add("overflow-hidden")

    } else {
        document.body.classList.remove("overflow-hidden")
    }
    return (
        <div className='lg:pt-[75px] pb-[50px]'>
            <div className='container mx-auto xl:max-w-[1320px] lg:px-4 px-6'>
                <div className='flex lg:flex-row flex-wrap flex-col-reverse w-full'>
                    <div className='lg:w-7/12 w-full flex items-end lg:mt-0 mt-6'>
                        <div data-aos="fade-right" className='relative'>
                            <img src={Interiordesignimg} alt="Interiordesignimg" className='w-full lg:h-[479px] lg:object-cover lg:object-center cursor-pointer' />
                            <div onClick={() => setshowmodal(true)} className='absolute top-0 bottom-0 cursor-pointer left-0 right-0 flex items-center justify-center'>
                                <InteriorPlaybtn />
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" className='lg:w-5/12 w-full flex justify-end items-end'>
                        <div className='lg:max-w-[374px]'>
                            <p className='text-[20px] font-medium text-black lg:text-end'>MAKE UNIQUE</p>
                            <h2 className='sm:text-[48px] text-[32px] font-bold text-[#025066] mt-4 lg:text-end leading-[117%]'>Solutions interior design</h2>
                            <p className='text-[16px] font-normal leading-[139.687%] lg:text-end mt-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet. Vivamus eros nibh, dictum sed venenatis vitae, ornare eget magna. Etiam mattis, felis eu interdum posuere, justo neque dictum sapien, eu luctus neque nulla non ante. Quisque pharetra facilisis mauris a hendrerit. Donec rutrum maximus turpis id luctus. In gravida pulvinar elit, a auctor mauris scele risque ac. Aliquam facilisis tortor elit, auctor semper est ve stibulum ut. Nam sit amet libero vulputate, faucibus purus et, vestibulum sem. Nunc ac nulla erat. Nulla facilis</p>
                            <button> <a href="" className='flex items-center lg:justify-end gap-1 xl:mt-[29px] lg:mt-[14px] sm:mt-[25px] mt-[20px]'><span className='text-[16px] font-bold text-[#025066] leading-[120.187%]'>VIEW PROJECTS </span><Serviceplaybtn /></a></button>
                        </div>
                    </div>
                </div>
            </div>
            {showmodal ? (
                <>
                    <div className='fixed z-[7] top-0 left-0 h-full min-h-screen backdrop-blur-sm w-full flex items-center justify-center bg-[rgba(2,80,102,0.67)]'>
                        <div className='bg-white p-5 rounded-[5px] relative'>
                            <iframe className='sm:w-[550px] w-[300px] sm:h-[380px] h-[230px]' src="https://www.youtube.com/embed/j38ta0U59us?si=v1OlKL5WPEiGHKju" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay: clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            <div className='flex items-center justify-end mt-5'>
                                <button onClick={() => setshowmodal(false)} className='mt-4 text-end py-3 rounded-[4px] group hover:bg-[#025066] px-8 border border-solid border-[#025066] transition-colors duration-300 ease-linear'><p className='text-[16px] font-medium group-hover:text-white text-[#025066]'>Close</p></button>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    )
}

export default InteriorDesign;