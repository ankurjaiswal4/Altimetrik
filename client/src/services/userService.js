import { API } from "./network";

export const signUp = (newUser) => {
  return API.post("users/register", {
    firstName: newUser.firstName,
    lastName: newUser.lastName,
    email: newUser.email,
    password: newUser.password,
    username: newUser.username,
  }).then((response) => {
    console.log("Registered");
  });
};

export const login = (user) => {
  return API.post("users/login", {
    email: user.email,
    password: user.password,
  })
    .then((response) => {
      localStorage.setItem("usertoken", response.data.token);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchUserDetails = (email) => {
  return API.get("users/userDetails", {
    email: email,
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
