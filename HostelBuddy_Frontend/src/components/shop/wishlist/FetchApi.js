import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;

export const wishListHostels = async () => {
  let hostelArray = JSON.parse(localStorage.getItem("wishList"));
  try {
    let res = await axios.post(`${apiURL}/api/hostel/wish-hostel`, {
      hostelArray,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
