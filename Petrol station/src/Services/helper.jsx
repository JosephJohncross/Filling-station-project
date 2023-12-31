import { toast } from "react-toastify";

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

export const stationDummyData = [
  {
    name: "Uniuyo Filling Station",
    licenseNo: "12AD456",
    dateRegistered: `${day}-${month}-${year}`,
    email: "fillingstation@gamil.com",
    status: "open",
    address: "Uniuyo permsite",
    verified: false,
  },
  {
    name: "Metalbot Filling Station",
    licenseNo: "12AD456",
    dateRegistered: `${day}-${month}-${year}`,
    email: "metalbot@gamil.com",
    status: "open",
    address: "85 Nwaniba Rd, 520101, Uyo, Akwa Ibom",
    verified: true,
  },
  {
    name: "Maxt Station",
    licenseNo: "15AER456",
    dateRegistered: `${day}-${month}-${year}`,
    email: "maxt@gamil.com",
    status: "open",
    address: "85 Nwaniba Rd, 520101, Uyo, Akwa Ibom",
    verified: true,
  },
  {
    name: "Pirhana Station",
    licenseNo: "15A8RE",
    dateRegistered: `${day}-${month}-${year}`,
    email: "ken@gamil.com",
    status: "closed",
    address: "85 Nwaniba Rd, 520101, Uyo, Akwa Ibom",
    verified: false,
  },
  {
    name: "KEN-JEFF Station",
    licenseNo: "15AER456",
    dateRegistered: `${day}-${month}-${year}`,
    email: "ken@gamil.com",
    status: "open",
    address: "85 Nwaniba Rd, 520101, Uyo, Akwa Ibom",
    verified: true,
  },
  {
    name: "Bendoma Station",
    licenseNo: "15AER456",
    dateRegistered: `${day}-${month}-${year}`,
    email: "bred@gamil.com",
    status: "open",
    address: "85 Nwaniba Rd, 520101, Uyo, Akwa Ibom",
    verified: false,
  },
  {
    name: "KEN-JEFF Station",
    licenseNo: "15AER456",
    dateRegistered: `${day}-${month}-${year}`,
    email: "ken@gamil.com",
    status: "closed",
    address: "85 Nwaniba Rd, 520101, Uyo, Akwa Ibom",
    verified: true,
  },
];

export const userDummyData = [
  {
    name: "Lawrenz001",
    dateRegistered: "13-07-2023",
    phone: "07025365421",
    email: "myemailaddress.com",
  },
  {
    name: "Lawrenz001",
    dateRegistered: "13-07-2023",
    phone: "07025365421",
    email: "myemailaddress.com",
  },
  {
    name: "Lawrenz001",
    dateRegistered: "13-07-2023",
    phone: "07025365421",
    email: "myemailaddress.com",
  },
  {
    name: "Lawrenz001",
    dateRegistered: "13-07-2023",
    phone: "07025365421",
    email: "myemailaddress.com",
  },
  {
    name: "Lawrenz001",
    dateRegistered: "13-07-2023",
    phone: "07025365421",
    email: "myemailaddress.com",
  },
  {
    name: "Lawrenz001",
    dateRegistered: "13-07-2023",
    phone: "07025365421",
    email: "myemailaddress.com",
  },
  {
    name: "Lawrenz001",
    dateRegistered: "13-07-2023",
    phone: "07025365421",
    email: "myemailaddress.com",
  },
  {
    name: "Lawrenz001",
    dateRegistered: "13-07-2023",
    phone: "07025365421",
    email: "myemailaddress.com",
  },
];

//Displays notification upon user action
export const displayNotifications = (message) => {
  notify(message);
};
//Service that handles notifcations
const notify = (message) => toast(message);

export const formatDate = (unformattedDate) => {
  const formattedDate = new Date(unformattedDate).toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return formattedDate;
};

export const checkCurrentLocation = (path) => {
  if (
    path == "/user/dashboard" ||
    path == "/station/dashboard" ||
    path == "/admin/dashboard"
  ) {
    console.log("caught in the act")
    return true;
  } else {
    return false;
  }
};
