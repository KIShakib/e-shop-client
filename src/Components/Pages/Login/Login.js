import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';
import { toast } from 'react-hot-toast';
import SmallSpinner from '../../Shared/SmallSpinner';
import { setAuthToken } from '../../../Context/AuthContext/Auth';

const Login = () => {
    const [passVisible, setPassVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/user-profile";

    // SignIn User
    const handleLogin = e => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // SignIn
        signIn(email, password)
            .then(result => {
                toast.success("Login Successful...");
                setAuthToken(result.user);
                navigate(from, { replace: true });
            })
            .catch(err => {
                toast.error(err.message)
                console.log("From SignIn", err);
                toast.error(err.message.slice(10))
                setLoading(false);
            })

    }


    // SignIn With Google
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                toast.success("Login With Google Successful");
                setAuthToken(result.user);
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log("From Google SignIn", err);
                toast.error(err.message.slice(10))
            })
    }


 




    return (
        <section className="lg:w-1/3 md:w-2/3 w-full px-4 lg:px-0 md:px-0 mx-auto my-7 md:my-16">
            <div className="border shadow-md">
                <div className="flex justify-between">
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive
                                ? `bg-[#183661] text-center py-2 border-b border-b-primary text-white font-medium w-full`
                                : `text-center border-b  text-primary py-2 font-medium w-full`
                        }
                    >
                        Login
                    </NavLink>

                    <NavLink
                        to="/signup"
                        className={({ isActive }) =>
                            isActive
                                ? `bg-[#183661] text-center py-2 border-b border-b-primary text-white font-medium w-full`
                                : `text-center border-b  text-primary py-2 font-medium w-full`
                        }
                    >
                        Sign Up
                    </NavLink>
                </div>

                <div className="p-10">
                    <form onSubmit={handleLogin} className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <label htmlFor="email1" value="Your email" />
                            </div>
                            <input
                                name="email"
                                id="email1"
                                type="email"
                                className='w-full p-2 focus:outline-[#183661]'
                                placeholder="Your email"
                                required={true}
                            />
                        </div>
                        <div className='relative flex items-center'>
                            <div className="mb-2 block">
                                <label htmlFor="password" value="Your password" />
                            </div>
                            <input
                                name="password"
                                id="password"
                                type={passVisible ? "text" : "password"}
                                className='w-full p-2 focus:outline-[#183661]'
                                required={true}
                                placeholder="Your Password"
                            />
                            <button onClick={() => setPassVisible(!passVisible)} className='absolute right-2 z-50'>
                                {
                                    passVisible ? <FaEye /> : <FaEyeSlash />
                                }
                            </button>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                name="remember"
                                id="remember"
                                type="checkbox"
                            />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <div>
                            <h5>Admin Credential</h5>
                            <p className='text-sm'>Email: admin@gmail.com</p>
                            <p className='text-sm'>Pass: 0310199</p>
                        </div>
                        <button
                            type='submit'
                            className="bg-[#183661] hover:bg-[#183675] py-2 px-4 cursor-pointer font-medium text-white"
                        >
                            {
                                loading ? <SmallSpinner></SmallSpinner>
                                    : "Login"
                            }
                        </button>
                    </form>
                    {/* {error && <small className="text-red-500 mt-2">{error}</small>} */}

                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 "></div>
                        <p className="px-3 text-sm dark:text-[#183661]">
                            Login with social accounts
                        </p>
                        <div className="flex-1 h-px sm:w-16 "></div>
                    </div>
                    <div className="flex justify-center space-x-4 mt-4">
                        <button
                            onClick={handleSignInWithGoogle}
                            className="border p-2 rounded-md hover:bg-white"
                        >
                            <FcGoogle className="text-xl"></FcGoogle>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;