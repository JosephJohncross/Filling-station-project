import axios from "axios";
import { displayNotifications } from "./helper";

// Create station - Admin/Signup page
export const createStation = async (
  name,
  latitude,
  longitude,
  email,
  password,
  licenseNumber,
  phoneNumber
) =>
  axios
    .post("https://lgfuel.onrender.com/api/accounts/create_station", {
      email: email,
      password: password,
      license_number: licenseNumber,
      name: name,
      longitude: longitude,
      latitude: latitude,
      phone_number: phoneNumber,
    })
    .then((response) => {
      return true;
      // displayNotifications("Station created successfuly");
    })
    .catch((error) => {
      return false;
      // displayNotifications("Operation Unsuccessful");
    });

// Get All staions
export const getStation = async (stationSlug) =>
  axios
    .get(`https://lgfuel.onrender.com/api/accounts/get_station/${stationSlug}`)
    .then((response) => {
      return response.data.station;
    })
    .catch((error) => {
      console.log(error.message);
    });

// Get All staions
export const getAllStatiions = async () =>
  axios
    .get("https://lgfuel.onrender.com/api/accounts/get_stations")
    .then((response) => {
      console.log(response.data.stations);
      return response.data.stations;
    })
    .catch((error) => {
      console.log(error.message);
    });

// Get All staions
export const getStatistics = async () =>
  axios
    .get("https://lgfuel.onrender.com/api/accounts/get_statistics")
    .then((response) => {
      console.log(response.data.statistics);
      return response.data.statistics;
    })
    .catch((error) => {
      console.log(error.message);
    });

// Get all users
export const geAllUsers = async () =>
  axios
    .get("https://lgfuel.onrender.com/api/accounts/get_users")
    .then((response) => {
      // console.log(response.data.users);
      return response.data.users;
    })
    .catch((error) => {
      console.log(error.message);
    });

// Create station - Admin/Signup page
export const verifyStation = async (userId) =>
  axios
    .patch(`https://lgfuel.onrender.com/api/station/verify_station/${userId}`, {
      user: userId,
    })
    .then((response) => {
      displayNotifications("Station verified");
      return true;
    })
    .catch((error) => {
      displayNotifications("Station not verified");
      return false;
    });

// Delete station
export const deleteStation = async (stationId) =>
  axios
    .delete(`https://lgfuel.onrender.com/api/accounts/delete_station`, {
      station_id: stationId,
    })
    .then((response) => {
      displayNotifications("Station deleted");
      return;
    })
    .catch((error) => {
      displayNotifications("Something went wrong");
      return false;
    });
