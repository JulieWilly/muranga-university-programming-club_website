import Pagebanner from "../../components/Pagebanner";
import "./events.css";
import { GiThreeFriends } from "react-icons/gi";
import EventsCards from "./EventsCards";

const Events = () => {
  return (
    <>
      <Pagebanner
        bannerTitle="Clubs Events"
        bannerDescription="The Events Page serves as a comprehensive guide to the weekly schedule of MUTC. From Monday through Saturday, members can expect a diverse range of learning opportunities and activities."
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
