import React from 'react';
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';

const Banner = () => {
    return (
        <section
            id="home"
            className="w-full pb-20 flex flex-col md:flex-row items-center font-titleFont border-b-[1px] border-b-black"
        >
            <LeftBanner />
            <RightBanner className="hidden md:block" />
        </section>
    );
};

export default Banner;
