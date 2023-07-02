// import React from 'react';
import { MdOutlineLightMode, MdMenu, MdDownload } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';


const Navbar = ({ isDark, setIsDark }) => {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('ResumeOfToyburRahman.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'ResumeOfToyburRahman.pdf';
                alink.click();
            })
        })
    }

    const navigate = useNavigate();
    const handleMenu = () => {
        navigate('/menu')
    }
    return (
        <div className="px-20 mt-10 z-10">
            <div className='flex items-center justify-between'>
                <Link to="/" className="flex items-center gap-5">
                    <h1 className="text-6xl font-monoton">TR</h1>
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold">Toybur Rahman</h1>
                        <TypeAnimation
                            sequence={[
                                '',
                                500,
                                'Full Stack Web',
                                500,
                                'Full Stack Web Developer',
                                500
                            ]}
                            wrapper="span"
                            cursor={true}
                            speed={10}
                            repeat={Infinity}
                            style={{ fontSize: '16px', display: 'inline-block', fontWeight: '600' }}
                        />
                    </div>
                </Link>
                <div className="flex items-center gap-8">
                    <div onClick={onButtonClick} className='flex items-center gap-2 text-xl'>
                        <MdDownload className="text-2xl"></MdDownload>

                        <div className='option'>
                            <h1 className="text-lg font-bold">Download Resume</h1>
                            <hr className='option_hr' />
                        </div>
                    </div>
                    <MdOutlineLightMode onClick={() => setIsDark(!isDark)} className={`text-3xl`}></MdOutlineLightMode>
                    <MdMenu onClick={() => handleMenu()} className={`text-4xl`}></MdMenu>
                </div>
            </div>
        </div>
    );
};

export default Navbar;