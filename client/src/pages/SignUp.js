import React, { useState } from "react";
import { signUp } from "../services/userService";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserValidationSchema } from "../data-model/userModel";
import { zodResolver } from "@hookform/resolvers/zod";

function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(UserValidationSchema) });

  // const [formData, setFormData] = useState({
  //   first_name: "",
  //   last_name: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  //   error: "",
  // });

  // const handleChange = (e) => {
  //   setFormData((prev) => {
  //     return { ...prev, [e.target.name]: e.target.value };
  //   });
  //   if (
  //     e.target.name === "confirmPassword" &&
  //     e.target.value !== formData.password
  //   ) {
  //     setFormData((prev) => {
  //       return { ...prev, error: "Password is not matching" };
  //     });
  //   } else {
  //     setFormData((prev) => {
  //       return { ...prev, error: "" };
  //     });
  //   }
  // };

  // const checkFormValid = () => {
  //   if (
  //     formData.first_name === "" ||
  //     formData.last_name === "" ||
  //     formData.email === "" ||
  //     formData.password === "" ||
  //     formData.confirmPassword === ""
  //   ) {
  //     return true;
  //   } else if (formData.password !== formData.confirmPassword) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  const onSubmit = (data) => {
    console.log("🚀 ~ onSubmit ~ data:", data);
    // e.preventDefault();

    const newUser = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      username: data.username,
    };
    console.log("🚀 ~ onSubmit ~ newUser:", newUser);

    signUp(newUser).then((res) => {
      navigate(`/login`, { replace: true });
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5 mx-auto">
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
            <div className="form-group">
              <label htmlFor="name">First name</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                placeholder="Enter your first name"
                // value={formData.first_name}
                // onChange={handleChange}
                {...register("firstName")}
              />
              {errors.firstName && (
                <span className="text-danger">{errors.firstName.message}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="name">Last name</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                placeholder="Enter your lastname name"
                // value={formData.last_name}
                // onChange={handleChange}
                {...register("lastName")}
              />
              {errors.lastName && (
                <span className="text-danger">{errors.lastName.message}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter email"
                // value={formData.email}
                // onChange={handleChange}
                {...register("email")}
              />
              {errors.email && (
                <span className="text-danger">{errors.email.message}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                // value={formData.password}
                // onChange={handleChange}
                {...register("password")}
              />
              {errors.password && (
                <span className="text-danger">{errors.password.message}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                placeholder="Confirm Password"
                // value={formData.confirmPassword}
                // onChange={handleChange}
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <span className="text-danger">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="password"
                className="form-control"
                name="username"
                placeholder="Username"
                // value={formData.confirmPassword}
                // onChange={handleChange}
                {...register("username")}
              />
              {errors.username && (
                <span className="text-danger">{errors.username.message}</span>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-lg mb-20  btn-primary btn-block"
              // disabled={checkFormValid()}
            >
              Register!
            </button>
          </form>
          <br />
          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={() => navigate("/login")}
          >
            Go to Sign In!
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
