import { FaFacebookF } from "react-icons/fa6";
import Footer from "../../components/Header/Footer";
import drNdiaImg from '../../images/group.jpg'
import "./leadership.css";
import SocialIcons from "../../components/SocialIcons";

const Cards = ({
  leadersImg,
  leaderName,
  leadersDesignation,
  leadersBiography,
  leadersSocials,
}) => {
  return (
    <div className="leaders_cards">
        <div className="top">
          <div className="leaders_img">
          {/* {leadersImg} */}
          <img src={leadersImg} alt="" />
          </div>
          <div className="leaders_details">
            <h2>{leadersDesignation}</h2>
            <p>{leadersBiography}</p>
        </div>
          
        </div>
        <div className="bottom">
          <h1>{leaderName}</h1>
          <div className="leaders_icons">{leadersSocials}</div>
          

          </div>
        </div>
  );
};

const LeadersCard = () => {
  return (
    <>
      <div className="leadersCards">
        <Cards
          leadersImg={drNdiaImg}
          leaderName="DR John Ndia"
          leadersDesignation="Patron of the club"
          leadersBiography="Please create a brief biography for him and use any suitable placeholder images found online for his profile picture."
          leadersSocials={<SocialIcons />}
        />
        <Cards
          leadersImg={<FaFacebookF />}
          leaderName="DR John Ndia"
          leadersDesignation="Patron of the club"
          leadersBiography="Please create a brief biography for him and use any suitable placeholder images found online for his profile picture."
          leadersSocials={<FaFacebookF />}
        />
        <Cards
          leadersImg={<FaFacebookF />}
          leaderName="DR John Ndia"
          leadersDesignation="Patron of the club"
          leadersBiography="Please create a brief biography for him and use any suitable placeholder images found online for his profile picture."
          // leadersSocials={<SocialIcons />}
        />
        <Cards
          leadersImg={<FaFacebookF />}
          leaderName="DR John Ndia"
          leadersDesignation="Patron of the club"
          leadersBiography="Please create a brief biography for him and use any suitable placeholder images found online for his profile picture."
          leadersSocials={<FaFacebookF />}
        />
        <Cards
          leadersImg={<FaFacebookF />}
          leaderName="DR John Ndia"
          leadersDesignation="Patron of the club"
          leadersBiography="Please create a brief biography for him and use any suitable placeholder images found online for his profile picture."
          leadersSocials={<FaFacebookF />}
        />
        <Cards
          leadersImg={<FaFacebookF />}
          leaderName="DR John Ndia"
          leadersDesignation="Patron of the club"
          leadersBiography="Please create a brief biography for him and use any suitable placeholder images found online for his profile picture."
          leadersSocials={<FaFacebookF />}
        />
      </div>
      <Footer />
    </>
  );
};

export default LeadersCard;
