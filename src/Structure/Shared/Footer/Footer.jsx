// import React from 'react';
import { SlSocialGithub, SlSocialInstagram, SlSocialLinkedin, SlEnvolope, SlLocationPin, SlPhone } from "react-icons/sl";

const Footer = () => {
    return (
        <div>
            <div className="text-2xl flex gap-16">
                <h1><SlSocialGithub></SlSocialGithub></h1>
                <h1><SlSocialLinkedin></SlSocialLinkedin></h1>
                <h1><SlSocialInstagram></SlSocialInstagram></h1>
                <h1><SlEnvolope></SlEnvolope></h1>
                <h1><SlPhone></SlPhone></h1>
                <h1><SlLocationPin></SlLocationPin></h1>
            </div>
            {/* <div className="absolute right-20 top-48 text-2xl flex flex-col gap-5">
                <h1><SlSocialGithub></SlSocialGithub></h1>
                <h1><SlSocialLinkedin></SlSocialLinkedin></h1>
                <h1><SlSocialInstagram></SlSocialInstagram></h1>
                <h1><SlEnvolope></SlEnvolope></h1>
                <h1><SlPhone></SlPhone></h1>
                <h1><SlLocationPin></SlLocationPin></h1>
            </div> */}
        </div>
    );
};

export default Footer;