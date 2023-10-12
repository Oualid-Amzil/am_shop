import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { moduleActions } from "../../app/moduleSlice";
import {
  signInWithGoogle,
  signInWithFacebook,
} from "../../app/auth/auth-actions";
import storeImg from "../../img/hector-martinez-EG49vTtKdvI-unsplash.jpg";

import { FaXmark, FaSquareFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { BsMicrosoft } from "react-icons/bs";
import "animate.css";
import "./SocialMediaLogIn.css";

const SocialMediaLogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      className="animate__animated animate__zoomIn authscreen__left"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${storeImg})`,
        backgroundPosition: "center center",
      }}
    >
      <button
        className="delete"
        onClick={() => dispatch(moduleActions.hideAuthHandler(false))}
      >
        <FaXmark className="auth__xmark" />
      </button>
      <div className="left__content">
        <button
          onClick={() => dispatch(signInWithFacebook(navigate))}
          className="facebook"
        >
          <FaSquareFacebook className="leftcontent__icon" />
          <span>Sign in with Facebook</span>
        </button>
        <button
          onClick={() => dispatch(signInWithGoogle(navigate))}
          className="google"
        >
          <FcGoogle className="leftcontent__icon" />
          <span>Sign in with Google</span>
        </button>
        <button className="microsoft">
          <BsMicrosoft className="leftcontent__icon" />
          <span>Sign in with Microsoft</span>
        </button>
      </div>
    </div>
  );
};

export default SocialMediaLogIn;
