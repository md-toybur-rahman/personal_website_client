import { useState } from 'react';
import { MdPhone, MdMail } from "react-icons/md";
import { Link } from 'react-router-dom';
import { SiDiscord, SiFacebook, SiGithub, SiInstagram, SiLinkedin, SiSkype, SiWhatsapp } from "react-icons/si";


const Contacts = () => {
    const [isOpenWhatsApp, setIsOpenWhatsApp] = useState(false);
    const [isOpenMail, setIsOpenMail] = useState(false);
    const [isOpenPhone, setIsOpenPhone] = useState(false);
    const [isOpenDiscord, setIsOpenDiscord] = useState(false);
    const [isOpenSkype, setIsOpenSkype] = useState(false);
    const [isOpenFacebook, setIsOpenFacebook] = useState(false);

    return (
        <div data-aos="fade-down" data-aos-duration="1500" className='flex w-[full] min-h-[80vh]'>
            <div className='grid grid-cols-1 mt-20 gap-20 w-full'>
                <div>
                    <div className='mb-5'>
                        <h1 className='text-4xl md:text-7xl font-bold md:pl-0 mb-3 md:text-center'>CONTACT</h1>
                        <hr className='w-[70vw] md:w-[500px] md:mx-auto' />
                    </div>


                    <div className='md:hidden'>
                        <div data-aos="fade-down" data-aos-duration="1500" onClick={() => setIsOpenMail(!isOpenMail)} className='flex items-center font-bold mt-4 gap-5 text-lg mb-4'>
                            <MdMail className='text-xl'></MdMail>
                            <div className={`option ${isOpenMail ? 'hidden' : 'block'}`}>
                                <h1>Mail</h1>
                                <hr className='option_hr' />
                            </div>
                            <div className='overflow-hidden'>
                                <h1 className={`${!isOpenMail ? '-ml-72 duration-300' : 'ml-0 duration-300'}`}>| toyburrahman48@gmail.com</h1>
                            </div>
                        </div>
                        <div data-aos="fade-down" data-aos-duration="1500" onClick={() => setIsOpenPhone(!isOpenPhone)} className='flex items-center mb-4 font-bold mt-5 gap-4 text-lg'>
                            <MdPhone className='text-xl'></MdPhone>
                            <div className={`option ${isOpenPhone ? 'hidden' : 'block'}`}>
                                <h1>Phone Number</h1>
                                <hr className='option_hr' />
                            </div>
                            <div className='overflow-hidden'>
                                <h1 className={`${!isOpenPhone ? '-ml-40 duration-300' : 'ml-0 duration-300'}`}>| +8801773345189</h1>
                            </div>
                        </div>
                        <div data-aos="fade-down" data-aos-duration="1500" onClick={() => setIsOpenWhatsApp(!isOpenWhatsApp)} className='flex items-center mb-4 font-bold mt-5 gap-4 text-lg'>
                            <SiWhatsapp className='text-xl'></SiWhatsapp>
                            <div className={`option ${isOpenWhatsApp ? 'hidden' : 'block'}`}>
                                <h1>WhatsApp Number</h1>
                                <hr className='option_hr' />
                            </div>
                            <div className='overflow-hidden'>
                                <h1 className={`${!isOpenWhatsApp ? '-ml-40 duration-300' : 'ml-0 duration-300'}`}>| +8801773345189</h1>
                            </div>
                        </div>
                        <div data-aos="fade-down" data-aos-duration="1500" className='flex items-center gap-4 text-lg mt-5'>
                            <SiLinkedin className='text-xl'></SiLinkedin>
                            <Link target='blank' to="https://www.linkedin.com/in/toybur-rahman" className='option'>
                                <h1>LinkedIn</h1>
                                <hr className='option_hr' />
                            </Link>
                        </div>

                        <div data-aos="fade-down" data-aos-duration="1500" className='flex items-center gap-4 text-lg mt-5'>
                            <SiInstagram className='text-xl'></SiInstagram>
                            <Link target='blank' to="https://www.instagram.com/toybur.rahman.tuhin/" className='option'>
                                <h1>Instagram</h1>
                                <hr className='option_hr' />
                            </Link>
                        </div>

                        <div data-aos="fade-down" data-aos-duration="1500" className='flex items-center gap-4 text-lg mt-5'>
                            <SiGithub className='text-xl'></SiGithub>
                            <Link target='blank' to="https://github.com/md-toybur-rahman" className='option'>
                                <h1>GitHub</h1>
                                <hr className='option_hr' />
                            </Link>
                        </div>
                        <div data-aos="fade-down" data-aos-duration="1500" onClick={() => setIsOpenDiscord(!isOpenDiscord)} className='flex items-center mb-4 font-bold mt-5 gap-4 text-lg'>
                            <SiDiscord className='text-2xl' />
                            <div className='option'>
                                <h1>Discord</h1>
                                <hr className='option_hr' />
                            </div>
                            <div className='overflow-hidden'>
                                <h1 className={`${!isOpenDiscord ? '-ml-72 duration-300' : 'ml-0 duration-300'}`}>| Toybur Rahman</h1>
                            </div>
                        </div>
                        <div data-aos="fade-down" data-aos-duration="1500" onClick={() => setIsOpenSkype(!isOpenSkype)} className='flex items-center mb-4 font-bold mt-5 gap-4 text-lg'>
                            <SiSkype className='text-2xl' />
                            <div className='option'>
                                <h1>Skype</h1>
                                <hr className='option_hr' />
                            </div>
                            <div className='overflow-hidden'>
                                <h1 className={`${!isOpenSkype ? '-ml-72 duration-300' : 'ml-0 duration-300'}`}>| Toybur Rahman Tuhin</h1>
                            </div>
                        </div>
                        <div data-aos="fade-down" data-aos-duration="1500" onClick={() => setIsOpenFacebook(!isOpenFacebook)} className='flex items-center mb-4 font-bold mt-5 gap-4 text-lg'>
                            <SiFacebook className='text-2xl' />
                            <div className='option'>
                                <h1>Facebook</h1>
                                <hr className='option_hr' />
                            </div>
                            <div className='overflow-hidden'>
                                <h1 className={`${!isOpenFacebook ? '-ml-72 duration-300' : 'ml-0 duration-300'}`}>| Not useing for Professional</h1>
                            </div>
                        </div>
                    </div>



                    <div className='hidden md:flex items-center justify-between'>
                        <div className='flex flex-col'>
                            <div data-aos="fade-down" data-aos-duration="1500" onClick={() => setIsOpenMail(!isOpenMail)} className='flex items-center pl-10 font-bold mt-10 gap-4 text-xl mb-8'>
                                <MdMail className='text-2xl'></MdMail>
                                <div className='option'>
                                    <h1>Mail</h1>
                                    <hr className='option_hr' />
                                </div>
                                <div className='overflow-hidden'>
                                    <h1 className={`${!isOpenMail ? '-ml-72 duration-300' : 'ml-0 duration-300'}`}>| toyburrahman48@gmail.com</h1>
                                </div>
                            </div>

                            <div data-aos="fade-down" data-aos-duration="1500" className='flex items-center gap-4 text-xl pl-10'>
                                <SiLinkedin className='text-2xl'></SiLinkedin>
                                <Link target='blank' to="https://www.linkedin.com/in/toybur-rahman" className='option'>
                                    <h1>LinkedIn</h1>
                                    <hr className='option_hr' />
                                </Link>
                            </div>
                            <div data-aos="fade-down" data-aos-duration="1500" onClick={() => setIsOpenDiscord(!isOpenDiscord)} className='flex items-center pl-10 font-bold mt-10 gap-4 text-xl mb-8'>
                                <SiDiscord className='text-2xl' />
                                <div className='option'>
                                    <h1>Discord</h1>
                                    <hr className='option_hr' />
                                </div>
                                <div className='overflow-hidden'>
                                    <h1 className={`${!isOpenDiscord ? '-ml-72 duration-300' : 'ml-0 duration-300'}`}>| Toybur Rahman</h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-start'>
                            <div data-aos="fade-down" data-aos-duration="1500" onClick={() => setIsOpenPhone(!isOpenPhone)} className='flex items-center mb-8 font-bold mt-10 gap-4 text-xl'>
                                <MdPhone className='text-2xl'></MdPhone>
                                <div className='option'>
                                    <h1>Phone Number</h1>
                                    <hr className='option_hr' />
                                </div>
                                <div className='overflow-hidden'>
                                    <h1 className={`${!isOpenPhone ? '-ml-40 duration-300' : 'ml-0 duration-300'}`}>| +8801773345189</h1>
                                </div>
                            </div>

                            <div data-aos="fade-down" data-aos-duration="1500" className='flex items-center gap-4 text-xl'>
                                <SiInstagram className='text-2xl'></SiInstagram>
                                <Link target='blank' to="https://www.instagram.com/toybur.rahman.tuhin/" className='option'>
                                    <h1>Instagram</h1>
                                    <hr className='option_hr' />
                                </Link>
                            </div>
                            <div data-aos="fade-down" data-aos-duration="1500" onClick={() => setIsOpenSkype(!isOpenSkype)} className='flex items-center mb-8 font-bold mt-10 gap-4 text-xl'>
                                <SiSkype className='text-2xl' />
                                <div className='option'>
                                    <h1>Skype</h1>
                                    <hr className='option_hr' />
                                </div>
                                <div className='overflow-hidden'>
                                    <h1 className={`${!isOpenSkype ? '-ml-[230px] duration-300' : 'ml-0 duration-300'}`}>| Toybur Rahman Tuhin</h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <div data-aos="fade-down" data-aos-duration="1500" onClick={() => setIsOpenWhatsApp(!isOpenWhatsApp)} className='flex items-center mb-8 font-bold mt-10 gap-4 text-xl'>
                                <SiWhatsapp className='text-2xl'></SiWhatsapp>
                                <div className='option'>
                                    <h1>WhatsApp Number</h1>
                                    <hr className='option_hr' />
                                </div>
                                <div className='overflow-hidden'>
                                    <h1 className={`${!isOpenWhatsApp ? '-ml-40 duration-300' : 'ml-0 duration-300'}`}>| +8801773345189</h1>
                                </div>
                            </div>
                            <div data-aos="fade-down" data-aos-duration="1500" className='flex items-center gap-4 text-xl'>
                                <SiGithub className='text-2xl'></SiGithub>
                                <Link target='blank' to="https://github.com/md-toybur-rahman" className='option'>
                                    <h1>GitHub</h1>
                                    <hr className='option_hr' />
                                </Link>
                            </div>
                            <div data-aos="fade-down" data-aos-duration="1500" onClick={() => setIsOpenFacebook(!isOpenFacebook)} className='flex items-center mb-8 font-bold mt-10 gap-4 text-xl'>
                                <SiFacebook className='text-2xl'></SiFacebook>
                                <div className='option'>
                                    <h1>Facebook</h1>
                                    <hr className='option_hr' />
                                </div>
                                <div className='overflow-hidden'>
                                    <h1 className={`${!isOpenFacebook ? '-ml-40 duration-300' : 'ml-0 duration-300'}`}>| It's Personal</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;