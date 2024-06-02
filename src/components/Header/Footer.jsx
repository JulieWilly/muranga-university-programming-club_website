import SocialIcons from "../SocialIcons";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import "./homeSection.css";
import { Link } from 'react-router-dom'
import NavigationLinks from "./NavigationLinks";

const Form = () => {
  return (
    <section>
      <form>
        <div className="subsribe">
          <input type="email" placeholder="Enter email" id="EmaiID" />
          <button>Subscribe</button>
        </div>
      </form>
    </section>
  );
};

const Footer = () => {
  return (
    <sections>
      <div className="footer_sect">
        <h1>M.U.T.P.C</h1>

        <p>Programming Hub</p>
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
        
        <h2>Follow us</h2>
        <div className="social_icons">
          <SocialIcons social_icon={<BsTwitterX/>}/>
          <SocialIcons social_icon={<FaFacebookF/>}/>
          <SocialIcons social_icon={<FaLinkedinIn/>}/>
          <SocialIcons social_icon={<FaInstagram/>}/>
          <SocialIcons social_icon={<FaWhatsapp/>}/>

      </div>
        <Form />
        <hr />
        <p className="footer_note">
          &copy; Developed with love by Wilfred Muchire Kiama: All rights
          reserved.
        </p>
      </div>
    </sections>
  );
};

export default Footer;
