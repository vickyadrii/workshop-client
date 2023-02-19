import { getAccessTokenCookie } from "../../utils/cookie";

export const onRequest = (config) => {
  config.headers = {
    "token": `${getAccessTokenCookie()}`,
    "Content-Type": "application/json",
  };
  return config;
};

export const onRequestError = (error) => {
  return Promise.reject(error.response);
};

export const onResponse = (response) => {
  return response.data;
};

export const onResponseError = (error) => {
  return Promise.reject(error.response);
};
