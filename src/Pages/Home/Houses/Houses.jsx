import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Houses = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch(
      "https://chef-legend-server-nazmulhasannasim333.vercel.app/chefCategories"
    )
      .then((res) => res.json())
      .then((data) => setHouses(data));
  }, []);

  return (
    <div className="max-w-6xl lg:mx-auto mx-4 mt-14">
      <div className="lg:flex justify-between items-center py-14">
        <div className="flex items-center  lg:w-1/4 w-full">
          <input
            // onChange={(e) => setsearchText(e.target.value)}
            // onKeyDown={handleKeyPress}
            type="text"
            className="w-full border text-black p-2 lg:p-3 rounded-l-md focus:outline-none"
            placeholder="Search House"
          />

          <button
            // onClick={handleSearchText}
            type="submit"
            className="bg-indigo-500 text-white px-4 py-2 lg:px-5 lg:py-3 rounded-r-md hover:opacity-90"
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
              Select Bathrooms
            </option>
            <option value="Attach">Attach</option>
            <option value="Not Attach">Not Attach</option>
          </select>
        </div>
        <div className="lg:py-0 py-4">
          <select className="select select-success w-full max-w-xs">
            <option disabled selected>
              Select Room Size
            </option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>
      </div>
      <div className="grid gap-6 mb-8 lg:grid-cols-3 sm:grid-cols-1">
        {houses.map((house) => (
          <div key={house.id}>
            <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl">
              <img
                src={house.chefPicture}
                alt="book cover"
                className="object-cover w-full "
                style={{ height: "430px" }}
              />
              <div className="bg-black h-full px-6 py-12 bg-opacity-80 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200 flex flex-col">
                <p className="font-semibold text-2xl">{house.chefName}</p>
                <br />
                <p>
                  Experiance:{" "}
                  <span className="font-semibold">
                    {house.YearOfexperiences}
                  </span>
                </p>
                <br />
                <p>
                  Total Likes:{" "}
                  <span className="font-semibold">{house.like}</span>
                </p>
                <br />
                <Link>
                  <button className="btn bg-green-500 border-0 absolute bottom-5 w-full left-0 ">
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
