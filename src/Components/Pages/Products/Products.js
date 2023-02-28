import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../redux/Features/products/productsSlice';
import Loader from '../../Shared/Loader/Loader';
import Product from '../Product/Product';

const Products = () => {
    const [categoryFilter, setCategoryFilter] = useState("all");

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ["products"],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}/products`, {
            headers: {
                authorization: `bearer ${localStorage.getItem("e-shop")}`
            }
        })
            .then(res => res.json())
    })
    let filteredProduct = [];

    if (categoryFilter === "all") {
        filteredProduct = products;
    }
    else if (categoryFilter !== "all") {
        filteredProduct = products?.filter(product => product.category === categoryFilter);
    }

    return (

        <section className='w-full lg:px-20 md:px-14 px-5'>
            <div className='my-6 flex justify-end'>
                <select onChange={(e) => setCategoryFilter(e.target.value)} name="productFilter" id="" className='w-48 p-2 border-2'>
                    <option value="all" selected>All</option>
                    <option value="amd">AMD</option>
                    <option value="intel">Intel</option>
                </select>
            </div>
            {
                isLoading && <Loader />
            }
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-3'>
                {
                    filteredProduct?.map((product) => <Product key={product._id} product={product} />)
                }
            </div>
        </section>
    );
};

export default Products;