import React from 'react';
import Products from '../../Products/Products';
import Categories from '../Categories/Categories';
import Hero from '../Hero/Hero';
import Reviews from '../Reviews/Reviews';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Hero />
            <Categories />
            <Products />
            <Reviews />
            <WhyUs />
        </div>
    );
};

export default Home;