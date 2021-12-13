import React from "react";
import Iframe from "./Maps/IFrame";

const location = {
  address: "345 Lakeville Street, Petaluma, California",
  lat: 38.2360896,
  lng: -122.6349455,
};

function Contact() {
  return (
    <div className="contact-page">
      <div id="contact">
        <h1>Contact Us</h1>
        <form
          action="https://formsubmit.co/esteemjiujitsu@yahoo.com"
          method="POST"
          className="contact-form"
        >
          <input
            type="hidden"
            name="subject"
            value="New Inquiry for Esteem BJJ"
            className="contact-input block"
          />
          <input
            type="text"
            placeholder="Full Name"
            className="contact-input block"
            required
          />
          <input
            type="email"
            placeholder="Enter Email"
            className="contact-input block"
            required
          />
          <textarea
            placeholder="Write your question here"
            name="question"
            className="contact-input"
          ></textarea>
          <input type="submit" value="Send" className="contact-submit block" />
        </form>

        <Iframe
          source={
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3133.860956283439!2d-122.6344875481847!3d38.236333679578415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085b6aa3eaf42f9%3A0xfbe77b1df2c9f6c9!2s345%20Lakeville%20St%2C%20Petaluma%2C%20CA%2094952!5e0!3m2!1sen!2sus!4v1639184878933!5m2!1sen!2sus"
          }
        />
      </div>
    </div>
  );
}
export default Contact;
