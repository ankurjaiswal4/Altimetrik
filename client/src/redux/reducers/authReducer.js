import { API, setAuthHeader } from "../../services/network";
import { ActionTypes } from "../actions/actions";

const initialState = {
  authenticated: localStorage.getItem("usertoken") ? true : false,
}; // id: 1, name: "Test1", email: "a@a.com", avatarUrl: ""

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      setAuthHeader();
      return action.payload;
    case ActionTypes.REMOVE_USER:
      localStorage.removeItem("usertoken");
      return { ...state, authenticated: false };
    default:
      return state;
  }
};

export default authReducer;
