
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showError, setShowError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {}



    return (
        <div className="max-w-2xl mx-auto my-10">
      <div className="bg-whote pb-20 pt-10  shadow-md p-20 mt-5">
        <h3 className="text-4xl text-center my-10 text-green-500 font-semibold">
          Signup Now
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="pt-5">
              <label className="" htmlFor="text">
                Your Name
              </label>
              <input
              type='text'
                className=" w-full  p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-green-500"
                {...register("name")}
                required
              />
            </div>
            <div className="pt-5">
              <label className="" htmlFor="text">
                Your Email
              </label>
              <input
              type='email'
                className=" w-full  p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-green-500"
                {...register("email")}
                required
              />
            </div>
            <div className="pt-5 relative">
              <label className="" htmlFor="text">
                Your Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className=" w-full t p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-green-500"
                {...register("password")}
                required
              />
                {!showPassword ?
              <FaEyeSlash onClick={() => setShowPassword(true)} className="absolute text-xl"
                  style={{ top: "70px", right: "10px" }} />
                  :
                  <FaEye onClick={() => setShowPassword(false)} className="absolute text-xl"
                  style={{ top: "70px", right: "10px" }} />
                }
            </div>
          <button
            type="submit"
            className="group my-6 relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Login
          </button>
        </form>
        <p className="text-center text-red-500 pt-5">{showError && showError}</p>
        <p className="text-center pt-5 ">Already have an account? <Link className="text-green-500" to="/login">Login</Link></p>
      
      </div>
    </div>
    );
};

export default Signup;