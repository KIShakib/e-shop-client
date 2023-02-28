import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import SmallSpinner from '../../Shared/SmallSpinner';

const AddProduct = () => {
    const [tick, setTick] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const category = form.category.value;
        const cpu = form.cpu.value;
        const gpu = form.gpu.value;
        const ssd = form.ssd.value;
        const image = form.image.files[0];
        const quantity = form.quantity.value;
        const price = form.price.value;
        // console.log(productName, category, cpu, gpu, ssd, image1, image2, image3, image4, quantity, price);


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
                const product = {
                    name: productName,
                    cpu,
                    gpu,
                    ssd,
                    price,
                    category,
                    quantity,
                    img: data.data.display_url
                }
                setLoading(true)
                fetch(`${process.env.REACT_APP_API_URL}/add-product`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(product)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.acknowledged) {
                            toast.success(`${productName} Added Successfully...`);
                            setLoading(false)
                            form.reset();
                        }
                    })
            })



    }


    return (
        <section className="lg:w-1/3 md:w-2/3 w-full px-4 lg:px-0 md:px-0 mx-auto my-7 md:my-16 overflow-hidden">
            <div className="border shadow-md">
                <div className="flex">
                    <h4 className='bg-[#183661] text-center py-2 rounded-t-sm text-white font-medium w-full'>Add Product</h4>
                </div>
                <div className="p-10">
                    <form onSubmit={handleAddProduct} className="flex flex-col gap-4">
                        <div>
                            <label htmlFor="productName" value="Product Name">Product Name</label>
                            <input
                                name="productName"
                                id="productName"
                                type="productName"
                                className='w-full p-2 focus:outline-[#183661]'
                                placeholder="Product Name"
                                required={true}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="category" value="Category">Category</label>
                            <select name="category" id="category" required className='w-full p-2 border-2'>
                                <option value="amd">AMD</option>
                                <option value="intel">Intel</option>
                            </select>
                        </div>
                        <div className='flex gap-x-3'>
                            <div>
                                <label htmlFor="cpu" value="CPU">CPU</label>
                                <input
                                    name="cpu"
                                    id="cpu"
                                    type="text"
                                    className='w-full p-1 focus:outline-[#183661]'
                                    placeholder="CPU Name"
                                    required={true}
                                />
                            </div>
                            <div>
                                <label htmlFor="gpu" value="GPU">GPU</label>
                                <input
                                    name="gpu"
                                    id="gpu"
                                    type="text"
                                    className='w-full p-1 focus:outline-[#183661]'
                                    placeholder="GPU Name"
                                    required={true}
                                />
                            </div>
                            <div>
                                <label htmlFor="ssd" value="SSD">SSD</label>
                                <input
                                    name="ssd"
                                    id="ssd"
                                    type="text"
                                    className='w-full p-1 focus:outline-[#183661]'
                                    placeholder="SSD Size"
                                    required={true}
                                />
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='image' className='text-base'>
                                Product Image
                            </label>
                            <div className='flex flex-col gap-y-2'>
                                <input
                                    type='file'
                                    id='image'
                                    name='image'
                                    accept='image/*'
                                    className='w-full p-2 focus:outline-[#183661]'
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="quantity" value="Product Quantity">Product Quantity</label>
                            <input
                                name="quantity"
                                id="quantity"
                                type="number"
                                className='w-full p-2 focus:outline-[#183661]'
                                placeholder="12"
                                required={true}
                            />
                        </div>
                        <div>
                            <label htmlFor="price" value="Price">Price</label>
                            <input
                                name="price"
                                id="price"
                                type="number"
                                className='w-full p-2 focus:outline-[#183661]'
                                placeholder="BDT 49000"
                                required={true}
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                name="tick"
                                id="tick"
                                type="checkbox"
                                onChange={() => setTick(!tick)}
                            />
                            <label htmlFor="tick">Every information are accurate</label>
                        </div>
                        <button
                            className={`bg-[#183661] hover:bg-[#183675] py-2 px-4 cursor-pointer font-medium text-white ${!tick && "cursor-not-allowed opacity-50"}`}
                            type="submit"
                            value="Add Product"
                            disabled={!tick}
                        >
                            {loading ? <SmallSpinner /> : "Add Product"}
                        </button>
                    </form>
                    {/* {error && <small className="text-red-500 mt-2">{error}</small>} */}
                </div>
            </div>
        </section>
    );
};

export default AddProduct;