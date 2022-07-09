import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;

export const getAllHostel = async () => {
  try {
    let res = await axios.get(`${apiURL}/api/hostel/all-hostel`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const createPorductImage = async ({ pImage }) => {
  /* Most important part for uploading multiple image  */
  let formData = new FormData();
  for (const file of pImage) {
    formData.append("pImage", file);
  }
  /* Most important part for uploading multiple image  */
};

export const createHostel = async ({
  pName,
  pDescription,
  pImage,
  pStatus,
  pLocation,
  pQuantity,
  pPrice,
  pOffer,
}) => {
  /* Most important part for uploading multiple image  */
  let formData = new FormData();
  for (const file of pImage) {
    formData.append("pImage", file);
  }
  /* Most important part for uploading multiple image  */
  formData.append("pName", pName);
  formData.append("pDescription", pDescription);
  formData.append("pStatus", pStatus);
  formData.append("pLocation", pLocation);
  formData.append("pQuantity", pQuantity);
  formData.append("pPrice", pPrice);
  formData.append("pOffer", pOffer);

  try {
    let res = await axios.post(`${apiURL}/api/hostel/add-hostel`, formData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const editHostel = async (hostel) => {
  console.log(hostel);
  /* Most important part for updating multiple image  */
  let formData = new FormData();
  if (hostel.pEditImages) {
    for (const file of hostel.pEditImages) {
      formData.append("pEditImages", file);
    }
  }
  /* Most important part for updating multiple image  */
  formData.append("pId", hostel.pId);
  formData.append("pName", hostel.pName);
  formData.append("pDescription", hostel.pDescription);
  formData.append("pStatus", hostel.pStatus);
  formData.append("pLocation", hostel.pLocation._id);
  formData.append("pQuantity", hostel.pQuantity);
  formData.append("pPrice", hostel.pPrice);
  formData.append("pOffer", hostel.pOffer);
  formData.append("pImages", hostel.pImages);

  try {
    let res = await axios.post(`${apiURL}/api/hostel/edit-hostel`, formData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteHostel = async (pId) => {
  try {
    let res = await axios.post(`${apiURL}/api/hostel/delete-hostel`, { pId });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const hostelByLocation = async (catId) => {
  try {
    let res = await axios.post(`${apiURL}/api/hostel/hostel-by-location`, {
      catId,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const hostelByPrice = async (price) => {
  try {
    let res = await axios.post(`${apiURL}/api/hostel/hostel-by-price`, {
      price,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
