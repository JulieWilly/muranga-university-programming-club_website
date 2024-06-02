import "./homeSection.css";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavigationLinks = ({ label }) => {
  return (
    <div className="nav-links">
      <p>{label}</p>
    </div>
  );
};

export default NavigationLinks;
