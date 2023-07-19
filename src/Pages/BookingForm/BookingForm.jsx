import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const BookingForm = () => {
    const loadHouse = useLoaderData()
    const {user} = useContext(AuthContext)
    // console.log(loadHouse);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        const {name, email, number} = data;
        const {address,availability_date,bathrooms,bedrooms, city, house_name, owner_email, owner_name, phone_number, picture, rent_per_month, room_size, _id} = loadHouse;
        const bookHouse = { name, email, number, address,availability_date,bathrooms,bedrooms, city, house_name, owner_email, owner_name, phone_number, picture, rent_per_month, room_size, houseId: _id}
        console.log(bookHouse);
        axios.post(`https://house-hunter-server-eight.vercel.app/mybooking`, bookHouse)
        .then(res => {
            console.log(res.data);
            if(res.data.insertedId){
                reset()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'You booked this house',
                    showConfirmButton: false,
                    timer: 1500
                  })
            } else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'This house already added to your booking list'
                  })
              }
        })
      }


    
    return (
        <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-4xl font-semibold mb-14 mt-0">
          Add New House
        </h3>
        <div className="bg-whote pb-20  ">
          <div className="max-w-3xl lg:mx-auto mx-4 mt-14">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="pt-3">
                  <label className="" htmlFor="text">
                    Your Name
                  </label>
                  <input
                    defaultValue={user?.name}
                    readOnly
                    className=" w-full  p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-green-500"
                    {...register("name")}
                  />
                  <p></p>
                </div>
                <div className="pt-3">
                  <label className="" htmlFor="text">
                    Your Email
                  </label>
                  <input
                    defaultValue={user?.email}
                    readOnly
                    className=" w-full  p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-green-500"
                    {...register("email")}
                  />
                </div>
                <div className="pt-3">
                  <label className="" htmlFor="text">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className=" w-full  p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-green-500"
                    {...register('number', {
                        pattern: /^(?:\+?88)?01[3-9]\d{8}$/,
                        required: 'Please enter a valid Bangladeshi phone number.',
                      })}
                  />
                  {errors.number?.type === 'pattern' && <p className='text-red-500'>Please enter a valid Bangladeshi phone number</p>}
                  
                </div>
              <button
                type="submit"
                className="group my-6 relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Book House
              </button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default BookingForm;