import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../../redux/Features/products/productsSlice';
import Loader from '../../../Shared/Loader/Loader';
import Product from '../../Product/Product';

const HomePageProducts = () => {

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ["products"],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}/products`, {
            headers: {
                authorization: `bearer ${localStorage.getItem("e-shop")}`
            }
        })
            .then(res => res.json())
    })

    return (
        <section className='lg:px-10 px-5 my-40'>
            <div>
                <h2 className='text-center text-3xl font-bold text-[#183661] mb-10'>Buy Products</h2>
            </div>
            <div>
                {
                    isLoading && <Loader />
                }
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-2 w-full'>
                {
                    products?.map((product) => <Product key={product._id} product={product} />)
                }
            </div>
        </section>
    );
};

export default HomePageProducts;