import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';
import { addToCart } from '../../../redux/Features/cart/cartSlice';

const ProductDetails = () => {
    const [imageShow, setImageShow] = useState(0);
    const { user } = useContext(AuthContext);
    console.log(user);
    const dispatch = useDispatch();
    const { data: product } = useLoaderData();


    const cartProductAddToDB = product => {
        dispatch(addToCart(product))

        const addedOrder = {
            name: user?.displayName,
            email: user?.email,
            product
        }

        fetch(`${process.env.REACT_APP_API_URL}/order-product`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addedOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success(`${product.name} Add to cart Successfully...`);
                }
            })
    }


    const { cpu, gpu, img, name, ssd, price } = product;
    return (
        <section className='lg:flex md:flex lg:flex-row md:flex-row flex-col px-20 my-10 gap-x-10'>
            <div className='flex flex-col gap-y-8 lg:w-[40%] md:w-[40%]'>
                <div>
                    <img src={img[imageShow]} className="lg:w-80 md:w-72 w-96" alt="" />
                </div>
                <div className='flex flex-row gap-x-2'>
                    {
                        img?.map((image, i) =>
                            <button onClick={() => setImageShow(i)} className={`${imageShow === i && "opacity-25"}`}>
                                <img key={i} src={image} className="w-20 p-1 border-[2px] border-[#183661]" alt="" />
                            </button>
                        )
                    }
                </div>
            </div>
            <div className='lg:w-[60%] md:w-[60%] flex flex-col justify-between gap-y-4 lg:gap-y-0 md:gap-y-0 mt-8 md:mt-0 lg:mt-0'>
                <h3 className="font-semibold text-xl tracking-tight">{name}</h3>
                <div className='lg:w-[50%] flex flex-col gap-y-2'>
                    <div className='border flex items-center justify-between py-1 px-3'>
                        <h5>Product Price</h5>
                        <h5>BDT {price}</h5>
                    </div>
                    <div className='border flex items-center justify-between py-1 px-3'>
                        <h5>Discount</h5>
                        <h5>BDT {1000}</h5>
                    </div>
                    <div className='border flex items-center justify-between py-1 px-3'>
                        <h5>Special Price</h5>
                        <h5>BDT {price - 1000}</h5>
                    </div>
                    <div className='border flex items-center justify-between py-1 px-3'>
                        <h5>CPU</h5>
                        <h5>{cpu}</h5>
                    </div>
                    <div className='border flex items-center justify-between py-1 px-3'>
                        <h5>SSD</h5>
                        <h5>{ssd}</h5>
                    </div>
                    <div className='border flex items-center justify-between py-1 px-3'>
                        <h5>GPU</h5>
                        <h5>{gpu}</h5>
                    </div>
                </div>
                <button
                    onClick={() => cartProductAddToDB(product)}
                    className="bg-[#183661] hover:bg-[#183680] text-white font-medium rounded px-5 py-1 text-center w-36">
                    Add To Cart
                </button>
            </div>
        </section >
    );
};

export default ProductDetails;