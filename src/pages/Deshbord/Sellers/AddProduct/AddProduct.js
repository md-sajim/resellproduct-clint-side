import React, { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {
    const { user, lodign } = useContext(AuthContext);
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const product = {
            name: data.name,
            email: data.email,
            productName: data.productname,
            img: data.url,
            resellPrice: data.resellPrice,
            orginalPrice: data.orginalPrice,
            purchase: data.purchase,
            catagory: data.catagory,
            condition: data.condition,
            number: data.number,
            location: data.location,
            discription: data.discription,
            avialabol: true
        }
        fetch("https://resell-product-server-nu.vercel.app/product", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data1 => {
                if (data1.acknowledged) {
                    toast.success("product add success")
                    navigate("/dashbore/myproduct")
                }
            })
            .catch(err => toast.error(err))
    }

    if (lodign) {
        return lodign;
    }
    return (
        <div style={{ backgroundColor: "orange", height: "100%" }}
            className='container pb-5'>
            <h1 className='my-5'>ADD YOUR PRODUCT</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col">
                        <div className="form-outline">
                            <input readOnly defaultValue={user?.displayName} {...register("name", { required: "Enter your name" })} type="text" className="form-control" />
                            <label className="form-label" htmlFor="sellerNmae">Seller Name</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <input readOnly defaultValue={user?.email} {...register("email", { required: "Enter your email" })} type="email" className="form-control" />
                            <label className="form-label" htmlFor="sellerEmail">Seller Email</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-outline">
                            <input {...register("productname", { required: "Enter your Product Name" })} type="text" id="productName" className="form-control" />
                            <label className="form-label" htmlFor="productName">Product Name</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <input {...register("url", { required: "Enter your Img Url" })} type="text" id="imgUrl" className="form-control" />
                            <label className="form-label" htmlFor="imgUrl">Product img url</label>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col">
                        <div className="form-outline">
                            <input {...register("resellPrice", { required: "Enter Resell Price" })} type="number" id="resellPrice" className="form-control" />
                            <label className="form-label" htmlFor="resellPrice">Resell Price</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <input {...register("orginalPrice", { required: "Enter Orginal Price" })} type="number" id="orginalPrice" className="form-control" />
                            <label className="form-label" htmlFor="orginalPrice">Orginal Price</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <input {...register("purchase", { required: "Enter your name" })} type="number" id="purchaseYear" className="form-control" />
                            <label className="form-label" htmlFor="purchaseYear">Year of purchase</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">

                            <select
                                {...register("catagory", { required: "Select catagory" })}
                                className='form-control' name="catagory" id="catagory">
                                <option value={1}>Living Room</option>
                                <option value={2}>Kitchen</option>
                                <option value={3}>Bedroom</option>
                                <option value={4}>Dining Room Furniture</option>
                            </select>
                            <label className="form-label" htmlFor="catagory">Catagory</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-outline">
                            <select
                                {...register("condition", { required: "select your product condition" })}
                                className='form-control' id="conditionType">
                                <option value='excelent'>Excelent</option>
                                <option value='good'>Good</option>
                                <option value='fair'>Fair</option>

                            </select>
                            <label className="form-label" htmlFor="conditionType">Condition Type</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <input {...register("number", { required: "Enter your Mobil number" })} type="number" id="number" className="form-control" />
                            <label className="form-label" htmlFor="number">Mobil number</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <input {...register("location", { required: "Enter your name" })} type="text" id="location" className="form-control" />
                            <label className="form-label" htmlFor="location">Location</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="form-outline mb-4">
                        <textarea {...register("discription", { required: "Enter Discription" })} className="form-control" id="discription" rows="4"></textarea>
                        <label className="form-label" htmlFor="discription">Discription</label>
                    </div>
                </div>

                <button className='btn btn-secondary btn-lg px-5' type="submit">ADD PRODUCT</button>
            </form>
        </div>
    );
};

export default AddProduct;