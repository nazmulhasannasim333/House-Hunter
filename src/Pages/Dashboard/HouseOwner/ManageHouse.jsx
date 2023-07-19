import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { FaPenSquare, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProvider';

const ManageHouse = () => {
const {user, loading} = useContext(AuthContext)

const { data: houses = [], refetch } = useQuery({
    queryKey: ["houses"],
    enabled: !loading,
    queryFn: async () => {
      const response = await axios.get(`https://house-hunter-server-eight.vercel.app/ownhouse/${user?.email}`);
      return response.data;
    },
  });

     // delete a booking house
     const handleDelete = (book) => {
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
              axios.delete(`https://house-hunter-server-eight.vercel.app/deletehouse/${book._id}`)
              .then(res => {
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire("Deleted!", "Your house has been deleted.", "success");
                  }
              })
            }
          });
    }



    return (
        <div className="w-full px-10  my-16">
        <h3 className="text-3xl ms-2 my-3 font-bold">
          Total Houses: {houses.length}
        </h3>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead className="bg-gradient-to-r from-amber-700 to-purple-500 text-white">
              <tr>
                <th className="text-xl font-semibold">#</th>
                <th className="text-xl font-semibold">Image</th>
                <th className="text-xl font-semibold">House Name</th>
                <th className="text-xl font-semibold">City</th>
                <th className="text-xl font-semibold">Address</th>
                <th className="text-xl font-semibold">Rent</th>
                <th className="text-xl font-semibold">Edit</th>
                <th className="text-xl font-semibold">Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {houses.map((house, i) =>
                 <tr key={house._id}>
                 <th>{i + 1}</th>
                 <td>
                   <div className="flex items-center space-x-3">
                     <div className="avatar">
                       <div className="mask mask-squircle w-12 h-12">
                         <img src={house?.picture} />
                       </div>
                     </div>
                   </div>
                 </td>
                 <td className="font-semibold text-md">{house?.house_name}</td>
                 <td>{house?.city}</td>
                 <td>{house?.address}</td>
                 <td>${house?.rent_per_month}/month</td>
                 
                 <td>
                   <Link to={`/dashboard/updatehouse/${house._id}`}>
                   <button
                     className="btn btn-ghost btn-xs"
                   >
                     <FaPenSquare className='text-2xl' />
                   </button>
                   </Link>
                 </td>
                 <td>
                   <button
                   onClick={()=>handleDelete(house)}
                     className="btn btn-ghost btn-xs"
                   >
                     <FaTrash className='text-xl text-red-700' />
                   </button>
                 </td>
               </tr>
                )}
               
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ManageHouse;