import axios from "axios";

export const createReview = async (user, station, review) => {
  axios
    .post("http://127.0.0.1:8000/api/review/create_review", {
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
