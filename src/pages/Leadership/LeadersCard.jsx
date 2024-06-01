import { FaFacebookF } from "react-icons/fa6";

const Cards = ({leadersImg, leaderName, leadersDesignation, leadersBiography, leadersSocials}) => {
    return (
        <div className="leaders_cards">
            <div className="leaders_img">
                {leadersImg}
            </div>
            <div className="leaders_details">
                    {leaderName}
                    {leadersDesignation}
                    {leadersBiography}
                    {leadersSocials}
            </div>
        </div>
    )
}

const LeadersCard = () => {
    return <>
    <div className="leadersCards">
    < Cards leadersImg={<FaFacebookF/>} leaderName="DR John Ndia" leadersDesignation="Patron of the club" leadersBiography="Please create a brief biography for him and use any suitable placeholder images found online for his profile picture." leadersSocials={<FaFacebookF/>} />
    </div>
    </>
}

export default LeadersCard