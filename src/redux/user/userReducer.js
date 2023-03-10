import { GETUSER } from "./userAction";

var init = {
  user: [],
};

export const userReducer = (store = init, { type, payload }) => {
  switch (type) {
    case GETUSER:
      return { ...store, user: payload };
    default:
      return { ...store };
  }
};
