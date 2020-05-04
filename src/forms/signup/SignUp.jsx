import React, { useState } from "react";

import { useForm } from "react-hook-form";
//import ErrorMessage from "./ErrorMs";
import "./SignUp.css";

function SignUp() {
  const [name, setName] = useState({});
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setName(data);
    console.log(data);
  };
  const handleChange = (e) => {};
  console.log(name, "form object");
  return (
    <div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign Up</h1>
        <label>First Name:</label>
        <input
          onChange={handleChange}
          name="firstName"
          ref={register({ required: true })}
        />

        <label>password:</label>
        <input
          onChange={handleChange}
          name="password"
          type="password"
          ref={register({ required: true, minLength: 2 })}
        />

        <label>Username</label>
        <input name="username" ref={register({ required: true })} />

        <label>Email</label>
        <input
          onChange={handleChange}
          name="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />

        <label>Phone Number</label>
        <input
          onChange={handleChange}
          name="phone number"
          type="number"
          ref={register({ required: true, min: 11 })}
        />

        <label>Delivery Address</label>
        <textarea
          onChange={handleChange}
          name="delvery address"
          ref={register}
        />

        <input type="submit" />
      </form>
    </div>
  );
}

export default SignUp;
