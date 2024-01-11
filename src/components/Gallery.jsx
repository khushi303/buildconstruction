import React from 'react'

const Gallery = () => {
    return (
        <div id='portfolio' className='lg:pt-[83px] pt-[70px] lg:pb-[17px] pb-[70px]'>
            <div className='container mx-auto xl:max-w-[1320px] lg:px-4 px-6'>
                <div className='flex md:flex-row flex-col justify-between items-end'>
                    <div data-aos="zoom-out-down" className='border border-solid border-[#025066] bg-[rgba(196,196,196,0.00)] md:max-w-[141px] md:gap-0 gap-5 w-full flex md:flex-col flex-row md:justify-center justify-between px-4 md:py-0 py-6 items-center '>
                        <p className='wr_verticle1 text-[16px] font-bold text-[#025066] md:pt-[40px] whitespace-nowrap md:tracking-[unset] tracking-[2px]'>GALLERY WORKS</p>
                        <div className='md:h-[115px] h-[1px] md:w-[1px] max-w-[266pxpx] md:max-w-[unset] w-full bg-[#025066] md:mt-[5px]'></div>
                        <p className='sm:text-[51.368px] text-[35px] text-[#025066] font-medium md:mb-[23px] md:pt-[27px] leading-[100%]'>03</p>
                    </div>
                    <div data-aos="fade-left" className='flex flex-col md:items-end md:pl-5 md:mt-0 mt-8 lg:pb-[32px]'>
                        <h2 className='sm:text-[48px] text-[32px] font-bold text-[#025066] md:max-w-[482px] md:text-end !text-start leading-[111%]'>Our Portfolio Gallery</h2>
                        <p className='text-[16px] font-normal leading-[139.687%] text-[rgba(2,80,102,0.70)] md:max-w-[656px] md:text-end lg:mt-[51px] mt-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet. Vivamus eros nibh, dictum sed venenatis vitae, ornare eget magna. Etiam mattis, felis eu interdum posuere, justo neque</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery