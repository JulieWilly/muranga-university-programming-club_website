import React from "react";
import "./homeSection.css";
import NavigationLinks from "./NavigationLinks";

import { Link } from "react-router-dom";

import { FaCode } from "react-icons/fa";

const Logo = ({ logo, label }) => {
  return (
    <div className="logo_items">
      <div className="logo">{logo}</div>
      <p>{label}</p>
    </div>
  );
};

const Header = () => {
  return (
    <section>
      <div className="header">
        <div className="logo_section">
          <Logo logo={<FaCode />} label="M.U.T.P.C" />
        </div>
        <div className="links">
          <Link className="Links" to="/">
            <NavigationLinks label="Home" />
          </Link>
          <Link className="Links" to="/leadership">
            <NavigationLinks label="Leadership" />
          </Link>
          <Link className="Links" to="/tracks">
            <NavigationLinks label="Tracks" />
          </Link>
          <Link className="Links" to="/events">
            <NavigationLinks label="Events" />
          </Link>
        </div>
        <button>Apply</button>
      </div>
      
    </section>
  );
};

export default Header;
