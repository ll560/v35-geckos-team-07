import React from "react";
import "../About/about.css";
import "../../App.css";

function About() {
  return (
    <div className="about">
      <div className="About-App-Title">
        <h1>ABOUT THE APP</h1>
      </div>
      <div className="About-App-Content">
        <p>
          ZODAILY is a mobile-responsive application built with an API
          (Astro-API) that provides users with their daily horoscope with just a
          click on their zodiac sign. Along with the daily horoscope, the user
          also find out which sign they are compatible with, lucky number, lucky
          time, color and date range.
        </p>
      </div>
    </div>
  );
}

export default About;
