import React from 'react';
import Rating from 'react-rating';

const Review = ({ UserReview }) => {
    const { name, img, review, location, ratings, like } = UserReview;

    return (

        <div className='flex items-center justify-center'>
            <div className="rounded border flex flex-col justify-evenly p-5 w-full h-full bg-slate-50 hover:bg-slate-100 transition-all duration-200">
                <div className="flex w-full items-center justify-between border-b pb-3">
                    <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 rounded-full">
                            <img src={img} alt="" />
                        </div>
                        <div className="text-lg font-bold text-slate-700">{name}</div>
                    </div>
                    <div className="flex items-center space-x-8">
                        <button className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold">Category</button>
                        <div className="text-xs text-neutral-500">2 hours ago</div>
                    </div>
                </div>

                <div className="mt-4 mb-6">
                    <div className="mb-3 text-xl font-bold">Nulla sed leo tempus, feugiat velit vel, rhoncus neque?</div>
                    <div className="text-sm text-neutral-600">{review}</div>
                </div>

                <div>
                    <div className="flex items-center justify-between text-slate-500">
                        <div className="flex space-x-4 md:space-x-8">
                            <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mr-1.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                </svg>
                                <span>{like}</span>
                            </div>
                        </div>

                        <div className="text-2xl">
                            <Rating
                                placeholderRating={ratings}
                                readonly={true}
                                emptySymbol={<img src="https://raw.githubusercontent.com/dreyescat/react-rating/master/assets/images/star-grey.png" className="icon" alt="/" />}
                                placeholderSymbol={<img src="https://raw.githubusercontent.com/dreyescat/react-rating/master/assets/images/star-red.png" className="icon" alt="/" />}
                                fullSymbol={<img src="https://raw.githubusercontent.com/dreyescat/react-rating/master/assets/images/star-yellow.png" className="icon" alt="/" />}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>






        // <div className="relative group hover:bg-slate-100 bg-slate-100 transition hover:z-[1] shadow-md rounded-md hover:shadow-2xl">
        //     <div className="w-full h-full relative p-8 space-y-8 border-dashed rounded-md transition duration-300 group-hover:bg-slate-100 bg-slate-50 group-hover:border group-hover:scale-90 flex flex-col justify-evenly">

        //         <div className="space-y-2">
        //             <p className="text-sm text-gray-600 feature-description">{review}</p>
        //         </div>
        //         <div className="flex justify-between items-center">
        //             <div className='flex flex-col gap-y-4'>
        //                 <div className="avatar w-10">
        //                     <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        //                         <img src={img} alt="Reviewer Img" />
        //                     </div>
        //                 </div>
        //                 <div>
        //                     <p>{name}</p>
        //                     <p>{location}</p>
        //                 </div>
        //             </div>
        //             <span className="-translate-x-4 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
        //                 <Rating
        //                     placeholderRating={ratings}
        //                     readonly={true}
        //                     emptySymbol={<img src="https://raw.githubusercontent.com/dreyescat/react-rating/master/assets/images/star-grey.png" className="icon" alt="/" />}
        //                     placeholderSymbol={<img src="https://raw.githubusercontent.com/dreyescat/react-rating/master/assets/images/star-red.png" className="icon" alt="/" />}
        //                     fullSymbol={<img src="https://raw.githubusercontent.com/dreyescat/react-rating/master/assets/images/star-yellow.png" className="icon" alt="/" />}
        //                 />
        //             </span>

        //         </div>
        //     </div>
        // </div>
    );
};

export default Review;