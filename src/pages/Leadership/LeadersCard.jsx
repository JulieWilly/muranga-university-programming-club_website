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
          leadersImg={dummy4}
          leaderName="Victory Njeri"
          leadersDesignation="The Chairperson"
          leadersBiography="Please create a brief biography for him and use any suitable placeholder images found online for his profile picture."
          leadersSocials={<FaFacebookF />}
        />
        <Cards
          leadersImg={dummy5}
          leaderName="Allan Muhari"
          leadersDesignation="The Vice Chairperson"
          leadersBiography="Please create a brief biography for him and use any suitable placeholder images found online for his profile picture."
          // leadersSocials={<SocialIcons />}
        />
        <Cards
          leadersImg={dummy6}
          leaderName="Bridget Gitong'a"
          leadersDesignation="The Secretary"
          leadersBiography="Please create a brief biography for him and use any suitable placeholder images found online for his profile picture."
          leadersSocials={<FaFacebookF />}
        />
        <Cards
          leadersImg={dummy7}
          leaderName="Ruth Mutisya"
          leadersDesignation="The Treasurer"
          leadersBiography="Please create a brief biography for him and use any suitable placeholder images found online for his profile picture."
          leadersSocials={<FaFacebookF />}
        />
        <Cards
          leadersImg={dummy8}
          leaderName="Webster Ifedha"
          leadersDesignation="Cyber Security Lead"
          leadersBiography="Please create a brief biography for him and use any suitable placeholder images found online for his profile picture."
          leadersSocials={<FaFacebookF />}
        />
        <Cards
          leadersImg={dummy9}
          leaderName="Manase Gunga"
          leadersDesignation="UI/UX lead"
          leadersBiography="Please create a brief biography for him and use any suitable placeholder images found online for his profile picture."
          leadersSocials={<FaFacebookF />}
        />
        <Cards
          leadersImg={dummy10}
          leaderName="Stanley Amunze"
          leadersDesignation="Mobile apps development lead"
          leadersBiography="Please create a brief biography for him and use any suitable placeholder images found online for his profile picture."
          leadersSocials={<FaFacebookF />}
        />
        <Cards
          leadersImg={dummy_memberImg}
          leaderName="Paul Karanja"
          leadersDesignation="cloud engineering lead"
          leadersBiography="Please create a brief biography for him and use any suitable placeholder images found online for his profile picture."
          leadersSocials={<FaFacebookF />}
        />
        <Cards
          leadersImg={dummy_member2Img}
          leaderName="Evyonn Mbithe"
          leadersDesignation="power platform lead"
          leadersBiography="Please create a brief biography for him and use any suitable placeholder images found online for his profile picture."
          leadersSocials={<FaFacebookF />}
        />
        <Cards
          leadersImg={dummy_member3Img}
          leaderName="WWilfred Muchire"
          leadersDesignation="Group Disciplinarian"
          leadersBiography="Please create a brief biography for him and use any suitable placeholder images found online for his profile picture."
          leadersSocials={<FaFacebookF />}
        />
        <Cards
          leadersImg={dummy6}
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
