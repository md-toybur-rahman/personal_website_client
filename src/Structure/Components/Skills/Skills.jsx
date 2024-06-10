// import React from 'react';
// import { Link } from 'react-router-dom';
import { SiHtml5, SiCss3, SiTailwindcss, SiDaisyui, SiBootstrap, SiJavascript, SiReact, SiFirebase, SiNodedotjs, SiExpress, SiMongodb, SiFastapi, SiExercism, SiJsonwebtokens, SiSpringsecurity, SiVisualstudiocode, SiGooglechrome, SiNpm, SiVite, SiGithub, SiNetlify, SiFigma, SiReactrouter, SiJquery, SiReactquery } from "react-icons/si";
import './Skills.css'

const Skills = () => (
    <div data-aos="fade-down" data-aos-duration="700" className='h-[100vh]'>
        <div className='md:grid grid-cols-1 md:grid-cols-2 md:gap-10 mx-10 md:mx-40 my-10 md:my-10 overflow-y-scroll'>
            <div>
                <div className='text-xl md:text-3xl'>
                    <h1>Front-End</h1>
                    <hr />
                </div>
                <div className='md:px-10 pt-2 md:pt-5 flex flex-wrap gap-x-4 md:block mb-5 md:mb-0'>
                    <h1 data-aos="fade-right" data-aos-duration="1000" className='flex items-center gap-2 md:gap-0 md:justify-between'>01. HTML <SiHtml5></SiHtml5></h1>
                    <h1 data-aos="fade-right" data-aos-duration="1200" className='flex items-center gap-2 md:gap-0 md:justify-between'>02. CSS <SiCss3></SiCss3></h1>
                    <h1 data-aos="fade-right" data-aos-duration="1400" className='flex items-center gap-2 md:gap-0 md:justify-between'>03. Tailwind CSS <SiTailwindcss></SiTailwindcss></h1>
                    <h1 data-aos="fade-right" data-aos-duration="1600" className='flex items-center gap-2 md:gap-0 md:justify-between'>04. Daisy UI <SiDaisyui></SiDaisyui></h1>
                    <h1 data-aos="fade-right" data-aos-duration="1800" className='flex items-center gap-2 md:gap-0 md:justify-between'>05. Bootstrap <SiBootstrap></SiBootstrap></h1>
                    <h1 data-aos="fade-right" data-aos-duration="2000" className='flex items-center gap-2 md:gap-0 md:justify-between'>06. JavaScript <SiJavascript></SiJavascript></h1>
                    <h1 data-aos="fade-right" data-aos-duration="2000" className='flex items-center gap-2 md:gap-0 md:justify-between'>07. jQuery <SiJquery></SiJquery></h1>
                    <h1 data-aos="fade-right" data-aos-duration="2000" className='flex items-center gap-2 md:gap-0 md:justify-between'>08. React.js <SiReact></SiReact></h1>
                    <h1 data-aos="fade-right" data-aos-duration="2000" className='flex items-center gap-2 md:gap-0 md:justify-between'>09. Context API <SiReactquery></SiReactquery></h1>
                    <h1 data-aos="fade-right" data-aos-duration="2000" className='flex items-center gap-2 md:gap-0 md:justify-between'>10. React Query <SiReact></SiReact></h1>
                    <h1 data-aos="fade-right" data-aos-duration="1800" className='flex items-center gap-2 md:gap-0 md:justify-between'>11. Firebase Authentication <SiFirebase></SiFirebase></h1>
                </div>
            </div>
            <div>
                <div className='text-xl md:text-3xl'>
                    <h1>Back-End</h1>
                    <hr />
                </div>
                <div className='md:px-10 pt-2 md:pt-5  flex flex-wrap gap-x-4 md:block mb-5 md:mb-0'>
                    <h1 data-aos="fade-left" data-aos-duration="1000" className='flex items-center  gap-2 md:gap-0 md:justify-between'>01. Node.js <SiNodedotjs></SiNodedotjs></h1>
                    <h1 data-aos="fade-left" data-aos-duration="1200" className='flex items-center  gap-2 md:gap-0 md:justify-between'>02. Express.js <SiExpress></SiExpress></h1>
                    <h1 data-aos="fade-left" data-aos-duration="1400" className='flex items-center  gap-2 md:gap-0 md:justify-between'>03. MongoDB <SiMongodb></SiMongodb></h1>
                    <h1 data-aos="fade-left" data-aos-duration="1600" className='flex items-center  gap-2 md:gap-0 md:justify-between'>04. Rest API <SiFastapi></SiFastapi></h1>
                    <h1 data-aos="fade-left" data-aos-duration="1800" className='flex items-center  gap-2 md:gap-0 md:justify-between'>05. JSON <SiExercism></SiExercism></h1>
                    <h1 data-aos="fade-left" data-aos-duration="2000" className='flex items-center  gap-2 md:gap-0 md:justify-between'>06. Json Web Token <SiJsonwebtokens></SiJsonwebtokens></h1>
                    <h1 data-aos="fade-left" data-aos-duration="2000" className='flex items-center  gap-2 md:gap-0 md:justify-between'>07. Middleware <SiSpringsecurity></SiSpringsecurity></h1>
                </div>
            </div>
            <div className="md:hidden">
                <div className='text-xl md:text-3xl'>
                    <h1>Tools</h1>
                    <hr />
                </div>
                <div className='pt-2 flex flex-wrap gap-x-4 md:block mb-5 md:mb-0'>
                    <h1 data-aos="fade-right" data-aos-duration="1600" className='flex items-center  gap-2 md:gap-0 md:justify-between'>01. VS Code <SiVisualstudiocode></SiVisualstudiocode></h1>
                    <h1 data-aos="fade-left" data-aos-duration="1600" className='flex items-center  gap-2 md:gap-0 md:justify-between'>02. Chrome Dev Tools <SiGooglechrome></SiGooglechrome></h1>
                    <h1 data-aos="fade-right" data-aos-duration="1400" className='flex items-center  gap-2 md:gap-0 md:justify-between'>03. NPM <SiNpm></SiNpm></h1>
                    <h1 data-aos="fade-left" data-aos-duration="1400" className='flex items-center  gap-2 md:gap-0 md:justify-between'>04. VITE <SiVite></SiVite></h1>
                    <h1 data-aos="fade-right" data-aos-duration="1200" className='flex items-center  gap-2 md:gap-0 md:justify-between'>05. GitBash | GitHUB <SiGithub></SiGithub></h1>
                    <h1 data-aos="fade-left" data-aos-duration="1200" className='flex items-center  gap-2 md:gap-0 md:justify-between'>06. Netlify <SiNetlify></SiNetlify></h1>
                    <h1 data-aos="fade-right" data-aos-duration="1000" className='flex items-center  gap-2 md:gap-0 md:justify-between'>07. Figma <SiFigma></SiFigma></h1>
                    <h1 data-aos="fade-left" data-aos-duration="1000" className='flex items-center  gap-2 md:gap-0 md:justify-between'>08. React Router Dom <SiReactrouter></SiReactrouter></h1>
                </div>
            </div>
        </div>
        <div className='hidden md:block mx-40'>
            <div className='text-xl md:text-3xl'>
                <h1>Tools</h1>
                <hr />
            </div>
            <div className='px-10 pt-2 md:pt-5 grid grid-cols-2 gap-x-28'>
                <h1 data-aos="fade-right" data-aos-duration="1600" className='flex items-center justify-between'>01. VS Code <SiVisualstudiocode></SiVisualstudiocode></h1>
                <h1 data-aos="fade-left" data-aos-duration="1600" className='flex items-center justify-between'>02. Chrome Dev Tools <SiGooglechrome></SiGooglechrome></h1>
                <h1 data-aos="fade-right" data-aos-duration="1400" className='flex items-center justify-between'>03. NPM <SiNpm></SiNpm></h1>
                <h1 data-aos="fade-left" data-aos-duration="1400" className='flex items-center justify-between'>04. VITE <SiVite></SiVite></h1>
                <h1 data-aos="fade-right" data-aos-duration="1200" className='flex items-center justify-between'>05. GitBash | GitHUB <SiGithub></SiGithub></h1>
                <h1 data-aos="fade-left" data-aos-duration="1200" className='flex items-center justify-between'>06. Netlify <SiNetlify></SiNetlify></h1>
                <h1 data-aos="fade-right" data-aos-duration="1000" className='flex items-center justify-between'>07. Figma <SiFigma></SiFigma></h1>
                <h1 data-aos="fade-left" data-aos-duration="1000" className='flex items-center justify-between'>08. React Router Dom <SiReactrouter></SiReactrouter></h1>
            </div>
        </div>
    </div>
);

export default Skills;