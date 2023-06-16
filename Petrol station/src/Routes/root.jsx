import React, {} from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Root = () => {
  const getRootUrl = () => {
    let url = useNavigate()
    return url;
  };

  const url = getRootUrl();

  return <Navigate to={`${url}`} />;
};

export default Root;
