// import React from 'react';
import { MdOutlineLightMode, MdMenu, MdDownload } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';


const Navbar = ({ isDark, setIsDark }) => {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Toybur_Rahman_Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Toybur_Rahman_Resume.pdf';
                alink.click();
            })
        })
    }

    const navigate = useNavigate();
    const handleMenu = () => {
        navigate('/menu')
    }
    return (
        <div className="mt-10 z-10 w-full">
            <div className='flex items-center justify-between px-3 md:px-0'>
                <Link to="/" className="flex items-center gap-5">
                    <h1 className="text-3xl md:text-6xl font-monoton">TR</h1>
                    <div className="flex flex-col">
                        <h1 className="md:text-2xl font-bold">Toybur Rahman</h1>
                        <div className="hidden md:block">
                            <TypeAnimation
                               
                                sequence={[
                                    '',
                                    500,
                                    'Web Developer',
                                    500,
                                    'Expert In Front-End Technologies',
                                    500,
                                    'Well-Versed In Back-End Technology',
                                    500
                                ]}
                                wrapper="span"
                                cursor={true}
                                speed={10}
                                repeat={Infinity}
                                style={{ fontSize: '16px', display: 'inline-block', fontWeight: '600' }}
                            />
                        </div>
                    </div>
                </Link>
                <div className="flex items-center gap-8">
                    <div onClick={onButtonClick} className='hidden md:flex items-center gap-2 text-xl animate-pulse hover:animate-none'>
                        <MdDownload className="text-2xl"></MdDownload>

                        <div className='option'>
                            <h1 className="text-lg font-bold">Download Resume</h1>
                            <hr className='option_hr' />
                        </div>
                    </div>
                    <MdOutlineLightMode onClick={() => setIsDark(!isDark)} className={`text-xl md:text-3xl transition-transform transform hover:scale-125`}></MdOutlineLightMode>
                    <MdMenu onClick={() => handleMenu()} className={`text-2xl md:text-4xl transition-transform transform hover:scale-125`}></MdMenu>
                </div>
            </div>
        </div>
    );
};

export default Navbar;