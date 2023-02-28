import React from 'react';

const Category = ({ item }) => {
    return (
        <div className="w-full rounded border bg-slate-50 hover:bg-slate-100 text-[#183661] p-8 transition-all duration-300">
            <figure className="px-10 pt-10">
                <img src={item.img} alt="Categories" className="rounded-none lg:w-60 md:w-56 w-full h-40" />
            </figure>
            <div className="items-center text-center">
                <h2 className="mt-5 text-2xl font-bold">{item.name}</h2>
            </div>
        </div>
    );
};

export default Category;