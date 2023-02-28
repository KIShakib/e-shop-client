import React from 'react';
import { FaTrash } from 'react-icons/fa';

const CartProducts = ({ cartProduct, deleteProductFromCart }) => {
    const { product } = cartProduct
    return (
        <div className="w-full h-[84px] flex items-center justify-between lg:px-7 px-3 border cursor-pointer rounded-lg border-[#6A64F1]">
            <img className="rounded-t-lg p-2 w-16" src={product.img[0]} alt="product" />
            <div>
                <h2 className="font-semibold text-neutral">{product?.name}</h2>
                <p className='lg:text-base text-sm'>BDT {product?.price - 1000}</p>
            </div>
            <div className='flex gap-x-4 items-center'>
                <div className="">
                    <button
                        onClick={() => deleteProductFromCart(cartProduct._id)}
                        className='w-8 h-8 rounded-full flex justify-center items-center bg-slate-400 hover:bg-slate-300 '><FaTrash /></button>
                </div>
            </div>
        </div>
    );
};

export default CartProducts;