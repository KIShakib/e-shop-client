import React from 'react';
import { FcLeft, FcRight } from "react-icons/fc";
import user1 from "../../../../Assets/Images/user1.png";
import user2 from "../../../../Assets/Images/user2.png";
import user3 from "../../../../Assets/Images/user3.png";
import user4 from "../../../../Assets/Images/user4.png";
import Review from './Review';

const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: 'David Solomon',
            img: user1,
            review: 'Continually fabricate quality systems whereas out-of-the-box innovation. Compellingly evolve team driven systems with holistic content. Credibly streamline go forward models through interdependent manufactured products.',
            location: "Cox's Bazar",
            ratings: 5,
            like: 7,
        },
        {
            _id: 2,
            name: 'Samiha Adil',
            img: user2,
            review: 'Quickly foster orthogonal solutions whereas exceptional benefits. Collaboratively aggregate multidisciplinary expertise rather than corporate collaboration and idea-sharing.',
            location: 'Mymensingh',
            ratings: 5,
            like: 9,
        },
        {
            _id: 3,
            name: 'GradMaa',
            img: user3,
            review: 'Monotonectally deliver cross-platform initiatives whereas team driven core competencies. Credibly reconceptualize cross-media services via corporate experiences. Uniquely implement sustainable solutions via professional supply chains. Dynamically.',
            location: "Gradpaa's House",
            ratings: 4,
            like: 11,
        },
        {
            _id: 4,
            name: 'MKB HD',
            img: user4,
            review: 'Compellingly strategize future-proof outsourcing whereas end-to-end convergence. Efficiently recaptiualize leading-edge relationships and progressive scenarios. Continually reintermediate high-quality results through user friendly processes.',
            location: "MKB Studio",
            ratings: 5,
            like: 2,
        },
    ]

    return (
        <section className='lg:px-10 px-5 my-40'>
            <div>
                <div>
                    <h2 className='text-center text-3xl font-bold text-[#183661] mb-10'>Our Customers Review</h2>
                </div>
                <div className='flex relative'>
                    <button className='hidden w-10 h-10 lg:flex justify-center items-center transition-all duration-300 rounded-full hover:bg-[#183661] border-2 border-[#183661] absolute top-[50%] -left-6'>
                        <FcLeft className="text-3xl text-[#183661]"></FcLeft>
                    </button>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1'>
                        {
                            reviews.map((UserReview, idx) => <Review key={idx} UserReview={UserReview}></Review>)
                        }
                    </div>
                    <button className='hidden w-10 h-10 lg:flex justify-center items-center transition-all duration-300 rounded-full hover:bg-[#183661] border-2 border-[#183661] absolute top-[50%] -right-6'>
                        <FcRight className="text-3xl text-[#183661]"></FcRight>
                    </button>
                </div>
            </div>


        </section>
    );
};

export default Reviews;