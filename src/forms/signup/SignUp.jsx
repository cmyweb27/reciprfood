import React, { useState } from "react";

import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMs";
import "./SignUp.css";

function SignUp() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data, "data");
  };
  const handleChange = (e) => {};

  return (
    <div>
      <form className="form contain" onSubmit={handleSubmit(onSubmit)}>
        <h2>Delevery Address</h2>
        <label>Name:</label>
        <input
          name="firstName"
          ref={register({ required: true, minLength: 5 })}
        />
        <ErrorMessage error={errors.firstName} />

        <label>Email</label>
        <input
          onChange={handleChange}
          name="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        <ErrorMessage error={errors.email} />
        <label>Phone Number</label>
        <input
          onChange={handleChange}
          name="phone number"
          type="number"
          ref={register({ required: true, min: 11 })}
        />
        <ErrorMessage error={errors.phonenumber} />
        <label>Delivery Address</label>
        <textarea
          onChange={handleChange}
          name="delvery address"
          ref={register}
        />
        <ErrorMessage error={errors.deliveryaddress} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default SignUp;
