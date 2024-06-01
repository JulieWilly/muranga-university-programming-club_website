import { FaFacebookF } from "react-icons/fa6";
import Footer from "../../components/Header/Footer";


const Cards = ({leadersImg, leaderName, leadersDesignation, leadersBiography, leadersSocials}) => {
    return (
        <div className="leaders_cards">
            <div className="leaders_img">
                {leadersImg}
                {/* <img src={leadersImg} alt="" /> */}
            </div>
            <div className="leaders_details">
                    <h1>{leaderName}</h1>            
                    <h2>{leadersDesignation}</h2>
                    <p>{leadersBiography}</p>
                    <div>{leadersSocials}</div>
            </div>
        </div>
    )
}

const LeadersCard = () => {
    return <>
    <div className="leadersCards">
    < Cards leadersImg={<FaFacebookF/>} leaderName="DR John Ndia" leadersDesignation="Patron of the club" leadersBiography="Please create a brief biography for him and use any suitable placeholder images found online for his profile picture." leadersSocials={<FaFacebookF/>} />
    < Cards leadersImg={<FaFacebookF/>} leaderName="DR John Ndia" leadersDesignation="Patron of the club" leadersBiography="Please create a brief biography for him and use any suitable placeholder images found online for his profile picture." leadersSocials={<FaFacebookF/>} />
    < Cards leadersImg={<FaFacebookF/>} leaderName="DR John Ndia" leadersDesignation="Patron of the club" leadersBiography="Please create a brief biography for him and use any suitable placeholder images found online for his profile picture." leadersSocials={<FaFacebookF/>} />
    < Cards leadersImg={<FaFacebookF/>} leaderName="DR John Ndia" leadersDesignation="Patron of the club" leadersBiography="Please create a brief biography for him and use any suitable placeholder images found online for his profile picture." leadersSocials={<FaFacebookF/>} />
    < Cards leadersImg={<FaFacebookF/>} leaderName="DR John Ndia" leadersDesignation="Patron of the club" leadersBiography="Please create a brief biography for him and use any suitable placeholder images found online for his profile picture." leadersSocials={<FaFacebookF/>} />
    < Cards leadersImg={<FaFacebookF/>} leaderName="DR John Ndia" leadersDesignation="Patron of the club" leadersBiography="Please create a brief biography for him and use any suitable placeholder images found online for his profile picture." leadersSocials={<FaFacebookF/>} />
    </div>
    < Footer />
    </>
}

export default LeadersCard