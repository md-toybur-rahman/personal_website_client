// import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import AnimatedCursor from "react-animated-cursor"
import './Main.css'
import { useState } from 'react';


import AOS from 'aos';
import 'aos/dist/aos.css';
import AnimatedBackground from './AnimatedBackground';
AOS.init();

const Main = () => {
    const [isDark, setIsDark] = useState(true);
    return (
        <div className={`${isDark ? 'text-gray-200 border-white' : 'text-teal-400 border-black'}`}>
            <AnimatedCursor
                innerSize={25}
                innerStyle={{ background: 'transparent', border: `${isDark ? '2px solid white' : '2px solid white'}` }}
                outerStyle={{ background: `${isDark ? 'white' : 'white'}` }}
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
            <div>
                <AnimatedBackground isDark={isDark} setIsDark={setIsDark}></AnimatedBackground>
            </div>
        </div>
    )
};

export default Main;