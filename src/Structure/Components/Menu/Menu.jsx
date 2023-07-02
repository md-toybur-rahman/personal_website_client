import React, { useState } from 'react';
import './Menu.css'
import { MdArrowForward } from "react-icons/md";
import { Link } from 'react-router-dom';


const Menu = () => {
    const [isOpenWhatsApp, setIsOpenWhatsApp] = useState(false);
    return (
        <div data-aos="fade-down" data-aos-duration="500" className='flex flex-col justify-center items-start ml-80 h-[80vh]'>
            <div className='w-[500px] font-extrabold'>
                <Link to="/" className='menu_option' data-aos="fade-down" data-aos-duration="700"><h1 className='text-7xl mb-5'><span className='text-3xl'>01.</span> HO<span className='letter text-5xl'>M</span>E</h1></Link>
                <Link to="/projects" className='menu_option' data-aos="fade-down" data-aos-duration="900"><h1 className='text-7xl mb-5'><span className='text-3xl'>02.</span> WO<span className='letter text-5xl'>R</span>K</h1></Link>
                <div className='menu_option' data-aos="fade-down" data-aos-duration="1100"><h1 className='text-7xl mb-5'><span className='text-3xl'>03.</span> A<span className='letter text-5xl'>B</span>OUT</h1></div>
                <div className='menu_option' data-aos="fade-down" data-aos-duration="1300"><h1 className='text-7xl mb-5'><span className='text-3xl'>04.</span> CONT<span className='letter text-5xl'>A</span>CT</h1></div>
            </div>
            <div className={`flex items-center justify-center gap-16 mt-10 font-bold`}>
                <div className='flex items-center gap-4 text-xl'>
                    <MdArrowForward className='text-2xl'></MdArrowForward>
                    <Link to="https://www.linkedin.com/in/md-toybur-rahman-1b3298198/" className='option'>
                        <h1>GitHub</h1>
                        <hr className='option_hr' />
                    </Link>
                    <div>

                    </div>
                </div>
                <div className='flex items-center gap-4 text-xl'>
                    <MdArrowForward className='text-2xl'></MdArrowForward>
                    <Link to="https://www.linkedin.com/in/md-toybur-rahman-1b3298198/" className='option'>
                        <h1>LinkedIn</h1>
                        <hr className='option_hr' />
                    </Link>
                    <div>

                    </div>
                </div>
                <div onClick={()=> setIsOpenWhatsApp(!isOpenWhatsApp)} className='flex items-center gap-4 text-xl'>
                    <MdArrowForward className='text-2xl'></MdArrowForward>
                    <div className='option'>
                        <h1>WhatsApp</h1>
                        <hr className='option_hr' />
                    </div>
                    <div className='overflow-hidden'>
                        <h1 className={`${!isOpenWhatsApp? '-ml-40 duration-300' : 'ml-0 duration-300'}`}>| +8801773345189</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;