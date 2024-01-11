import React from 'react';
import Buildingimg1 from '../assets/images/webp/buildingimg1.webp'
import Buildingimg2 from '../assets/images/webp/buildingimg2.webp'
import Buildingimg3 from '../assets/images/webp/buildingimg3.webp'
import Buildingimg4 from '../assets/images/webp/buildingimg4.webp'
import Buildingimg5 from '../assets/images/webp/buildingimg5.webp'
import Buildingimg6 from '../assets/images/webp/buildingimg6.webp'


const Imggallery = () => {
    const Imgdata = [
        {
            img: Buildingimg1
        },
        {
            img: Buildingimg2
        },
        {
            img: Buildingimg3
        },
        {
            img: Buildingimg4
        },
        {
            img: Buildingimg5
        },
        {
            img: Buildingimg6
        },
    ]
    return (
        <div id='shop' className='bg-[#025066] lg:pt-[91px] pt-[70px] pb-[70px] lg:pb-[92px]'>
            <div className='container mx-auto xl:max-w-[1320px] lg:px-4 px-6'>
                <div className='flex flex-row flex-wrap justify-between'>
                    {Imgdata.map((a, index) => {
                        return (
                            <>
                                <div key={index} data-aos="zoom-in" className='lg:w-[32.55%] sm:w-[49%] w-full mb-4'>
                                    <img src={a.img} alt="buildingimg" className='w-full hover:shadow-[0px_13px_40px_0px_rgba(0,0,0,0.25)] transition-shadow duration-500' />
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Imggallery