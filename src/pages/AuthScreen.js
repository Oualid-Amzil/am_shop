import React from "react";

import Module from "../component/UI/Module";
import SocialMediaLogIn from "../component/auth/SocialMediaLogIn";
import EmailPasswordLogIn from "../component/auth/EmailPasswordLogIn";

import "./AuthScreen.css";

const AuthScreen = () => {
  return (
    <Module>
      <div className=" authscreen">
        <SocialMediaLogIn />
        <EmailPasswordLogIn />
      </div>
    </Module>
  );
};

export default AuthScreen;
