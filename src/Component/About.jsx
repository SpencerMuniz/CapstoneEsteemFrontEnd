import React from "react";
import fb from "./images/fb.jpg";
import ig from "./images/ig.jpg";
import gym from "./images/gym.jpg";

function About() {
  return (
    <div id="about">
      <div className="gym-image mb-2">
        <img src={gym} alt="image of outside EsteemBjj" />
      </div>
      <div className="about-text-container">
        <h1 className='mb-1'>ABOUT US</h1>
        <p className='mb-1'>
          Esteem Brazillian Jiu Jitsu was founded in 2010 by Michael Stratton.
          Michael is a black belt, under Megaton Dias. Michael's craft begins in
          1993, where joined the Junior High wrestling team.
        </p>
        <p className='mb-1'>
          He participated in folk-style, freestyle, and Greco-Roman wrestling
          form the age of 12-18. After High School, Michael gravitated towards
          MMA and no gi Jiu Jitsu. He had two MMA fights in 2007 and 2008, which
          he won. In 2010, with the support of his wife(Rosie), he was able to open
          Esteem. Esteem is a close-knit family enviroment, where everyone is
          welcome and egos are left at the door.
        </p>
        <div className="social-media-icons">
        <a href="https://www.facebook.com/michael.stratton.jr/" target="blank">
          <img src={fb} width="100px" alt="facebook logo" className="social-media-image"/>
        </a>
        <a
          href="https://www.instagram.com/esteemjiujitsu/?hl=en"
          target="blank"
        >
          <img src={ig} width="100px" alt="instagram logo" className="social-media-image"/>
        </a>
        </div>
      </div>
    </div>
  );
}
export default About;
