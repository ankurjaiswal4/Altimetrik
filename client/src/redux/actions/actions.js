export const ActionTypes = {
  SET_USER: "SET_USER",
  REMOVE_USER: "REMOVE_USER",
};

export const setUser = (payload) => {
  return {
    type: ActionTypes.SET_USER,
    payload: payload,
  };
};

export const removeUser = () => {
  return {
    type: ActionTypes.REMOVE_USER,
  };
};
