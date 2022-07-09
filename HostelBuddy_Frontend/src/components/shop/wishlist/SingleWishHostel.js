import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { wishListHostels } from "./FetchApi";
const apiURL = process.env.REACT_APP_API_URL;

const Hostel = () => {
  const history = useHistory();
  const [hostels, setHostels] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    let responseData = await wishListHostels();
    setTimeout(() => {
      if (responseData && responseData.Hostels) {
        setHostels(responseData.Hostels);
        setLoading(false);
      }
    }, 50);
  };

  const removeFromWishList = (id) => {
    let list = localStorage.getItem("wishList")
      ? JSON.parse(localStorage.getItem("wishList"))
      : [];
    if (list.length > 0) {
      if (list.includes(id) === true) {
        list.splice(list.indexOf(id), 1);
        localStorage.setItem("wishList", JSON.stringify(list));
        fetchData();
      }
    }
  };
  if (loading) {
    return (
      <div className="my-32 text-2xl text-center">
        No hostel found in wishList
      </div>
    );
  }
  return (
    <Fragment>
      <div className="grid grid-cols-2 md:grid-cols-1">
        {hostels.length > 0 ? (
          hostels.map((hostel, index) => {
            return (
              <div
                key={index}
                className="relative m-2 md:py-6 md:border-t md:border-b md:my-2 md:mx-0 col-span-1 md:flex md:items-center md:justify-between"
              >
                <div className="md:w-1/2 md:flex md:items-center">
                  <img
                    onClick={(e) => history.push(`/hostels/${hostel._id}`)}
                    className="cursor-pointer md:h-20 md:w-20 object-cover object-center"
                    src={`${apiURL}/uploads/hostels/${hostel.pImages[0]}`}
                    alt="wishListhostel"
                  />
                  <div className="text-lg md:ml-6 truncate">
                    {hostel.pName}
                  </div>
                </div>
                <div className="md:w-1/2 md:flex md:items-center md:justify-around">
                  <div className="font-semibold text-gray-600">
                    ${hostel.pPrice}.00
                  </div>
                  {hostel.pQuantity > 0 ? (
                    <div className="text-green-500 my-1 md:my-0">Booking Available</div>
                  ) : (
                    <div className="text-red-500 my-1 md:my-0">No further bookings</div>
                  )}

                  <div
                    style={{ background: "#303031" }}
                    onClick={(e) => history.push(`/hostels/${hostel._id}`)}
                    className="inline-block px-4 py-2 text-white text-xs md:text-base text-center cursor-pointer hover:opacity-75"
                  >
                    View
                  </div>
                </div>
                <div className="absolute top-0 right-0 mx-2 my-2 md:relative">
                  <svg
                    onClick={(e) => removeFromWishList(hostel._id)}
                    className="w-6 h-6 cursor-pointer"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            );
          })
        ) : (
          <div>No hostel found in wishList</div>
        )}
      </div>
    </Fragment>
  );
};

const SingleWishHostel = (props) => {
  return (
    <Fragment>
      <section className="mx-4 mt-20 md:mx-12 md:mt-32 lg:mt-24">
        <div className="text-2xl mx-2 mb-6">Wishlist</div>
        {/* Hostel List */}
        <Hostel />
      </section>
    </Fragment>
  );
};

export default SingleWishHostel;