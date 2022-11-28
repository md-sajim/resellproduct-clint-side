import React, { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';
import {useForm} from 'react-hook-form'
import { Button } from 'react-bootstrap';


const AddProduct = () => {
    const {user} = useContext(AuthContext);
    const {register, handleSubmit, formState:{errors}} = useForm();
    const onSubmit = data =>{

    }
    return (
        <div style={{ backgroundColor: "orange", height: "100vh" }} className='container'>
            <h1>This is add product section</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div class="row">
                <div class="col">
                    <div class="form-outline">
                        <input {...register("name", { required: "Enter your name" })} type="text" id="sellerNmae" class="form-control" />
                        <label class="form-label" htmlFor="sellerNmae">Seller Name</label>
                    </div>
                </div>
                <div class="col">
                    <div class="form-outline">
                        <input {...register("email", { required: "Enter your email" })} type="email" id="sellerEmail" class="form-control" />
                        <label class="form-label" htmlFor="sellerEmail">Seller Email</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="form-outline">
                        <input {...register("productname", { required: "Enter your Product Name" })} type="text" id="productName" class="form-control" />
                        <label class="form-label" htmlFor="productName">Product Name</label>
                    </div>
                </div>
                <div class="col">
                    <div class="form-outline">
                        <input {...register("url", { required: "Enter your Img Url" })} type="text" id="imgUrl" class="form-control" />
                        <label class="form-label" htmlFor="imgUrl">Product img url</label>
                    </div>
                </div>
            </div>

            <hr />

            <div class="row">
                <div class="col">
                    <div class="form-outline">
                        <input type="text" id="resellPrice" class="form-control" />
                        <label {...register("resellPrice", { required: "Enter Resell Price" })} class="form-label" htmlFor="resellPrice">Resell Price</label>
                    </div>
                </div>
                <div class="col">
                    <div class="form-outline">
                        <input {...register("orginalPrice", { required: "Enter Orginal Price" })} type="text" id="orginalPrice" class="form-control" />
                        <label class="form-label" htmlFor="orginalPrice">Orginal Price</label>
                    </div>
                </div>
                <div class="col">
                    <div class="form-outline">
                        <input {...register("purchase", { required: "Enter your name" })} type="email" id="purchaseYear" class="form-control" />
                        <label class="form-label" htmlFor="purchaseYear">Year of purchase</label>
                    </div>
                </div>
                <div class="col">
                    <div class="form-outline">
                        
                        <select className='form-control' name="catagory" id="catagory">
                            <option value='living room'>Living Room</option>
                            <option value='kitchen'>Kitchen</option>
                            <option value='bedroom'>Bedroom</option>
                            <option value='dining room furniture'>Dining Room Furniture</option>
                        </select>
                        <label class="form-label" htmlFor="catagory">Catagory</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="form-outline">
                        <input type="text" placeholder='(excellent,good,fair)' id="conditionType" class="form-control" />
                        <label class="form-label" htmlFor="conditionType">Condition Type</label>
                    </div>
                </div>
                <div class="col">
                    <div class="form-outline">
                        <input type="number" id="number" class="form-control" />
                        <label class="form-label" htmlFor="number">Mobil number</label>
                    </div>
                </div>
                <div class="col">
                    <div class="form-outline">
                        <input type="email" id="location" class="form-control" />
                        <label class="form-label" htmlFor="location">Location</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="form-outline mb-4">
                    <textarea class="form-control" id="discription" rows="4"></textarea>
                    <label class="form-label" for="discription">Discription</label>
                </div>
            </div>
            <div className="d-grid gap-2">
      <Button type='submit' variant="primary" size="lg">
        Block level button
      </Button>
      
    </div>
            </form>
        </div>
    );
};

export default AddProduct;