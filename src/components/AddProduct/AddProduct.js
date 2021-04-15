import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

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
  };
}
  const handleImageUpload = event => {
    const imageData = new FormData();
    imageData.set = ("key", "f40df31ae3c6e83b0983308cbacb4257");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
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
