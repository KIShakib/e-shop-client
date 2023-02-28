import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FaTrash } from "react-icons/fa";
import { removeFromCart } from '../../../redux/Features/cart/cartSlice';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';
import { toast } from 'react-hot-toast';
import Loader from '../../Shared/Loader/Loader';
import CartProducts from './CartProducts';

const Cart = () => {

    const { user } = useContext(AuthContext);

    const { data: cartProducts = [], isLoading, refetch } = useQuery({
        queryKey: ["cartProducts"],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}/order-product/${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem("e-shop")}`
            }
        })
            .then(res => res.json())
    })



    const deleteProductFromCart = _id => {
        console.log(_id);
        fetch(`${process.env.REACT_APP_API_URL}/order/delete/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.data.deletedCount) {
                    toast.success("Product removed from cart successfully...");
                    refetch();
                }
            })
    }


    return (
        <section className='mt-20'>
            <h1 className="my-5 text-3xl font-bold text-[#183661] text-center">My Cart</h1>
            <div className='lg:w-1/3 md:w-2/3 w-full px-4 lg:px-0 md:px-0 mx-auto lg:my-5 md:my-16 overflow-hidden flex flex-col gap-y-4'>
                {
                    cartProducts?.map(cartProduct => <CartProducts key={cartProduct._id} cartProduct={cartProduct} deleteProductFromCart={deleteProductFromCart} />)
                }
                {
                    isLoading && <Loader />
                }
                {
                    cartProducts.length < 1 &&
                    <h4 className='text-center text-lg'><span className='text-red-600'>Your cart is empty.</span>
                        <Link to="/products" className='hover:underline'> Buy something...</Link>
                    </h4>
                }
            </div>

        </section>
    );
};

export default Cart;