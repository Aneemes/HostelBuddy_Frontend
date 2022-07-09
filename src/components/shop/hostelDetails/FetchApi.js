import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;

export const getSingleHostel = async (pId) => {
  try {
    let res = await axios.post(`${apiURL}/api/hostel/single-hostel`, {
      pId: pId,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postAddReview = async (formData) => {
  try {
    let res = await axios.post(`${apiURL}/api/hostel/add-review`, formData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postDeleteReview = async (formData) => {
  try {
    let res = await axios.post(`${apiURL}/api/hostel/delete-review`, formData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
