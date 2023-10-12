import React, { useState, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { isEmpty, isEmail } from "validator";
import { signIn, signUp } from "../../app/auth/auth-actions";

import Loader from "../UI/Loader";
import "animate.css";
import "./EmailPasswordLogIn.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        ...state,
        value: action.value,
        valid: action.valid,
      };

    case "INPUT_BLUR":
      return {
        ...state,
        touched: action.value,
      };

    default:
      return state;
  }
};

const EmailPasswordLogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, setLogin] = useState(true);
  const isLoading = useSelector((state) => state.ui.isLoading);
  const errorMessage = useSelector((state) => state.ui.errorMessage);

  const [userNameState, userNameDispatch] = useReducer(inputReducer, {
    value: "",
    valid: false,
    touched: false,
  });

  const [emailState, emailDispatch] = useReducer(inputReducer, {
    value: "",
    valid: false,
    touched: false,
  });
  const [passwordState, passwordDispatch] = useReducer(inputReducer, {
    value: "",
    valid: false,
    touched: false,
  });
  const [cmPasswordState, cmPasswordDispatch] = useReducer(inputReducer, {
    value: "",
    valid: false,
    touched: false,
  });

  const userNameChangeHandler = (text) => {
    let isValid = true;
    if (isEmpty(text) || text.length < 3) {
      isValid = false;
    }
    userNameDispatch({ type: "INPUT_CHANGE", value: text, valid: isValid });
  };

  const emailChangeHandler = (text) => {
    let isValid = true;
    if (isEmpty(text) || !isEmail(text)) {
      isValid = false;
    }
    emailDispatch({ type: "INPUT_CHANGE", value: text, valid: isValid });
  };

  const passwordChangeHandler = (text) => {
    let isValid = true;
    if (isEmpty(text) || text.length < 7) {
      isValid = false;
    }
    passwordDispatch({ type: "INPUT_CHANGE", value: text, valid: isValid });
  };

  const cmPasswordChangeHandler = (text) => {
    let isValid = true;
    if (isEmpty(text) || text.length < 7 || text !== passwordState.value) {
      isValid = false;
    }

    cmPasswordDispatch({ type: "INPUT_CHANGE", value: text, valid: isValid });
  };

  const clearOutInputs = () => {
    emailDispatch({ type: "INPUT_CHANGE", value: "", valid: false });
    emailDispatch({ type: "INPUT_BLUR", touched: false });
    passwordDispatch({ type: "INPUT_CHANGE", value: "", valid: false });
    passwordDispatch({ type: "INPUT_BLUR", touched: false });
    if (!login) {
      cmPasswordDispatch({ type: "INPUT_CHANGE", value: "", valid: false });
      cmPasswordDispatch({ type: "INPUT_BLUR", touched: false });
      userNameDispatch({ type: "INPUT_CHANGE", value: "", valid: false });
      userNameDispatch({ type: "INPUT_BLUR", touched: false });
    }
  };

  const signupHandler = () => {
    if (
      userNameState.valid &&
      emailState.valid &&
      passwordState.valid &&
      cmPasswordState.valid
    ) {
      clearOutInputs();
      dispatch(
        signUp(
          emailState.value,
          passwordState.value,
          userNameState.value,
          navigate
        )
      );
    } else {
      alert("An Error Occurred! Please check your inputs.");
    }
  };

  const signinHandler = () => {
    if (emailState.valid && passwordState.valid) {
      clearOutInputs();
      dispatch(signIn(emailState.value, passwordState.value, navigate));
    } else {
      alert("An Error Occurred! Please check your inputs.");
    }
  };

  const userNameError = !userNameState.valid && userNameState.touched;
  const emailError = !emailState.valid && emailState.touched;
  const passwordError = !passwordState.valid && passwordState.touched;
  const cmPasswordError = !cmPasswordState.valid && cmPasswordState.touched;

  return (
    <div className="animate__animated animate__zoomIn authscreen__right">
      <h2>
        <span>{login ? "Log In" : "Sign Up"}</span> to your account to continue
        shopping
      </h2>
      <div className="authscreen__inputs">
        {!login && (
          <div className="input__wrapper">
            <span>UserName:</span>
            <div className="input">
              <input
                value={userNameState.value}
                type="text"
                placeholder="Username"
                onChange={(e) => userNameChangeHandler(e.target.value)}
                onBlur={() =>
                  userNameDispatch({ type: "INPUT_BLUR", value: true })
                }
              />
              {userNameError && (
                <span className="input__error">
                  Please provide a valid user name.
                </span>
              )}
            </div>
          </div>
        )}
        <div className="input__wrapper">
          <span>Email:</span>
          <div className="input">
            <input
              value={emailState.value}
              type="text"
              placeholder="Email"
              onChange={(e) => emailChangeHandler(e.target.value)}
              onBlur={() => emailDispatch({ type: "INPUT_BLUR", value: true })}
            />
            {emailError && (
              <span className="input__error">
                Please provide a valid email.
              </span>
            )}
          </div>
        </div>

        <div className="input__wrapper">
          <span>Password:</span>
          <div className="input">
            <input
              value={passwordState.value}
              type="password"
              placeholder="Password"
              onChange={(e) => passwordChangeHandler(e.target.value)}
              onBlur={() =>
                passwordDispatch({ type: "INPUT_BLUR", value: true })
              }
            />
            {passwordError && (
              <span className="input__error">
                Please provide a valid password.
              </span>
            )}
          </div>
        </div>
        {!login && (
          <div className="input__wrapper">
            <span>Confirm Password:</span>
            <div className="input">
              <input
                value={cmPasswordState.value}
                type="text"
                placeholder="Confirm Password"
                onChange={(e) => cmPasswordChangeHandler(e.target.value)}
                onBlur={() =>
                  cmPasswordDispatch({ type: "INPUT_BLUR", value: true })
                }
              />
              {cmPasswordError && (
                <span className="input__error">
                  Please provide a valid confirm password.
                </span>
              )}
            </div>
          </div>
        )}
        <div className="input__wrapper">
          <button
            onClick={() => {
              if (login) {
                signinHandler();
              } else {
                signupHandler();
              }
            }}
          >
            {isLoading ? <Loader /> : `${login ? "LOG IN" : "Sign Up"}`}
          </button>
          {errorMessage && (
            <span className="animate__animated animate__zoomIn autherror">
              {errorMessage}
            </span>
          )}
        </div>
        {login && (
          <div className="login__signup">
            <span className="auth__gray">New to A.MShop?</span>{" "}
            <button className="auth__link" onClick={() => setLogin(false)}>
              Sign up Now.
            </button>
          </div>
        )}

        {!login && (
          <div className="login__signup">
            <span>I already have an account?</span>
            <button onClick={() => setLogin(true)}>Log In.</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailPasswordLogIn;
