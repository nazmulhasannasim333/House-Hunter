import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useOwner from "../../../hooks/useOwner";
import { AuthContext } from "../../../providers/AuthProvider";

const Houses = () => {
  const [houses, setHouses] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);
  const [seachText, setsearchText] = useState("");

  // get user booking house
  useEffect(() => {
    axios.get(`http://localhost:5000/mybooking/${user?.email}`).then(
      (res) => {
        setBooking(res.data);
      },
      [user]
    );
  });

  //   handler for searching
  const handleSearchText = () => {
    fetch(`http://localhost:5000/housesearch/${seachText}`)
      .then((res) => res.json())
      .then((data) => {
        setHouses(data);
      });
  };
  //   "Enter key press to search"
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearchText();
    }
  };

  //   Check House Owner
  const [isOwner] = useOwner();

  //   Booking
  const handleBooking = () => {
    if (!user) {
      Swal.fire({
        title:
          "Please Login to select the apartment or you have already finished your booking limit",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  //   get all house
  useEffect(() => {
    axios.get("http://localhost:5000/houses").then((res) => {
      setHouses(res.data);
    });
  }, []);

  return (
    <div className="max-w-6xl lg:mx-auto mx-4 mt-14">
      <div className="lg:flex justify-between items-center py-14">
        <div className="flex items-center  lg:w-1/4 w-full">
          <input
            onChange={(e) => setsearchText(e.target.value)}
            onKeyDown={handleKeyPress}
            type="text"
            className="w-full border text-black p-2 lg:p-3 rounded-l-md focus:outline-none"
            placeholder="Search House"
          />

          <button
            onClick={handleSearchText}
            type="submit"
            className="bg-green-600 text-white px-4 py-2 lg:px-5 lg:py-3 rounded-r-md hover:opacity-90"
          >
            Search
          </button>
        </div>
        <div className="lg:py-0 py-4">
          <select className="select select-success w-full max-w-xs">
            <option disabled selected>
              Choose City
            </option>
            <option value="Pabna">Pabna</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Khulna">Khulna</option>
            <option value="Chittagong">Chittagong</option>
          </select>
        </div>
        <div className="lg:py-0 py-4">
          <select className="select select-success w-full max-w-xs">
            <option disabled selected>
              Select Bedrooms
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="lg:py-0 py-4">
          <select className="select select-success w-full max-w-xs">
            <option disabled selected>
              Select Bathroom
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="lg:py-0 py-4">
          <select className="select select-success w-full max-w-xs">
            <option disabled selected>
              Select Room Size
            </option>
            <option value="800">800 sq ft</option>
            <option value="900">800 sq ft</option>
            <option value="1000">1000 sq ft</option>
          </select>
        </div>
      </div>
      <div className="grid gap-6 mb-8 lg:grid-cols-3 sm:grid-cols-1">
        {houses.map((house) => (
          <div key={house._id}>
            <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl">
              <img
                src={house.picture}
                alt="house cover"
                className="object-cover w-full "
                style={{ height: "430px" }}
              />
              <div className="bg-black h-full px-6 py-4 bg-opacity-80 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200 flex flex-col">
                <p className="font-semibold text-2xl">{house.house_name}</p>
                <br />
                <p>
                  Address:{" "}
                  <span className="font-semibold">{house.address}</span>
                </p>
                <p>
                  City: <span className="font-semibold">{house.city}</span>
                </p>
                <p>
                  Bedrooms:{" "}
                  <span className="font-semibold">{house.bedrooms}</span>
                </p>
                <p>
                  Bathrooms:{" "}
                  <span className="font-semibold">{house.bathrooms}</span>
                </p>
                <p>
                  Room Size:{" "}
                  <span className="font-semibold">{house.room_size}</span>
                </p>
                <p>
                  Availability Date:{" "}
                  <span className="font-semibold">
                    {house.availability_date}
                  </span>
                </p>
                <p>
                  Phone Number:{" "}
                  <span className="font-semibold">{house.phone_number}</span>
                </p>
                <p>
                  Description:{" "}
                  <span className="font-semibold">{house.description}</span>
                </p>
                <br />
                <p>
                  Rent per month:{" "}
                  <span className="font-semibold text-xl">
                    ${house.rent_per_month}
                  </span>
                </p>
                <Link to={user && `/booking/${house._id}`}>
                  <button
                    onClick={handleBooking}
                    disabled={isOwner || booking?.length >= 2}
                    className="btn bg-green-500 border-0 absolute bottom-5 w-2/4 "
                  >
                    Book House
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Houses;
