import axios from "axios";
import { displayNotifications } from "./helper";

export const createReview = async (user, station, review) => {
  axios
    .post("https://lgfuel.onrender.com/api/review/create_review", {
      user: user,
      station: station,
      review: review,
    })
    .then((response) => {
      displayNotifications("Review made");
    })
    .catch((error) => {
      displayNotifications("Operation Unsuccessful");
    });
};

export const rateStation = (stationId, rating) =>
  axios
    .patch("https://lgfuel.onrender.com/api/station/give_rating", {
      station_id: stationId,
      rating: rating,
    })
    .then((response) => response.rating)
    .catch((error) => displayNotifications("Rating couldn't be given"));

export const getUserProfile = async (userId) =>
  axios
    .get(`https://lgfuel.onrender.com/api/accounts/get_user_profile/${userId}`)
    .then((response) => {
      // console.log(response.data.stations);
      return response.data.user_profile;
    })
    .catch((error) => {
      console.log(error.message);
    });

export const updateUserProfile = async (name, avatar, phone, userId) => {
  // console.log(dateOfBirth)
  axios
    .patch("https://lgfuel.onrender.com/api/accounts/update_user_profile", {
      username: name,
      avatar: avatar,
      phone: phone,
      user: userId,
    })
    .then(() => {
      displayNotifications("Profile update successful");
    })
    .catch((error) => {
      displayNotifications("Profile update not successful");
    });
};

export const getUserFavouriteStation = async (userId) =>
  axios
    .get(
      `https://lgfuel.onrender.com/api/station/get_favourite_station/${userId}`
    )
    .then((response) => {
      // console.log(response.data.stations);
      return response.data.favourite;
    })
    .catch((error) => {
      console.log(error.message);
    });

export const removeStationFromFavourites = async (station, user) =>
  axios
    .delete(
      `https://lgfuel.onrender.com/api/station/remove_station_from_favourite/${station}/${user}`
    )
    .then((response) => {
      return response.message;
    })
    .catch((error) => {
      return error.error;
    });

export const createUser = async (email, password, username, phoneNumber) =>
  axios
    .post("https://lgfuel.onrender.com/api/accounts/create_user", {
      email: email,
      password: password,
      username: username,
      phone_number: phoneNumber,
    })
    .then((response) => {
      displayNotifications("User created successfuly");
      return true;
    })
    .catch((error) => {
      displayNotifications("User with email already exist");
      return false;
    });
