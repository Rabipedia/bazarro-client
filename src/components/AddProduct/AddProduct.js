import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [imageURL, setImageURL] = useState(null);
  const onSubmit = (data) => {
    if(imageURL){
      const productData = {
        imageURL: imageURL,
        name: data.name,
        quantity: data.quantity,
        price: data.price
      };
      const url = `http://localhost:5000//addProducts`
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
      })
        .then(res => {
          console.log(res);
        })
  }
  else {
    alert('please wait')
  }
}
  const handleImageUpload = event => {
    const imageData = new FormData();
    imageData.set = ("key", "f3fdd4074258923e97728ac94b34fc79");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        console.log(response);
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <div className='side-nav col-md-4'>
        <SideMenu></SideMenu>
      </div>
      <div className='col-md-8'>
        <h3 className="pt-3">Add Product</h3>
      <form onSubmit={handleSubmit(onSubmit)} style={{ margin: "0 auto" }}>
        <input
          className="form-control"
          name="name"
          placeholder="Product Name"
          {...register("name")}
        />
        <br />
        <input
          className="form-control"
          name="quantity"
          placeholder="kg/gm"
          {...register("quantity")}
        />
        <br />
        <input
          className="form-control"
          name="price"
          placeholder="price"
          {...register("price")}
        />
        <br />
        <input
          className="form-control"
          name="examplerequired"
          type="file"
          onChange={handleImageUpload}
        />
        <br />
        {errors.exampleRequired && <span>This field is required</span>}

        <input className="btn btn-primary" type="submit" value="Add product" />
      </form>
    </div>
  );
};

export default AddProduct;
