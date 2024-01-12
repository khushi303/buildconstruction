import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_31h180h', 'template_rxq3f9e', form.current, '1cJ95ExJ1P3ygeRiD')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id='contact' className='bg-BgContact bg-cover md:bg-[68%] sm:bg-[63%] xsm:bg-[60%] bg-[60%]  bg-no-repeat lg:bg-center pt-[60px] pb-[39px] overflow-hidden'>
            <div className='container mx-auto xl:max-w-[1320px] lg:px-4 px-6'>
                <div className='flex flex-row flex-wrap'>
                    <div className='lg:w-1/2 w-full'>
                        <form ref={form} onSubmit={sendEmail}>
                            <input data-aos="fade-up" type="text" name='user_name' placeholder='Your Name' className='py-[14px] px-[16px] text-[14px] lg:max-w-[594px] font-medium leading-[142.857%] text-[#a7a7a7]
                             border border-solid border-[#025066] w-full rounded-[6px] outline-none mb-[14px]' />
                            <input data-aos="fade-up" type="text" name='user_contact' placeholder='Phone Number' className='py-[14px] px-[16px] text-[14px] lg:max-w-[594px] font-medium leading-[142.857%] text-[#a7a7a7]
                             border border-solid border-[#025066] w-full rounded-[6px] outline-none mb-[14px]' />
                            <input data-aos="fade-up" type="text" name='user_email' placeholder='E-Mail' className='py-[14px] px-[16px] text-[14px] lg:max-w-[594px] font-medium leading-[142.857%] text-[#a7a7a7]
                             border border-solid border-[#025066] w-full rounded-[6px] outline-none mb-[14px]' />
                            <textarea data-aos="fade-up" name="message" placeholder='Message' id="" cols="30" rows="5" className='py-[14px] px-[16px] outline-none border border-solid border-[#025066] resize-none w-full lg:max-w-[594px] text-[14px] rounded-[6px] font-medium leading-[142.857%] text-[#a7a7a7]'></textarea>
                            <div data-aos="fade-up">
                                <button type='submit' className='mt-[27px] rounded-[10px] hover:shadow-[0_3px_20px_rgba(2,80,120,1)] transition-all duration-300 ease-linear hover:scale-[1.012] bg-[#025066] px-[33px] py-[18px] text-[20px] font-medium text-white uppercase'>CONTACT NOW</button>
                            </div>
                        </form>
                    </div>
                    <div data-aos="fade-down" className='lg:w-1/2 w-full flex flex-col lg:items-end lg:mt-0 mt-7'>
                        <h2 className='sm:text-[61px] text-[40px] font-normal leading-[106%] lg:max-w-[348px] text-white lg:text-end'>How we can help you?</h2>
                        <p className='text-[16px] font-normal text-white lg:max-w-[331px] lg:text-end sm:mt-[32px] mt-[16px]'>Quisque vel nisl blandit sem tempor dignissim. Sed maximus efficitur neque</p>
                        <div className='flex sm:pt-[35px] pt-[18px]'>
                            <p className='text-[16px] font-normal leading-[139.687%] text-white'>Phone Number:</p>
                            <a href="tel:9050385982" className='ml-[14px] text-[16px] font-normal leading-[139.687%] text-white'>+1235265652</a>
                        </div>
                        <div className='flex mt-[9px]'>
                            <p className='text-[16px] font-normal leading-[139.687%] text-white'>Address:</p>
                            <a href="" className='ml-2 text-[16px] font-normal leading-[139.687%] text-white'>Nam convallis feugiat</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;