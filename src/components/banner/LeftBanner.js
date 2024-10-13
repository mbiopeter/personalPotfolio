import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });

    return (
        <div className="w-full lgl:w-1/2 flex flex-col gap-20">
            <div className="flex flex-col gap-5">
                <div></div>
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                    Hi, I'm <span className="text-designColor capitalize">Mbio Peter</span>
                </h1>
                <h2 className="text-2xl md:text-4xl font-bold text-white">
                    A <span>{text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#ff014f"
                    />
                </h2>
                <p className="text-sm md:text-base font-bodyFont leading-6 tracking-wide">
                    Welcome to my portfolio! I'm a software engineer passionate about building innovative and efficient solutions. From full-stack development to cybersecurity, I focus on creating impactful applications that prioritize user experience and performance.
                </p>
            </div>

            <Media />
        </div>
    );
}

export default LeftBanner;
