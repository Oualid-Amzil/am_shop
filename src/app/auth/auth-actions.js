import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { uiActions } from "../uiSlice";
import { authActions } from "./authSlice";
import { moduleActions } from "../../app/moduleSlice";
import { auth, googleProvider, facebookProvider } from "../../firebase";

const PROJECT_KEY = process.env.REACT_APP_PROJECT_KEY;

let timer;

export const signUp = (email, password, userName, navigate) => {
  return async (dispatch) => {
    dispatch(uiActions.error(null));
    dispatch(uiActions.isLoading(true));
    try {
      const response = await axios({
        method: "post",
        url: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${PROJECT_KEY}`,
        data: {
          displayName: userName,
          email: email,
          password: password,
          returnSecureToken: true,
        },
      });

      dispatch(
        authActions.authentication({
          token: response.data.idToken,
          userId: response.data.localId,
          userName: response.data.displayName,
          expirationTime: parseInt(response.data.expiresIn) * 1000,
          isAuthenticated: true,
        })
      );

      const expirationDate =
        new Date().getTime() + parseInt(response.data.expiresIn) * 1000;

      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          token: response.data.idToken,
          userId: response.data.localId,
          expirationDate,
          isAuthenticated: true,
          userName: response.data.displayName,
        })
      );

      timer = setTimeout(() => {
        localStorage.removeItem("userInfo");
        dispatch(authActions.logout());
      }, parseInt(response.data.expiresIn) * 1000);

      dispatch(uiActions.isLoading(false));
      dispatch(moduleActions.hideAuthHandler(false));
      navigate("/home");
    } catch (err) {
      const errorId = err.response.data.error.message;
      let message = "Something went wrong!";
      if (errorId === "EMAIL_EXISTS") {
        message = "The email address is already in use by another account.!";
      }
      dispatch(uiActions.error(message));
      dispatch(uiActions.isLoading(false));
    }
  };
};

export const signIn = (email, password, navigate) => {
  return async (dispatch) => {
    dispatch(uiActions.error(null));
    dispatch(uiActions.isLoading(true));
    try {
      const response = await axios({
        method: "post",
        url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${PROJECT_KEY}`,
        data: {
          email: email,
          password: password,
          returnSecureToken: true,
        },
      });

      dispatch(
        authActions.authentication({
          token: response.data.idToken,
          userId: response.data.localId,
          userName: response.data.displayName,
          expirationTime: parseInt(response.data.expiresIn) * 1000,
          isAuthenticated: true,
        })
      );

      const expirationDate =
        new Date().getTime() + parseInt(response.data.expiresIn) * 1000;

      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          token: response.data.idToken,
          userId: response.data.localId,
          userName: response.data.displayName,
          expirationDate,
          isAuthenticated: true,
        })
      );

      timer = setTimeout(() => {
        localStorage.removeItem("userInfo");
        dispatch(authActions.logout());
      }, parseInt(response.data.expiresIn) * 1000);

      dispatch(uiActions.isLoading(false));
      dispatch(moduleActions.hideAuthHandler(false));
      navigate("/home");
    } catch (err) {
      const errorId = err.response.data.error.message;
      console.log(errorId);
      let message = "Something went wrong!";
      if (errorId === "INVALID_LOGIN_CREDENTIALS") {
        message = "Either the email or password are incorrect!";
      }
      dispatch(uiActions.error(message));
      dispatch(uiActions.isLoading(false));
    }
  };
};

export const Logout = (navigate) => {
  return async (dispatch) => {
    clearTimeout(timer);
    localStorage.removeItem("userInfo");
    dispatch(authActions.logout());
    navigate("/home");
  };
};

export const signInWithGoogle = (navigate) => {
  return async (dispatch) => {
    try {
      const response = await signInWithPopup(auth, googleProvider);
      dispatch(
        authActions.authentication({
          token: response._tokenResponse.idToken,
          userId: response._tokenResponse.localId,
          userName: response._tokenResponse.displayName,
          expirationTime: parseInt(response._tokenResponse.expiresIn) * 1000,
          isAuthenticated: true,
        })
      );

      const expirationDate =
        new Date().getTime() +
        parseInt(response._tokenResponse.expiresIn) * 1000;

      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          token: response._tokenResponse.idToken,
          userId: response._tokenResponse.localId,
          userName: response._tokenResponse.displayName,
          expirationDate,
          isAuthenticated: true,
        })
      );

      timer = setTimeout(() => {
        localStorage.removeItem("userInfo");
        dispatch(authActions.logout());
      }, parseInt(response._tokenResponse.expiresIn) * 1000);

      dispatch(moduleActions.hideAuthHandler(false));
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };
};

export const signInWithFacebook = (navigate) => {
  return async (dispatch) => {
    try {
      const response = await signInWithPopup(auth, facebookProvider);
      dispatch(
        authActions.authentication({
          token: response._tokenResponse.idToken,
          userId: response._tokenResponse.localId,
          userName: response._tokenResponse.displayName,
          expirationTime: parseInt(response._tokenResponse.expiresIn) * 1000,
          isAuthenticated: true,
        })
      );

      const expirationDate =
        new Date().getTime() +
        parseInt(response._tokenResponse.expiresIn) * 1000;

      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          token: response._tokenResponse.idToken,
          userId: response._tokenResponse.localId,
          userName: response._tokenResponse.displayName,
          expirationDate,
          isAuthenticated: true,
        })
      );

      timer = setTimeout(() => {
        localStorage.removeItem("userInfo");
        dispatch(authActions.logout());
      }, parseInt(response._tokenResponse.expiresIn) * 1000);

      dispatch(moduleActions.hideAuthHandler(false));
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };
};
