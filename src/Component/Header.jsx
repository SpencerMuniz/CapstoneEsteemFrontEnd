import React from "react";
import backgroundImage from "./images/esteem.jpeg";

function Header() {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="home-background"
    >
      <div id="main" className="">
        <div className="header-heading home">
          <h1 className="logo mb-1">ESTEEM</h1>
          <h2 className="martial-arts-title mb-1"> Brazillian Jiu-Jitsu</h2>
          <div className="text-center">
            <h3>
              <a href="/register" className="header-btn mb-1 home-auth">
                REGISTER{" "}
              </a>
            </h3>
            <h4>
              <a href="/login" className="header-btn home-auth">
                LOG IN
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
