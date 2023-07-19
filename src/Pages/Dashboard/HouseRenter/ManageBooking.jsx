import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProvider';

const ManageBooking = () => {
    const {user, loading} = useContext(AuthContext)

    const { data: booking = [], refetch } = useQuery({
        queryKey: ["booking"],
        enabled: !loading,
        queryFn: async () => {
          const response = await axios.get(`https://house-hunter-server-eight.vercel.app/mybooking/${user?.email}`);
          return response.data;
        },
      });


    // delete a booking house
    const handleDeleteBooking = (book) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              axios.delete(`https://house-hunter-server-eight.vercel.app/booking/${book._id}`)
              .then(res => {
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire("Deleted!", "Your booking has been deleted.", "success");
                  }
              })
            }
          });
    }



    return (
        <div className="w-full px-10  my-16">
        <h3 className="text-3xl ms-2 my-3 font-bold">
          Total Booking: {booking.length}
        </h3>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead className="bg-gradient-to-r from-pink-600 to-orange-500 text-white">
              <tr>
                <th className="text-xl font-semibold">#</th>
                <th className="text-xl font-semibold">Image</th>
                <th className="text-xl font-semibold">Owner Name</th>
                <th className="text-xl font-semibold">Owner Email</th>
                <th className="text-xl font-semibold">House Name</th>
                <th className="text-xl font-semibold">City</th>
                <th className="text-xl font-semibold">Rent</th>
                <th className="text-xl font-semibold">Status</th>
                <th className="text-xl font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {booking.map((book, i) =>  <tr key={book._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={book?.picture} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-semibold text-md">{book?.owner_name}</td>
                  <td>{book?.owner_email}</td>
                  <td>{book?.house_name}</td>
                  <td>{book?.city}</td>
                  <td>${book?.rent_per_month}/month</td>
                  <td>
                    {book.status === "approved" ?
                    <button
                    className="btn btn-ghost btn-xs bg-green-500 text-white"
                  >
                    Approved
                  </button>
                  :
                  <button
                      className="btn btn-ghost btn-xs bg-red-500 text-white"
                    >
                      Pending
                    </button>
                    }
                  </td>
                  <td>
                  <button
                  onClick={() => handleDeleteBooking(book)}
                      className="btn btn-ghost btn-xs bg-red-500 rounded-full text-white"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>)}
               
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ManageBooking;