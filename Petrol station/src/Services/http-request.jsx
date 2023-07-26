import axios from "axios";

export const getWithAuthorization = async (params) => {
  let response = axios.get(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer" + String(authTokens.access),
    },
    signal: controller.signal,
  });

  let result = (await response).data;
  return result;
};

// Generic Post data with authorization
export const postWithAuthorization = async (params) => {
  let { body, url, authTokens, logoutUser } = params;

  let response = axios.post(url, body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer" + String(authTokens.access),
    },
    signal: controller.signal,
  });

  if ((await response).status === 200) {
    return (await response).statusText;
  } else if ((await response).statusText === "Unauthorized") {
    logoutUser();
  } else {
    return (await response).statusText;
  }
};

//Generic Patch request with authentication
export const patchWithAuthorization = async (params) => {
  let { body, url, authTokens } = params;

  let response = axios.patch(url, body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer" + String(authTokens.access),
    },
    signal: controller.signal,
  });

  let result = (await response).data;
  return result;
};


export const deleteWithAuthorization = async (params) => {
  let { body, url, authTokens } = params;

  let response = axios.delete(url, body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer" + String(authTokens.access),
    },
    signal: controller.signal,
  });

  let result = (await response).data;
  return result;
};
