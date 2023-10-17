import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { moduleActions } from "../../app/moduleSlice";
import { signInWithGoogle } from "../../app/auth/auth-actions";
import storeImg from "../../img/hector-martinez-EG49vTtKdvI-unsplash.jpg";

import { FaXmark, FaSquareFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { BsMicrosoft } from "react-icons/bs";
import "animate.css";
import "./SocialMediaLogIn.css";

const SocialMediaLogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [disable, setDisable] = useState(false);

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
        <button disabled={true} className="facebook">
          <FaSquareFacebook className="leftcontent__icon" />
          <span>Sign in with Facebook</span>
        </button>
        <button
          disabled={disable}
          onClick={() => {
            setDisable(true);
            dispatch(signInWithGoogle(navigate));
          }}
          className="google"
        >
          <FcGoogle className="leftcontent__icon" />
          <span>Sign in with Google</span>
        </button>
        <button disabled={true} className="microsoft">
          <BsMicrosoft className="leftcontent__icon" />
          <span>Sign in with Microsoft</span>
        </button>
      </div>
    </div>
  );
};

export default SocialMediaLogIn;
