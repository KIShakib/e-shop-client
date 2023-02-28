import React, { useContext } from 'react';
import { FaMailBulk, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';

const UserProfile = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div className='lg:w-1/3 md:w-2/3 w-full px-4 lg:px-0 md:px-0 mx-auto my-7 md:my-16 border shadow-md text-[#183661]'>
            <div className="flex">
                <h4 className='bg-[#183661] text-center py-2 rounded-t-sm text-white font-medium w-full'>My Profile</h4>
            </div>
            {
                user
                    ?
                    <div className={`font-sans w-full flex flex-row justify-center items-center mb-5`}>
                        <div className={`card w-96 mx-auto rounded-none`}>
                            <img className="w-32 mx-auto rounded-full border-8 border-white" src={user.photoURL} alt="" />
                            <div className="text-center mt-2 text-3xl font-medium">{user?.displayName}</div>
                            {
                                user.email && <div className="text-center mt-2 font-light text-sm flex items-center justify-center gap-x-2">
                                    <FaMailBulk></FaMailBulk>
                                    {user?.email}
                                </div>
                            }
                            <small className="text-center font-semibold text-base  flex items-center justify-center gap-x-2">
                                <FaUserCircle></FaUserCircle> {user?.uid.toUpperCase()}
                            </small>
                            <hr className="mt-8" />
                            <button onClick={logOut} className='bg-[#183661] hover:bg-[#183675] text-center py-1 text-white font-medium w-full'>Log Out</button>
                        </div>
                    </div>
                    :
                    <div>
                        <h2 className='my-56 text-center text-xl '>Your Are Not Logged In. Please
                            <Link to="/login" className='underline-offset-4 underline'> Login</Link>
                        </h2>
                    </div>
            }
        </div>
    );
};

export default UserProfile;