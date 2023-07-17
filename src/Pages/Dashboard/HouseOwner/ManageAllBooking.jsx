import React from 'react';

const ManageAllBooking = () => {
    return (
        <div className="w-full px-10  my-16">
        <h3 className="text-3xl ms-2 my-3 font-bold">
          Total Booking: 34
        </h3>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
              <tr>
                <th className="text-xl font-semibold">#</th>
                <th className="text-xl font-semibold">Image</th>
                <th className="text-xl font-semibold">Name</th>
                <th className="text-xl font-semibold">Email</th>
                <th className="text-xl font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
                <tr >
                  <th>1</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src="" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-semibold text-md">{"user.name"}</td>
                  <td>{"user.email"}</td>
                  
                  <td>
                    <button
                    //   onClick={() => handleMakeAdmin(user)}
                      className="btn btn-ghost btn-xs"
                    >
                      Approved
                    </button>
                  </td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ManageAllBooking;