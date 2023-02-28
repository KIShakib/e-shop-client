import React from 'react';
import heroBanner from "../../../../Assets/Images/banner 2.png";

const Hero = () => {


    return (
        <section>
            <img src={heroBanner} className="lg:h-full md:h-full w-full" alt="" />
        </section>

    );
};

export default Hero;