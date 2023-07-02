// import React from 'react';

import { Link } from 'react-router-dom';
import './Home.css'
import { MdArrowForward } from "react-icons/md";
import useTitle from '../../Hooks/useTitle';
import Footer from '../../Shared/Footer/Footer';
const Home = () => {
    useTitle('Home')
    return (
        <div data-aos="fade-down" data-aos-duration="1500" className="h-[80vh] flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-5xl">HEY, I'AM <span className="font-cinzel font-extrabold highlight">TOYBUR RAHMAN</span></h1>
                <h1 className="text-5xl">but you can call me <span className="font-cinzel font-extrabold">tuhin</span></h1>
                <p className='text-3xl mt-4'>I'm a full-stack web developer</p>
                <div className={`flex items-center justify-center gap-16 mt-10 font-bold`}>
                    <Link to='/projects' className='flex items-center gap-4 text-xl'>
                        <MdArrowForward className='text-2xl'></MdArrowForward>
                        <div className='option'>
                            <h1>See my Projects</h1>
                            <hr className='option_hr' />
                        </div>
                    </Link>
                    <div className='flex items-center gap-4 text-xl'>
                        <MdArrowForward className='text-2xl'></MdArrowForward>
                        <div className='option'>
                            <h1>More about me</h1>
                            <hr className='option_hr' />
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center mt-16'>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default Home;