import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import DashboardProduct from './DashboardProduct';

const DashboardProducts = () => {

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ["products"],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}/products`, {
            headers: {
                authorization: `bearer ${localStorage.getItem("e-shop")}`
            }
        })
            .then(res => res.json())
    })



    const deleteProduct = _id => {
        console.log(_id);
        fetch(`${process.env.REACT_APP_API_URL}/product/delete/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.data.deletedCount) {
                    toast.success("Product Delete Successfully...");
                    refetch();
                }
            })
    }


    return (
        <div className='w-full flex justify-center pt-10'>
            <div className='flex flex-col gap-y-3'>
                {
                    products?.map(product => <DashboardProduct key={product._id} product={product} deleteProduct={deleteProduct} />)
                }
            </div>
        </div>
    );
};

export default DashboardProducts;