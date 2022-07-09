import React, { Fragment } from "react";
import Layout from "../layout";
import { CheckoutComponent } from "./CheckoutHostels";

const CheckoutPage = (props) => {
  return (
    <Fragment>
      <Layout children={<CheckoutComponent />} />
    </Fragment>
  );
};

export default CheckoutPage;
