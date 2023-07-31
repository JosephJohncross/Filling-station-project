import axios from "axios";
import { displayNotifications } from "./helper";

// Create station - Admin/Signup page
export const createStation = async (
  name,
  latitude,
  longitude,
  email,
  password,
  licenseNumber
) => {
  axios
    .post("http://127.0.0.1:8000/api/accounts/create_station", {
      email: email,
      password: password,
      license_number: licenseNumber,
      name: name,
      longitude: longitude,
      latitude: latitude,
    })
    .then((response) => {
      displayNotifications("Station created successfuly");
    })
    .catch((error) => {
      displayNotifications("Operation Unsuccessful");
    });
};

// Get All staions
export const getStation = async (stationSlug) =>
  axios
    .get(`http://127.0.0.1:8000/api/accounts/get_station/${stationSlug}`)
    .then((response) => {
      return response.data.station;
    })
    .catch((error) => {
      console.log(error.message);
    });

// Get All staions
export const getAllStatiions = async () =>
  axios
    .get("http://127.0.0.1:8000/api/accounts/get_stations")
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
    .get("http://127.0.0.1:8000/api/accounts/get_statistics")
    .then((response) => {
      console.log(response.data.statistics);
      return response.data.statistics;
    })
    .catch((error) => {
      console.log(error.message);
    });

