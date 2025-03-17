import { LOGIN_ADMIN } from "../action/login";

const initialState = {
  admin: null,
  accessToken: localStorage.getItem("accesstoken") || null,
  refreshToken: localStorage.getItem("refreshToken") || null,
  isLogged: false,
};

const loginReducers = (state = initialState, action) => {
    console.log(action);
  switch (action.type) {
    case LOGIN_ADMIN:
      localStorage.setItem("accesstoken", action.payload);
      localStorage.setItem("refreshToken", action.payload);
      return {
        ...state,
        accessToken: action.payload,
        refreshToken: action.payload,
      };
      default:
          return state
  }
};
export { loginReducers };
