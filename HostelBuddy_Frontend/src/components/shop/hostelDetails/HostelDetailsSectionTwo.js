import React, { Fragment, useContext, useEffect, useState } from "react";
import AllReviews from "./AllReviews";
import ReviewForm from "./ReviewForm";

import { HostelDetailsContext } from ".";
import { LayoutContext } from "../layout";

import { isAuthenticate } from "../auth/fetchApi";

import "./style.css";

const Menu = () => {
  const { data, dispatch } = useContext(HostelDetailsContext);
  const { data: layoutData } = useContext(LayoutContext);

  return (
    <Fragment>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div
          onClick={(e) => dispatch({ type: "menu", payload: true })}
          className={`${
            data.menu ? "border-b-2 border-yellow-700" : ""
          } px-4 py-3 cursor-pointer`}
        >
          Description
        </div>
        <div
          onClick={(e) => dispatch({ type: "menu", payload: false })}
          className={`${
            !data.menu ? "border-b-2 border-yellow-700" : ""
          } px-4 py-3 relative flex cursor-pointer`}
        >
          <span>Reviews</span>
          <span className="absolute text-xs top-0 right-0 mt-2 bg-yellow-700 text-white rounded px-1">
            {layoutData.singleHostelDetail.pRatingsReviews.length}
          </span>
        </div>
      </div>
    </Fragment>
  );
};

const RatingReview = () => {
  return (
    <Fragment>
      <AllReviews />
      {isAuthenticate() ? (
        <ReviewForm />
      ) : (
        <div className="mb-12 md:mx-16 lg:mx-20 xl:mx-24 bg-red-200 px-4 py-2 rounded mb-4">
          You need to login in for review
        </div>
      )}
    </Fragment>
  );
};

const HostelDetailsSectionTwo = (props) => {
  const { data } = useContext(HostelDetailsContext);
  const { data: layoutData } = useContext(LayoutContext);
  const [singleHostel, setSinglehostel] = useState({});

  useEffect(() => {
    setSinglehostel(
      layoutData.singleHostelDetail ? layoutData.singleHostelDetail : ""
    );
  }, []);

  return (
    <Fragment>
      <section className="m-4 md:mx-12 md:my-8">
        <Menu />
        {data.menu ? (
          <div className="mt-6">{singleHostel.pDescription}</div>
        ) : (
          <RatingReview />
        )}
      </section>
      <div className="m-4 md:mx-8 md:my-6 flex justify-center capitalize font-light tracking-widest bg-white border-t border-b text-gray-800 px-4 py-4 space-x-4">
        <div>
          <span>Location :</span>
          <span className="text-sm text-gray-600">
            {" "}
            {singleHostel.pLocation ? singleHostel.pLocation.cName : ""}
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default HostelDetailsSectionTwo;
