import React from 'react';
import { Serviceplaybtn } from './Iconimg';
import Whitehouseimg from '../assets/images/png/whitehouse.png';

const ConstructBuilding = () => {
    return (
        <div className='lg:pt-[50px] pt-[20px] pb-[60px]'>
            <div className='container mx-auto xl:max-w-[1320px] lg:px-4 px-6'>
                <div className='flex flex-row flex-wrap justify-between'>
                    <div data-aos="fade-down" className='lg:w-5/12 pb-[32px]'>
                        <p className='text-[20px] font-medium text-black sm:mb-4 mb-3'>MAKE UNIQUE</p>
                        <h2 className='sm:text-[48px] text-[32px] font-bold text-[#025066] lg:max-w-[280px] leading-[111%]'>Construction building.</h2>
                        <p className='text-[16px] font-normal text-[rgba(2,80,102,0.70)] leading-[139.687%] lg:max-w-[446px] sm:mt-[33px] mt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet. Vivamus eros nibh, dictum sed venenatis vitae, ornare eget magna. Etiam mattis, felis eu interdum posuere, justo neque dictum sapien, eu luctus neque nulla non ante. Quisque pharetra facilisis mauris a hendrerit. Donec rutrum maximus turpis id luctus. In gravida pulvinar elit, a auctor mauris scele risque ac. Aliquam facilisis tortor elit, auctor semper est ve stibulum ut. Nam sit amet libero vulputate, faucibus purus et, vestibulum sem. Nunc ac nulla erat. Nulla facilis</p>
                        <button><a href="" className='flex items-center gap-1 xl:mt-[40px] lg:mt-[14px] sm:mt-[25px] mt-[20px]'><span className='text-[16px] font-bold text-[#025066] leading-[120.187%]'>VIEW PROJECTS </span><Serviceplaybtn /></a></button>
                    </div>
                    <div data-aos="fade-up" className='lg:w-6/12 flex items-end'>
                        <img src={Whitehouseimg} alt="Whitehouseimg" className='w-full lg:h-[465px] lg:object-cover lg:object-center' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConstructBuilding