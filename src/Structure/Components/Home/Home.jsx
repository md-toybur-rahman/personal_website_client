// import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import { MdArrowForward } from "react-icons/md";
import useTitle from '../../Hooks/useTitle';
// import Footer from '../../Shared/Footer/Footer';
const Home = () => {
    useTitle('Home')
    return (
        <div data-aos="fade-down" data-aos-duration="1500" className="h-[80vh] flex items-center justify-center">
            <div className="text-center">
                <div className='flex items-center justify-center mb-8'>
                    <img className='rounded-lg h-[200px]' src="profile.jpg" alt="" />
                </div>
                <h1 className="text-2xl md:text-4xl">HEY, I'AM <span className="font-cinzel font-extrabold highlight">TOYBUR RAHMAN</span></h1>
                <h1 className="text-2xl md:text-4xl">but you can call me <span className="font-cinzel font-extrabold">tuhin</span></h1>
                <p className='text-lg md:text-2xl mt-4 font-medium'>I'm a Web Developer</p>
                <p className='text-lg md:text-xl mt-2 font-medium'>Expert In Front End Technologies With 3 Years of Experience <br /> And <br /> Well-Versed In Back-End Technology With 1 Years Of Experience</p>
                <div className={`flex items-center justify-center gap-8 md:gap-16 mt-14 font-semibold`}>
                    <Link to='/projects' className='flex items-center gap-2 md:gap-4 md:text-xl animate-pulse hover:animate-none'>
                        <MdArrowForward className='md:text-2xl'></MdArrowForward>
                        <div className='option'>
                            <h1>See my Projects</h1>
                            <hr className='option_hr' />
                        </div>
                    </Link>
                    <Link to="/about" className='flex items-center gap-2 md:gap-4 md:text-xl animate-pulse hover:animate-none'>
                        <MdArrowForward className='md:text-2xl'></MdArrowForward>
                        <div className='option'>
                            <h1>More about me</h1>
                            <hr className='option_hr' />
                        </div>
                    </Link>
                </div>
                <div className='flex items-center justify-center mt-16'>
                    {/* <Footer></Footer> */}
                </div>
            </div>
        </div>
    );
};

export default Home;