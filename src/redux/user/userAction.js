import axios from "axios";

export const ADDCOUNTRY = "ADDCOUNTRY";
export const GETUSER = "GETUSER";
export const ADD="ADD"
export const addUser = (val) => {
  return {
    type: GETUSER,
    payload: val,
  };
};
export const add=(val)=>{
  return {
    type: ADD,
    payload:val
  }
}

export const getUser = () => async (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => dispatch(addUser(res.data)));
};
