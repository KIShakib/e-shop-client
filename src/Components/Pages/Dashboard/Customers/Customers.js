import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrash } from 'react-icons/fa';

const Customers = () => {

    const { data: customers = [], isLoading, refetch } = useQuery({
        queryKey: ["customers"],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}/customers`, {
            headers: {
                authorization: `bearer ${localStorage.getItem("e-shop")}`
            }
        })
            .then(res => res.json())
    })
    return (
        <section className='w-full flex flex-col items-center pt-10'>
            <h2 className='text-center text-3xl font-bold text-[#183661] mb-10'>Customers</h2>
            <div className='flex flex-col gap-y-3'>
                {
                    customers?.map(customer =>
                        <div className={`w-[400px] h-[84px] flex items-center justify-between lg:px-7 px-3 border rounded border-[#6A64F1] ${customer?.isAdmin && "hidden"}`}>
                            <div>
                                <h2 className="font-semibold">Name: <span className='ml-2'>{customer?.userName}</span></h2>
                                <h2 className="font-semibold">Email: <span className='ml-2'>{customer?.email}</span></h2>
                            </div>
                            <button
                                // onClick={() => deleteProduct(product._id)}
                                className='w-8 h-8 rounded-full flex justify-center items-center bg-slate-400 hover:bg-slate-300 '><FaTrash /></button>
                        </div >
                    )
                }
            </div>
        </section>
    );
};

export default Customers;