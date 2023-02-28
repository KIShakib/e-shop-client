import React from 'react';
import Categories from '../Categories/Categories';
import Hero from '../Hero/Hero';
import HomePageProducts from '../HomePageProducts/HomePageProducts';
import Reviews from '../Reviews/Reviews';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Hero />
            <Categories />
            <HomePageProducts />
            <Reviews />
            <WhyUs />
        </div>
    );
};

export default Home;