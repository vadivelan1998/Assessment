import { ADD, GETUSER } from "./userAction";

var init = {
  user: [],
};

export const userReducer = (store = init, { type, payload }) => {
  switch (type) {
    case GETUSER:
      return { ...store, user: payload };
      case ADD:
        return {...store,user:[...store.user,payload]}
    default:
      return { ...store };
  }
};
