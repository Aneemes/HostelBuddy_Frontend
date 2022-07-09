import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;

const BearerToken = () =>
  localStorage.getItem("jwt")
    ? JSON.parse(localStorage.getItem("jwt")).token
    : false;
const Headers = () => {
  return {
    headers: {
      token: `Bearer ${BearerToken()}`,
    },
  };
};

export const getAllLocation = async () => {
  try {
    let res = await axios.get(`${apiURL}/api/location/all-location`, Headers());
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const createLocation = async ({
  cName,
  cImage,
  cDescription,
  cStatus,
}) => {
  let formData = new FormData();
  formData.append("cImage", cImage);
  formData.append("cName", cName);
  formData.append("cDescription", cDescription);
  formData.append("cStatus", cStatus);

  try {
    let res = await axios.post(
      `${apiURL}/api/location/add-location`,
      formData,
      Headers()
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const editLocation = async (cId, des, status) => {
  let data = { cId: cId, cDescription: des, cStatus: status };
  try {
    let res = await axios.post(
      `${apiURL}/api/location/edit-location`,
      data,
      Headers()
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteLocation = async (cId) => {
  try {
    let res = await axios.post(
      `${apiURL}/api/location/delete-location`,
      { cId },
      Headers()
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
