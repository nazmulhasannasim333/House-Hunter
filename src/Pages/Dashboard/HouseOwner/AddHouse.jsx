import React from 'react';
import { useForm } from 'react-hook-form';

const AddHouse = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {}


    return (
        <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-4xl font-semibold mb-14 mt-0">
          Add New House
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
                    // defaultValue={user?.displayName}
                    readOnly
                    className=" w-full  p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-green-500"
                    {...register("instructorName")}
                  />
                </div>
                <div className="pt-3">
                  <label className="" htmlFor="text">
                    Your Email
                  </label>
                  <input
                    // defaultValue={user?.email}
                    readOnly
                    className=" w-full  p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-green-500"
                    {...register("instructorEmail")}
                  />
                </div>
                <div className="pt-3">
                  <label className="" htmlFor="text">
                    Class Name
                  </label>
                  <input
                    type="text"
                    className=" w-full  p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-green-500"
                    {...register("className")}
                  />
                </div>
                <div className="pt-3">
                  <label className="" htmlFor="text">
                    Available Seats
                  </label>
                  <input
                    type="number"
                    className=" w-full  p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-green-500"
                    {...register("availableSeats")}
                  />
                </div>
                <div className="pt-3">
                  <label className="" htmlFor="text">
                    Price
                  </label>
                  <input
                    type="number"
                    className=" w-full  p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-green-500"
                    {...register("price")}
                  />
                </div>
                <div className="pt-3">
                  <label className="" htmlFor="text">
                    Class Image
                  </label>
                  <input
                    type="file"
                    className=" w-full  p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-green-500"
                    {...register("classImage")}
                  />
                </div>
              </div>
  
              <button
                type="submit"
                className="group my-6 relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Add A House
              </button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default AddHouse;