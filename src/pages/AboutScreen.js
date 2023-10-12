import React from "react";
import storeImg from "../img/pexels-karolina-grabowska-5632381.jpg";
import fingerPrint from "../img/fingerprint-150159_640.png";
import "animate.css";
import "./AboutScreen.css";

const AboutScreen = () => {
  return (
    <div className="animate__animated animate__zoomIn about">
      <div className="about__content">
        <h1>ABOUT US</h1>
        <img src={fingerPrint} className="fingerprint" alt="fingerprint" />
        <div className="about__image">
          <img src={storeImg} alt="store" />
          <div className="about__gradient"></div>
        </div>

        <div className="about__text">
          <p>
            Consectetur in aute ex aute deserunt consectetur elit culpa ut culpa
            pariatur fugiat occaecat enim. Duis sunt ex culpa amet cupidatat
            exercitation culpa ut consequat aliquip. In adipisicing ex dolor
            anim nisi. Id excepteur eu enim quis fugiat proident nisi
            adipisicing duis velit pariatur enim dolor exercitation. Sit aliquip
            sint do ex.
          </p>
          <p>
            Mollit tempor velit sint officia cillum consectetur incididunt id
            veniam et in ex do. Dolor aliquip minim laboris laboris id. Enim
            sint sunt in et cupidatat dolor aliqua. Nostrud laborum id sunt
            velit duis labore officia dolore duis amet. Laboris dolore fugiat
            minim laboris velit esse qui eiusmod voluptate duis ad id. Elit id
            qui tempor mollit proident velit eiusmod amet incididunt elit
            excepteur aliquip. Adipisicing cupidatat deserunt consectetur
            nostrud enim. Proident deserunt ullamco sint cillum quis ex eiusmod
            proident.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
