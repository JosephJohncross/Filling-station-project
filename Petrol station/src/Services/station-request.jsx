import axios from "axios";
import { displayNotifications } from "./helper";

export const setStationOpenStatus = (openStatus, userId) =>
  axios
    .patch("https://lgfuel.onrender.com/api/station/set_open_status", {
      is_open: openStatus,
      user: userId,
    })
    .then((response) => {
      displayNotifications("Status set");
      return response.data;
    })
    .catch((error) => {
      displayNotifications("Operation Unsuccessful");
    });

export const getStationProfile = async (stationId) =>
  axios
    .get(
      `https://lgfuel.onrender.com/api/accounts/get_station_dashboard_profile/${stationId}`
    )
    .then((response) => {
      // console.log(response.data.stations);
      return response.data.profile;
    })
    .catch((error) => {
      console.log(error.message);
    });

// Update staff details - Admin
export const updateStationProfile = async (
  name,
  operationTime,
  phone,
  userId,
  address
) => {
  // console.log(dateOfBirth)
  axios
    .patch("https://lgfuel.onrender.com/api/station/update_station_profile", {
      name: name,
      operation_time: operationTime,
      phone: phone,
      user_id: userId,
      address: address,
    })
    .then(() => {
      displayNotifications("Profile update successful");
    })
    .catch((error) => {
      displayNotifications("Profile update not successful");
    });
};

export const updateFuelProducts = async (
  petrolPrice,
  kerosenePrice,
  dieselPrice,
  userId
) => {
  // console.log(dateOfBirth)
  axios
    .patch("https://lgfuel.onrender.com/api/station/update_fuel_products", {
      petrol_price: petrolPrice,
      kerosene_price: kerosenePrice,
      diesel_price: dieselPrice,
      user_id: userId,
    })
    .then((response) => {
      displayNotifications("Profile update successful");
    })
    .catch((error) => {
      displayNotifications("Profile update not successful");
    });
};
