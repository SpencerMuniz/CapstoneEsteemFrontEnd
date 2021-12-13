import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import esteemLogo from "./images/esteemLogo.jpg";
import Logout from "./Logout";
import axios from "axios";
import jwtDecode from "jwt-decode";
//css

const Navbar = (props) => {
  const [nav, setnav] = useState(false);
  const [user, userLogged] = useState();
  const [jwt, setJWT] = useState();
  const [userInfo, setUserInfo] = useState();
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  useEffect(() => {
    getJWT();
  }, []);
  useEffect(() => {
    getUser();
  }, [jwt]);
  useEffect(() => {
    console.log(user);
    if (user) {
      getUserInfo();
    }
  }, [user]);

  function getJWT() {
    const jwt = localStorage.getItem("token");
    setJWT(jwt);
  }
  function getUser() {
    try {
      const user = jwtDecode(jwt);
      userLogged(user);
    } catch {}
  }

  const getUserInfo = async () => {
    let pk = user.user_id;
    const userInfo = await axios.get(
      `http://127.0.0.1:8000/api/auth/user/${pk}`,
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    if (userInfo) {
      setUserInfo(userInfo.data);
    } else {
      console.log("no user found");
    }
  };

  function refreshPage() {
    window.location.reload();
  }

  function deleteJWT() {
    localStorage.removeItem("token");
    refreshPage();
  }

  return (
    <div className="">
      <nav className={nav ? "nav active" : "nav"}>
        <ul className="menu">
          <li className="menu-link">
            <NavLink to="/" className="esteemLogo">
              <img src={esteemLogo} alt="" />
            </NavLink>
            <label className="menu-icon" for="menu-btn">
              <span className="nav-icon"></span>
            </label>
          </li>
          <li className="menu-link">
            <NavLink to="/about" className="menu-font">About</NavLink>
          </li>
          <li className="menu-link">
            <NavLink to="/instructors" className="menu-font">Instructors</NavLink>
          </li>
          <li className="menu-link">
            <NavLink to="/comments" className="menu-font">Team News</NavLink>
          </li>
          <li className="menu-link">
            <NavLink to="/schedule" className="menu-font">Schedule</NavLink>
          </li>
          <li className="menu-link">
            <NavLink to="/contact" className="menu-font">Contact</NavLink>
          </li>
          <li className="menu-link">
            <NavLink to="/orders" className="menu-font">Orders</NavLink>
          </li>
          <li className="menu-link">
            <NavLink to="/video" className="menu-font">Videos</NavLink>
          </li>
          <li className="menu-link">
            <Logout />
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
