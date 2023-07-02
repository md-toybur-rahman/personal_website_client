// import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import AnimatedCursor from "react-animated-cursor"
import './Main.css'
import { useState } from 'react';
import { Outlet } from 'react-router-dom';


import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../Shared/Footer/Footer';
AOS.init();

const Main = () => {
    const [isDark, setIsDark] = useState(true);
    return (
        <div className={`${isDark ? 'text-[#A6ADCA] border-white' : 'text-black border-black'}`}>
            <AnimatedCursor
                innerSize={25}
                innerStyle={{ background: 'transparent', border: `${isDark ? '2px solid white' : '2px solid black'}` }}
                outerStyle={{ background: `${isDark ? 'white' : 'black'}` }}
                outerSize={5}
                color='8, 87, 192'
                outerAlpha={1}
                innerScale={2}
                outerScale={0}
                showSystemCursor
                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    'span',
                    '.link'
                ]}
            />
            <ul className={`background ${isDark ? 'bg-[#000000]' : 'bg-[#e88bb2]'}`}>
                <div className='z-20'>
                    <Navbar isDark={isDark} setIsDark={setIsDark}></Navbar>
                    {/* <Footer></Footer> */}
                    <Outlet isDark={isDark}></Outlet>
                </div>
                <div className='z-10'>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    {/* <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li> */}
                    <li></li>
                </div>
            </ul>
        </div>
    )
};

export default Main;