import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
    return (
        <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
            <img
                className="w-full h-64 object-cover rounded-lg mb-2"
                src={contactImg}
                alt="Contact Image"
            />
            <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-bold text-white">Mbio Peter</h3>
                <p className="text-lg font-normal text-gray-400">
                    MERN Stack Developer
                </p>
                <p className="text-base text-gray-400 tracking-wide">
                    I am a passionate MERN stack developer with a strong background in building dynamic and responsive web applications. I thrive on creating seamless user experiences.
                </p>
                <p className="text-base text-gray-400 flex items-center gap-2">
                    Phone: <span className="text-lightText">+254 759595268</span>
                </p>
                <p className="text-base text-gray-400 flex items-center gap-2">
                    Email: <span className="text-lightText">mbiopeter401@gmail.com</span>
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
                <div className="flex gap-4">
                    <a href="https://www.facebook.com/profile.php?id=100091002275594" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                        <FaFacebookF />
                    </a>
                    <a href="https://x.com/PeterM60104" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                        <FaTwitter />
                    </a>
                    <a href="https://www.linkedin.com/in/peter-mberere-4709b72bb/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ContactLeft;
