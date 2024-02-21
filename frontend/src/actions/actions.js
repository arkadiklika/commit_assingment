import { SAVE_USER_DATA, FETCH_USER_DATA } from "./actionTypes";

export const saveUserData = (userData) => {
  return {
    type: SAVE_USER_DATA,
    payload: userData,
  };
};

export const fetchUserData = () => {
  return {
    type: FETCH_USER_DATA,
  };
};
