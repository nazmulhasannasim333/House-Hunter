import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const image_upload_token = import.meta.env.VITE_image_upload_token;

const UpdateProfile = () => {
const navigate = useNavigate()
    const loadUser = useLoaderData()
    // console.log(loadUser);
   

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    const {
        address,
        email,
        gender,
        name,
        phone,
        photo
      } = data;
      const upadteProfile = {
        address,
        email,
        gender,
        name,
        phone,
        photo
      };
    //   console.log(upadteProfile);

      axios.put(`https://house-hunter-server-eight.vercel.app/updateprofile/${loadUser._id}`, upadteProfile)
      .then(res => {
        if (res.data.modifiedCount > 0) {
            reset();
            navigate('/dashboard/profile')
            Swal.fire({
              title: "Success!",
              text: "Your profile has been updated",
              icon: "success",
              confirmButtonText: "Ok",
            });
          }
      })
  };


  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-4xl font-semibold mb-14 mt-0">
          Update Profile
        </h3>
        <div className="bg-whote pb-20  ">
          <div className="max-w-3xl lg:mx-auto mx-4 mt-14">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="pt-3">
                  <label className="" htmlFor="text">
                    Your Name
                  </label>
                  <input
                      defaultValue={loadUser && loadUser?.name}
                    className=" w-full  p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-green-500"
                    {...register("name")}
                  />
                </div>
                <div className="pt-3">
                  <label className="" htmlFor="text">
                    Your Email
                  </label>
                  <input
                      defaultValue={loadUser && loadUser?.email}
                    readOnly
                    className=" w-full  p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-green-500"
                    {...register("email")}
                  />
                </div>
                <div className="pt-3">
                  <label className="" htmlFor="text">
                    Address
                  </label>
                  <input
                  defaultValue={loadUser && loadUser?.address}
                    className=" w-full  p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-green-500"
                    {...register("address")}
                  />
                </div>
                <div className="pt-3">
                  <label className="" htmlFor="text">
                    Phone Number
                  </label>
                  <input
                  defaultValue={loadUser && loadUser?.phone}
                    type="number"
                    className=" w-full  p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-green-500"
                    {...register("phone")}
                  />
                </div>

                <div className="pt-3">
              <label className="" htmlFor="text">
                Gender
              </label>
              <select
              defaultValue={loadUser && loadUser?.gender}
                className=" w-full  p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-green-500"
                {...register("gender")}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Custom">Custom</option>
              </select>
            </div>
            <div className="pt-3">
                  <label className="" htmlFor="text">
                    Profile Picture
                  </label>
                  <input
                  defaultValue={loadUser && loadUser?.photo}
                    type="text"
                    className=" w-full  p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-green-500"
                    {...register("photo")}
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="group my-6 relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
