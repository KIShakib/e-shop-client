import React from 'react';
import { FaTrash } from 'react-icons/fa';

const DashboardProduct = ({ product, deleteProduct }) => {
    return (
        <div className="w-[400px] h-[84px] flex items-center justify-between lg:px-7 px-3 border rounded border-[#6A64F1]">
            <img className="rounded-t-lg p-2 w-16" src={product.img[0]} alt="product" />
            <h2 className="font-semibold text-neutral">{product?.name}</h2>
            <button
                onClick={() => deleteProduct(product._id)}
                className='w-8 h-8 rounded-full flex justify-center items-center bg-slate-400 hover:bg-slate-300 '><FaTrash /></button>
        </div >
    );
};

export default DashboardProduct;