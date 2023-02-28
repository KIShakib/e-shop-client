import React from 'react';
import Category from './Category';
import intel from "../../../../Assets/Images/intel.png";
import amd from "../../../../Assets/Images/amd.png";

const Categories = () => {

    const category = [
        {
            id: 1,
            name: "AMD",
            img: intel
        },
        {
            id: 2,
            name: "Intel",
            img: amd
        }
    ];

    return (
        <section className='lg:my-32 md:my-24 my-10 flex justify-center px-5 lg:px-10'>
            <div>
                <h1 className="mb-5 text-3xl font-bold text-[#183661] text-center">Our Products Lineup</h1>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-2 w-full'>
                    {
                        category.map((item, i) => <Category item={item} key={i} index={i}></Category>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Categories;