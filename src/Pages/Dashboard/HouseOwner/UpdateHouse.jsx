import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateHouse = () => {
    const loadedHouse = useLoaderData()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        data.bedrooms = parseInt(data.bedrooms)
        data.bathrooms = parseInt(data.bathrooms)
        data.rent_per_month = parseFloat(data.rent_per_month)

        const {address,availability_date,bathrooms,bedrooms, city, house_name, owner_email, owner_name, phone_number, picture, rent_per_month, room_size, description} = data

        const updateHouse = {address,availability_date,bathrooms,bedrooms, city, house_name, owner_email, owner_name, phone_number, picture, rent_per_month, room_size, description}

        axios.put(`https://house-hunter-server-eight.vercel.app/updatehouse/${loadedHouse._id}`, updateHouse)
        .then(res => {
            if(res.data.modifiedCount > 0){
                navigate("/dashboard/managehouse")
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your house has been updated',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
      }



    return (
        <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-4xl font-semibold mb-14 mt-0">
          Update House
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
                    defaultValue={loadedHouse?.owner_name}
                    readOnly
                    className=" w-full  p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-green-500"
                    {...register("owner_name")}
                    required
                  />
                </div>
                <div className="pt-3">
                  <label className="" htmlFor="text">
                    Your Email
                  </label>
                  <input
                    defaultValue={loadedHouse?.owner_email}
                    readOnly
                    className=" w-full  p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-green-500"
                    {...register("owner_email")}
                    required
                  />
                </div>
                <div className="pt-3">
                  <label className="" htmlFor="text">
                    House Name
                  </label>
                  <input
                    type="text"
                    defaultValue={loadedHouse?.house_name}
                    className=" w-full  p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-green-500"
                    {...register("house_name")}
                    required
                  />
                </div>
                <div className="pt-3">
                  <label className="" htmlFor="text">
                  Availability Date
                  </label>
                  <input
                    type="date"
                    defaultValue={loadedHouse?.availability_date}
                    className=" w-full  p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-green-500"
                    {...register("availability_date")}
                    required
                  />
                </div>
                <div className="pt-3">
                  <label className="" htmlFor="text">
                  Room Size
                  </label>
                  <input
                    type="text"
                    defaultValue={loadedHouse?.room_size}
                    className=" w-full  p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-green-500"
                    {...register("room_size")}
                    required
                  />
                </div>
                <div className="pt-3">
                  <label className="" htmlFor="text">
                  Address</label>
                  <input
                    type="text"
                    defaultValue={loadedHouse?.address}
                    className=" w-full  p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-green-500"
                    {...register("address")}
                    required
                  />
                </div>
                <div className="pt-3">
                  <label className="" htmlFor="text">
                  City</label>
                  <input
                    type="text"
                    defaultValue={loadedHouse?.city}
                    className=" w-full  p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-green-500"
                    {...register("city")}
                    required
                  />
                </div>
                <div className="pt-3">
                  <label className="" htmlFor="text">
                  Bedrooms</label>
                  <input
                    type="number"
                    defaultValue={loadedHouse?.bedrooms }
                    className=" w-full  p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-green-500"
                    {...register("bedrooms")}
                    required
                  />
                </div>
                <div className="pt-3">
                  <label className="" htmlFor="text">
                  bathrooms</label>
                  <input
                    type="number"
                    defaultValue={loadedHouse?.bathrooms }
                    className=" w-full  p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-green-500"
                    {...register("bathrooms")}
                    required
                  />
                </div>
                <div className="pt-3">
                  <label className="" htmlFor="text">
                  Phone Number</label>
                  <input
                    type="text"
                    defaultValue={loadedHouse?.phone_number}
                    className=" w-full  p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-green-500"
                    {...register('phone_number', {
                        pattern: /^(?:\+?88)?01[3-9]\d{8}$/,
                        required: 'Please enter a valid Bangladeshi phone number.',
                      })}
                  />
                   {errors.phone_number?.type === 'pattern' && <p className='text-red-500'>Please enter a valid Bangladeshi phone number</p>}
                </div>
                <div className="pt-3">
                  <label className="" htmlFor="text">
                  Rent per month</label>
                  <input
                    type="number"
                    defaultValue={loadedHouse?.rent_per_month}
                    className=" w-full  p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-green-500"
                    {...register("rent_per_month")}required
                  />
                </div>
                <div className="pt-3">
                  <label className="" htmlFor="text">
                    House Picture
                  </label>
                  <input
                    type="text"
                    defaultValue={loadedHouse?.picture}
                    className=" w-full  p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-green-500"
                    {...register("picture")}
                    required
                  />
                </div>
              </div>

              <div className="pt-3">
                  <label className="" htmlFor="text">
                    Description
                  </label>
                  <textarea
                    type="text"
                    defaultValue={loadedHouse?.description}
                    className=" w-full  p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-green-500"
                    {...register("description")}
                    required
                  />
                </div>
              <button
                type="submit"
                className="group my-6 relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Update House
              </button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default UpdateHouse;