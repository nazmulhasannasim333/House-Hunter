import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOwner from "../../hooks/useOwner";
import { AuthContext } from "../../providers/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [userProfile, setUserProfile] = useState({})
  

  useEffect(() => {
    fetch(`https://house-hunter-server-eight.vercel.app/profile/${user?.email}`)
    .then(res => res.json())
    .then(data => {
      setUserProfile(data)
    })
  },[user])

  const [isOwner] = useOwner();


  return (
    <div className="w-1/2 my-10 ">
      <div className="shadow-lg">
        <div
          className="w-full bg-cover bg-no-repeat bg-center"
          style={{
            height: "200px",
            backgroundImage:
              "url(https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
        >
          <img
            className="opacity-0 w-full h-full"
            src="https://pbs.twimg.com/profile_banners/2161323234/1585151401/600x200"
            alt=""
          />
        </div>
        <div className="p-4">
          <div className="relative flex w-full">
            {/* Avatar */}
            <div className="flex flex-1">
              <div style={{ marginTop: "-6rem" }}>
                <div
                  style={{ height: "9rem", width: "9rem" }}
                  className="md rounded-full relative avatar"
                >
                  <img
                    style={{ height: "9rem", width: "9rem" }}
                    className="md rounded-full relative border-4 border-gray-900"
                    src={userProfile?.photo ? userProfile?.photo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRZ2LKnnbxuvK6x0Sl7JXCKNFeHutaglqYUTagKR10NI4gy4B4rw_nVxiF9g8tHG3wM8&usqp=CAU"}
                    alt=""
                  />
                  <div className="absolute" />
                </div>
              </div>
            </div>
            <div className="flex flex-col text-right">
            <Link to={`/dashboard/updateprofile/${userProfile._id}`}> <button className="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring   max-w-max border bg-transparent border-blue-500 text-blue-500 hover:border-blue-800   items-center hover:shadow-lg font-bold py-2 px-4 rounded-full mr-0 ml-auto">
                Edit Profile
              </button></Link>
            </div>
          </div>
          <div className="space-y-1 justify-center w-full mt-3 ml-3">
            {/* User basic*/}
            <div>
              <h2 className="text-xl leading-6 font-bold ">
                {userProfile && userProfile?.name}{" "}
                {
                    isOwner ? <div className="badge badge-success gap-2">House Owner</div> : <div className="badge badge-success gap-2">House Renter</div>
                }
                
              </h2>
              <p className="text-sm leading-5 font-medium  mb-1">
                {userProfile && userProfile?.email}
              </p>
              <p className="text-sm leading-5 font-medium  mb-3">
               Phone: {userProfile && userProfile.phone ? userProfile.phone : 'Not Show'}
              </p>
            </div>
            {/* Description and others */}
            <div className="mt-4">
              <p className="leading-tight mb-2">
                Gender: {userProfile && userProfile.gender ? userProfile.gender : 'Not Show'}
              </p>
              <div className=" flex mb-4">
                <span className="flex mr-2">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 paint-icon">
                    <g>
                      <path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z" />
                      <circle cx="7.032" cy="8.75" r="1.285" />
                      <circle cx="7.032" cy="13.156" r="1.285" />
                      <circle cx="16.968" cy="8.75" r="1.285" />
                      <circle cx="16.968" cy="13.156" r="1.285" />
                      <circle cx={12} cy="8.75" r="1.285" />
                      <circle cx={12} cy="13.156" r="1.285" />
                      <circle cx="7.032" cy="17.486" r="1.285" />
                      <circle cx={12} cy="17.486" r="1.285" />
                    </g>
                  </svg>{" "}
                  <span className="leading-5 ml-1">Joined in {userProfile && userProfile.date ?  userProfile.date : '2023'}</span>
                </span>
              </div>
              <div>
                <span>Address: {userProfile && userProfile.address ?  userProfile.address : 'Not Show'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
