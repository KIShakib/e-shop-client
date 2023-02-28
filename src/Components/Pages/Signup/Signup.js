import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';
import { toast } from 'react-hot-toast';
import SmallSpinner from '../../Shared/SmallSpinner';
import { setAuthToken } from '../../../Context/AuthContext/Auth';

const Signup = () => {
    const [passVisible, setPassVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const { createUser, updateUserProfile, signInWithGoogle, signInWithFacebook, user } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/user-profile";

    const handleSignIn = e => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const name = form.name.value;
        const image = form.image.files[0];
        const email = form.email.value;
        const password = form.password.value;

        const user = {
            name,
            email
        }


        // Upload To Imgbb
        const formData = new FormData();
        formData.append("image", image)

        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_apikey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                // SignUp User
                createUser(email, password)
                    .then(result => {

                        // Set User To DB And Get Token
                        setAuthToken(user);

                        // Update User Profile
                        updateUserProfile(name, data.data.display_url)
                            .then(result => {
                                form.reset();
                                setLoading(false);
                                toast.success("SignUp Successful...!")
                                // navigate(from, { replace: true });
                            })
                            .catch(err => {
                                toast.error(err.message.slice(10))
                                console.log("From Update Profile", err)
                            })

                    })
                    .catch(err => {
                        console.log("From Create User", err);
                        toast.error(err.message.slice(10))
                        setLoading(false);
                    })

            })
            .catch(err => {
                console.log("From Imgbb", err);
                toast.error(err.message.slice(10))
                setLoading(false)
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
        <section className="lg:w-1/3 md:w-2/3 w-full px-4 lg:px-0 md:px-0  mx-auto my-7 md:my-16">
            <div className="border  shadow-md">
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
                    <form onSubmit={handleSignIn} className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <label htmlFor="name" value="Full Name" />
                            </div>
                            <input
                                name="name"
                                id="name"
                                type="text"
                                className='w-full p-2 focus:outline-[#183661]'
                                placeholder="Full Name"
                                required={true}
                            />
                        </div>
                        <div>
                            <label htmlFor='image' className='block mb-2 text-sm text-gray-400 font-bold'>
                                Select Your Image
                            </label>
                            <input
                                type='file'
                                id='image'
                                name='image'
                                accept='image/*'
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <label htmlFor="phone" value="Your phone number" />
                            </div>
                            <input
                                name="phone"
                                id="phone"
                                type="phone"
                                className='w-full p-2 focus:outline-[#183661]'
                                placeholder="Your phone"
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <label htmlFor="email" value="Your email" />
                            </div>
                            <input
                                name="email"
                                id="email"
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
                                placeholder="Create Password"
                            />
                            <button onClick={() => setPassVisible(!passVisible)} className='absolute right-2 z-50'>
                                {
                                    passVisible ? <FaEye /> : <FaEyeSlash />
                                }
                            </button>
                        </div>
                        <button
                            type='submit'
                            className="bg-[#183661] hover:bg-[#183675] py-2 px-4 cursor-pointer font-medium text-white"
                        >
                            {
                                loading ? <SmallSpinner></SmallSpinner>
                                    : "Signup"
                            }
                        </button>
                    </form>
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
                            className="flex items-center gap-x-2 border p-2 rounded-sm hover:bg-white px-10"
                        >
                            <FcGoogle className="text-xl"></FcGoogle>
                            Login With Google
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;