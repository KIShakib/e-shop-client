import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import hamBurger from "../../Assets/Images/menu-burger.png";
import menuClose from "../../Assets/Images/close.png";
import logo from "../../Assets/Logo/deals_of_the_day_logo.png";
import placeholderUser from "../../Assets/Images/user2.png";
import { AuthContext } from '../../Context/AuthContext/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import { useQuery } from '@tanstack/react-query';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email);


    const { data: cartProducts = [], isLoading, refetch } = useQuery({
        queryKey: ["cartProducts"],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}/order-product/${user.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem("e-shop")}`
            }
        })
            .then(res => res.json())
    })

    const navLinkStyle = ({ isActive }) => {
        return {
            borderBottom: isActive ? "4px solid #183661" : "",
            backgroundColor: isActive ? "transparent" : "transparent",
            color: isActive ? "" : ""
        }
    }




    const navLink = <>
        <li className=''><NavLink to="/" className="transition-all duration-200" style={navLinkStyle}>HOME</NavLink></li>
        <li className=''><NavLink to="/products" className="transition-all duration-200" style={navLinkStyle}>PRODUCTS</NavLink></li>
        {
            isAdmin && <li className=''><NavLink to="/dashboard" className="transition-all duration-200" style={navLinkStyle}>DASHBOARD</NavLink></li>
        }
        <li className=''><NavLink to="/about-us" className="transition-all duration-200" style={navLinkStyle}>ABOUT US</NavLink></li>
        {
            user?.uid ?
                <li className=''>
                    <NavLink to="/user-profile" className="transition-all duration-200 flex items-center" style={navLinkStyle}>
                        {user?.photoURL
                            ? <img src={user?.photoURL} className="w-11 rounded-full p-1 bg-[#183661]" alt="user" />
                            : <img src={placeholderUser} className="w-11 rounded-full p-1 bg-[#183661]" alt="user" />}
                    </NavLink>
                </li>
                : <li className=''><NavLink to="/login" className="transition-all duration-200" style={navLinkStyle}>LOGIN</NavLink></li>
        }
        <li className=''>
            <NavLink to="/cart" className="relative transition-all duration-200" style={navLinkStyle}>
                <i className="fa-sharp fa-solid fa-cart-plus text-lg text-[#183661]"></i>
            </NavLink>
        </li>
    </>
    return (
        <nav className='flex justify-between lg:px-20 md:px-14 px-5 items-center bg-slate-50'>
            <Link to="/">
                <img src={logo} className="w-24" alt="" />
            </Link>
            <div className='lg:flex md:flex items-center justify-center hidden'>
                <ul className='flex lg:gap-x-14 md:gap-x-8 items-center'>{navLink}</ul>
            </div>
            <div className='lg:hidden md:hidden'>
                <button
                    onClick={() => setMenuOpen(!menuOpen)}>
                    <img src={hamBurger} className="w-10" alt="" />
                </button>
            </div>
            {
                menuOpen &&
                <div className='top-0 right-0 fixed h-full w-[70vw] transition-all ease-in-out duration-500 translate-y-0 z-10 p-4 backdrop-blur-[30px]'>
                    <div className='flex justify-end mt-4 mr-2'>
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            <img src={menuClose} className="w-7" alt="" />
                        </button>
                    </div>
                    <ul className="mt-3 p-2 backdrop-blur-[100px] gap-y-16 flex flex-col" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                        {navLink}
                    </ul>
                </div>
            }
        </nav>
    );
};

export default Navbar;