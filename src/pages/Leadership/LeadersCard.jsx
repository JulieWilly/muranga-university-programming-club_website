import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import Footer from "../../components/Header/Footer";
import drNdiaImg from '../../images/Dr_John_Ndia.jpg'
import dummy4 from '../../images/dummy_member4.jpg'
import dummy5 from '../../images/dummy_member5.jpg'
import dummy6 from '../../images/dummy_member6.jpeg'
import dummy7 from '../../images/dummy_memeber7.jpg'
import dummy8 from '../../images/dummy_member8.jpeg'
import dummy9 from '../../images/dummy_member9.avif'
import dummy10 from '../../images/dummy_member10.jpeg'
import dummy_memberImg from '../../images/dummy_member1.jpg'
import dummy_member2Img from '../../images/dummy_member2.jpeg'
import dummy_member3Img from '../../images/dummy_member3.jpg'
import { Link } from 'react-router-dom'
import socialData from '../../data/socialAccouts'

import "./leadership.css";
import SocialIcons from "../../components/SocialIcons";
import SocialAccounts from "../../data/socialAccouts";

const Cards = ({
  leadersImg,
  leaderName,
  leadersDesignation,
  leadersBiography,
  twitterUrl,
  facebookUrl, 
  instagramUrl, 
  linkedInUrl
}) => {
  return (
    <div className="leaders_cards">
        <div className="top">
          <div className="leaders_img">
        
          <img src={leadersImg} alt="" />
          </div>
          <div className="leaders_details">
            <h2>{leadersDesignation}</h2>
            <p>{leadersBiography}</p>
        </div>
          
        </div>
        <div className="bottom">
          <h1>{leaderName}</h1>
          
          <div className="leaders_icons">
            {twitterUrl && <Link className="link" to={twitterUrl}> {<BsTwitterX/>}</Link>}
            {facebookUrl && <Link className="link" to={facebookUrl}> {<FaFacebookF/>}</Link>}
            {instagramUrl && <Link className="link" to={instagramUrl}> {<FaInstagram/>}</Link>}
            {linkedInUrl && <Link  className="link" to={linkedInUrl}> {<FaLinkedinIn/>}</Link>}
          </div>
          

          </div>
        </div>
  );
};

const LeadersCard = () => {
  return (
    <>
      <div className="leadersCards">
        {
          socialData.map((socialAccounts, i) => <Cards leadersImg={socialAccounts.leadersImg} leaderName={socialAccounts.leaderName} leadersDesignation={socialAccounts.leadersDesignation} leadersBiography={socialAccounts.leadersBiography}
         twitterUrl={socialAccounts.twitterUrl} instagramUrl={socialAccounts.instagramUrl} linkedInUrl={socialAccounts.linkedinUrl} facebookUrl={socialAccounts.facebookdUrl}
        />)
}
          </div>
      {
        
        
       
      }
      <Footer />
    </>
  );
};

export default LeadersCard;
