import React, { useRef, useState } from 'react';
import emailjs, { send } from '@emailjs/browser';


const Contact = () => {
    const [alertmsg, setAlertmsg] = useState(null);
    if (alertmsg === true) {
        document.body.classList.add("overflow-hidden")
    } else (
        document.body.classList.remove("overflow-hidden")
    )
    const form = useRef();
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [contact, setcontact] = useState("");
    const sendEmail = (e) => {
        if (e.target.value = "") {
            setAlertmsg(false);
        } else {
            setAlertmsg(true);
        }
        e.preventDefault();
        emailjs.sendForm('service_31h180h', 'template_rxq3f9e', form.current, '1cJ95ExJ1P3ygeRiD')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
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
                            <input data-aos="fade-up" value={name} type="text" name='user_name' required placeholder='Your Name' onChange={(e) => setname(e.target.value)} className='py-[14px] px-[16px] text-[14px] lg:max-w-[594px] font-medium leading-[142.857%] text-[#a7a7a7]
                             border border-solid border-[#025066] w-full rounded-[6px] outline-none mb-[14px]' />
                            <input data-aos="fade-up" value={contact} type="text" name='user_contact' required maxLength={10} minLength={10} onChange={(e) => setcontact(e.target.value)} placeholder='Phone Number' className='py-[14px] px-[16px] text-[14px] lg:max-w-[594px] font-medium leading-[142.857%] text-[#a7a7a7]
                             border border-solid border-[#025066] w-full rounded-[6px] outline-none mb-[14px]' />
                            <input data-aos="fade-up" type="text" value={email} name='user_email' required placeholder='E-Mail' onChange={(e) => setemail(e.target.value)} className='py-[14px] px-[16px] text-[14px] lg:max-w-[594px] font-medium leading-[142.857%] text-[#a7a7a7]
                             border border-solid border-[#025066] w-full rounded-[6px] outline-none mb-[14px]' />
                            <textarea data-aos="fade-up" name="message" placeholder='Message' required id="" cols="30" rows="5" className='py-[14px] px-[16px] outline-none border border-solid border-[#025066] resize-none w-full lg:max-w-[594px] text-[14px] rounded-[6px] font-medium leading-[142.857%] text-[#a7a7a7]'></textarea>
                            <div data-aos="fade-up">
                                <button type='submit' value={send} className='mt-[27px] formbtn rounded-[10px] hover:shadow-[0_3px_20px_rgba(2,80,120,1)] transition-shadow duration-300 ease-linear bg-[#025066] px-[33px] py-[18px] text-[20px] font-medium text-white uppercase'>CONTACT NOW</button>
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
            {alertmsg ? (
                <>
                    <div className='fixed px-6 top-0 bottom-0 left-0 right-0 min-h-screen flex items-center justify-center'>
                        <div className='bg-lime-100 max-w-[500px] w-full rounded-[20px] pb-4'>
                            <div className='py-5 border-b border-solid border-[#025066]'>
                                <p className='text-[16px] font-normal text-[#025066] text-center'>Alert Message</p>
                            </div>
                            <div className='px-6 py-7'>
                                <h2 className='text-[20px] font-bold text-[#025066] text-center capitalize'>you have submit successfully</h2>
                            </div>
                            <div className=' flex justify-center items-center px-6'>
                                <button onClick={() => setAlertmsg(false)} className='text-[16px] font-normal text-[#025066] hover:text-white hover:bg-[#025066] transition-colors duration-300 ease-linear uppercase px-[30px] py-[8px] border border-solid border-[#025066] rounded-[8px]'>ok</button>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    )
}

export default Contact;