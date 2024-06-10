import { useState } from 'react';
import './Menu.css'
import { MdArrowForward } from "react-icons/md";
import { Link } from 'react-router-dom';


const Menu = () => {
    const [isOpenWhatsApp, setIsOpenWhatsApp] = useState(false);
    return (
        <div data-aos="fade-down" data-aos-duration="700" className='flex flex-col justify-center items-start min-h-[80vh] gap-10'>
            <div className='w-full font-extrabold grid lg:grid-cols-2 gap-5'>
                <div className='h-[80px] min-w-[550px] w-full'>
                    <Link to="/" className='menu_option w-fit' data-aos="fade-down" data-aos-duration="900"><h1 className='text-4xl md:text-7xl mb-5'><span className='text-xl md:text-3xl'>01.</span> HO<span className='letter text-2xl md:text-5xl'>M</span>E</h1></Link>
                </div>
                <div className='h-[80px] min-w-[550px] w-full'>
                    <Link to="/about" className='menu_option' data-aos="fade-down" data-aos-duration="1300"><h1 className='text-4xl md:text-7xl mb-5'><span className='text-xl md:text-3xl'>02.</span> A<span className='letter text-2xl md:text-5xl'>B</span>OUT</h1></Link>
                </div>
                <div className='h-[80px] min-w-[550px] w-full'>
                    <Link to="/skills" className='menu_option' data-aos="fade-down" data-aos-duration="1300"><h1 className='text-4xl md:text-7xl mb-5'><span className='text-xl md:text-3xl'>03.</span> SKI<span className='letter text-2xl md:text-5xl'>L</span>LS</h1></Link>
                </div>
                <div className='h-[80px] min-w-[550px] w-full'>
                    <Link to="/experience" className='menu_option' data-aos="fade-down" data-aos-duration="1300"><h1 className='text-4xl md:text-7xl mb-5'><span className='text-xl md:text-3xl'>04.</span> E<span className='letter text-2xl md:text-5xl'>X</span>PERIENCE</h1></Link>
                </div>
                <div className='h-[80px] min-w-[550px] w-full'>
                    <Link to="/projects" className='menu_option' data-aos="fade-down" data-aos-duration="1100"><h1 className='text-4xl md:text-7xl mb-5'><span className='text-xl md:text-3xl'>05.</span> PROJ<span className='letter text-2xl md:text-5xl'>E</span>CTS</h1></Link>
                </div>
                <div className='h-[80px] min-w-[550px] w-full'>
                    <Link to="/contacts" className='menu_option' data-aos="fade-down" data-aos-duration="1500"><h1 className='text-4xl md:text-7xl mb-5'><span className='text-xl md:text-3xl'>06.</span> CONT<span className='letter text-2xl md:text-5xl'>A</span>CT</h1></Link>
                </div>
            </div>
        </div>
    );
};

export default Menu;