import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import Footer from "../../components/Header/Footer";
import drNdiaImg from '../../images/Dr_John_Ndia.jpg'
import njeruImg from '../../images/njeru.jpg'
import userImg from '../../images/user.jpg'
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
          leadersSocials={<SocialIcons social_icon={<BsTwitterX />}/>}
        />
        <Cards
          leadersImg={njeruImg}
          leaderName="Victory Njeri"
          leadersDesignation="The Chairperson"
          leadersBiography="Please create a brief biography for him and use any suitable placeholder images found online for his profile picture."
          leadersSocials={<FaFacebookF />}
        />
        <Cards
          leadersImg={<FaFacebookF />}
          leaderName="Allan Muhari"
          leadersDesignation="The Vice Chairperson"
          leadersBiography="Please create a brief biography for him and use any suitable placeholder images found online for his profile picture."
          // leadersSocials={<SocialIcons />}
        />
        <Cards
          leadersImg={<FaFacebookF />}
          leaderName="Bridget Gitong'a"
          leadersDesignation="The Secretary"
          leadersBiography="Please create a brief biography for him and use any suitable placeholder images found online for his profile picture."
          leadersSocials={<FaFacebookF />}
        />
        <Cards
          leadersImg={<FaFacebookF />}
          leaderName="Ruth Mutisya"
          leadersDesignation="The Treasurer"
          leadersBiography="Please create a brief biography for him and use any suitable placeholder images found online for his profile picture."
          leadersSocials={<FaFacebookF />}
        />
        <Cards
          leadersImg={<FaFacebookF />}
          leaderName="Webster Ifedha"
          leadersDesignation="Cyber Security Lead"
          leadersBiography="Please create a brief biography for him and use any suitable placeholder images found online for his profile picture."
          leadersSocials={<FaFacebookF />}
        />
        <Cards
          leadersImg={<FaFacebookF />}
          leaderName="Manase Gunga"
          leadersDesignation="UI/UX lead"
          leadersBiography="Please create a brief biography for him and use any suitable placeholder images found online for his profile picture."
          leadersSocials={<FaFacebookF />}
        />
        <Cards
          leadersImg={<FaFacebookF />}
          leaderName="Stanley Amunze"
          leadersDesignation="Mobile apps development lead"
          leadersBiography="Please create a brief biography for him and use any suitable placeholder images found online for his profile picture."
          leadersSocials={<FaFacebookF />}
        />
        <Cards
          leadersImg={<FaFacebookF />}
          leaderName="Paul Karanja"
          leadersDesignation="cloud engineering lead"
          leadersBiography="Please create a brief biography for him and use any suitable placeholder images found online for his profile picture."
          leadersSocials={<FaFacebookF />}
        />
        <Cards
          leadersImg={<FaFacebookF />}
          leaderName="Evyonn Mbithe"
          leadersDesignation="power platform lead"
          leadersBiography="Please create a brief biography for him and use any suitable placeholder images found online for his profile picture."
          leadersSocials={<FaFacebookF />}
        />
        <Cards
          leadersImg={userImg}
          leaderName="WWilfred Muchire"
          leadersDesignation="Group Disciplinarian"
          leadersBiography="Please create a brief biography for him and use any suitable placeholder images found online for his profile picture."
          leadersSocials={<FaFacebookF />}
        />
        <Cards
          leadersImg={userImg}
          leaderName="Carolyne Githenduka"
          leadersDesignation="web development lead"
          leadersBiography="Please create a brief biography for him and use any suitable placeholder images found online for his profile picture."
          leadersSocials={<FaFacebookF />}
        />
      </div>
      <Footer />
    </>
  );
};

export default LeadersCard;
