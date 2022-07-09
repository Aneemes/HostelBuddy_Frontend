import React, { Fragment } from "react";
import Layout from "../layout";
import SingleWishHostel from "./SingleWishHostel";

const WishList = () => {
  return (
    <Fragment>
      <Layout children={<SingleWishHostel />} />
    </Fragment>
  );
};

export default WishList;
