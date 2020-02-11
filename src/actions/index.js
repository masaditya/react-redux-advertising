import Axios from "axios";
import bcrypt from "brcypt";

export const userLogin = values => {
  const response = Axios.post("url/login", { ...values });
  const token = response.token;
  localStorage.setItem("token_user", token);
  return {
    type: "USER_LOGIN",
    payload: response
  };
};

export const userLogout = () => {
  localStorage.removeItem("token_user");
  window.location.reload();
  return {
    type: "USER_LOGOUT",
    payload: {}
  };
};

export const setUser = token => {
  let user = {};
  bcrypt.verify("hash", token).then(result => {
    console.log(result);
    user = result;
  });
  return {
    type: "SET_USER",
    payload: user
  };
};

export const setAge = age => {
  return {
    type: "SET_AGE",
    payload: age
  };
};
