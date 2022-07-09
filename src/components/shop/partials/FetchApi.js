import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;

export const cartListHostel = async () => {
  let carts = JSON.parse(localStorage.getItem("cart"));
  let hostelArray = [];
  if (carts) {
    for (const cart of carts) {
      hostelArray.push(cart.id);
    }
  }
  try {
    let res = await axios.post(`${apiURL}/api/hostel/cart-hostel`, {
      hostelArray,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
