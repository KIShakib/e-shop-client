import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../../Shared/Loader/Loader';

const Orders = () => {

    const { data: orders = [], isLoading, refetch } = useQuery({
        queryKey: ["orders"],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}/orders`, {
            headers: {
                authorization: `bearer ${localStorage.getItem("e-shop")}`
            }
        })
            .then(res => res.json())
    })

    console.log(orders);

    return (
        <div className='w-full flex flex-col items-center pt-10'>
            <h2 className='text-center text-3xl font-bold text-[#183661] mb-10'>All Orders</h2>
            <div className='lg:w-2/5 md:w-2/3 w-full px-4 lg:px-0 md:px-0 mx-auto lg:my-5 md:my-16 overflow-hidden flex flex-col gap-y-4'>
                {
                    orders?.map(order =>
                        <div className="w-full h-[84px] flex items-center justify-between lg:px-7 px-3 border cursor-pointer rounded-lg border-[#6A64F1]">
                            <img className="rounded-t-lg p-2 w-16" src={order.product.img[0]} alt="product" />
                            <div>
                                <h2 className="font-semibold text-neutral">{order.product?.name}</h2>
                            </div>
                            <div>
                                <h2 className="font-semibold">Name: <span className='ml-2'>{order?.name}</span></h2>
                                <h2 className="font-semibold">Email: <span className='ml-2'>{order?.email}</span></h2>
                            </div>
                        </div>
                    )
                }
            </div>

            {
                isLoading && <Loader />
            }
        </div>
    );
};

export default Orders;