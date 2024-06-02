import Pagebanner from "../../components/Pagebanner";
import "./events.css";
import { GiThreeFriends } from "react-icons/gi";
import EventsCards from "./EventsCards";

const Events = () => {
  return (
    <>
      <Pagebanner
        bannerTitle="Clubs Events"
        bannerDescription="Welcome to Clubs Events! Join us weekly for engaging sessions in cybersecurity, Android development, and web development. Enjoy convenient, hands-on learning experiences and connect with fellow enthusiasts. Enhance your skills and stay updated with the latest trends in a supportive environment."
      />
      <EventsCards
        icon={<GiThreeFriends />}
        title="Friendly Teams"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veritatis saepe nihil voluptatum cupiditate, tempore libero repellendus expedita earum minus consectetur sed quia consequatur quibusdam quos nesciunt incidunt dolor. Numquam."
      />
    </>
  );
};
export default Events;
