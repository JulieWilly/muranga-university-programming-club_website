import { GiThreeFriends } from "react-icons/gi";
import { MdOutlineToday } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { GiDuration } from "react-icons/gi";
import { GoCodeReview } from "react-icons/go";
import { BsPersonWorkspace } from "react-icons/bs";
import PageSubtitles from '../../components/PageSubtitle'
import Footer from "../../components/Header/Footer";
import UI_UXIMG from '../../images/ui_ux.jpg'
import web_devIMG from '../../images/web_dev.jpg';
import cyber_securityImg from '../../images/cyberSecurity.jpeg'
import androidImg from '../../images/android.jpg'
import cloud_engineeringImg from '../../images/cloud_engineering.jpg'
import power_platformImg from '../../images/cloud_power.png'


const EventsCardsDesign = ({ icon, title, desc }) => {
  return (
    <div>
      <div className="cards">
        <div className="card_icon">{icon}</div>
        <div className="card_desc">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};
const Icons = ({ icon }) => {
  return (
    <>
      <p className="event_icons">{icon}</p>
    </>
  );
};

const AlternatingEvents = ({
  number,
  eventImage,
  eventLabel,
  eventDay,
  eventVenue,
  eventDuration,
  eventTutor,
}) => {
  return (
    <section>
      <div className="alternating_events">
        <p className="day">{number}</p>
        <div className="event_image">
          <img src={eventImage} alt="" />
        </div>
        <div className="event_details">
          <h1>{eventLabel}</h1>
          <div className="items">
            <Icons icon={<MdOutlineToday />} />
            <h3>{eventDay}</h3>
          </div>
          <div className="items">
            {<Icons icon={<FiMapPin />} />}
            <p>{eventVenue}</p>
          </div>
          <div className="items">
            <Icons icon={<GiDuration />} />
            <p>{eventDuration}</p>
          </div>
          <h2>
            <span>By: </span>
            {eventTutor}
          </h2>
        </div>
      </div>
    </section>
  );
};

const EventsCards = () => {
  return (
    <>
      <div>
        <div className="event_cards">
          <EventsCardsDesign
            icon={<GiThreeFriends />}
            title="Friendly Teams"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veritatis saepe nihil voluptatum cupiditate, tempore libero repellendus expedita earum minus consectetur sed."
          />
          <EventsCardsDesign
            icon={<GiThreeFriends />}
            title="Convenient Venues"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veritatis saepe nihil voluptatum cupiditate, tempore libero repellendus expedita earum minus consectetur sed."
          />
          <EventsCardsDesign
            icon={<GoCodeReview />}
            title="Pair Programming"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veritatis saepe nihil voluptatum cupiditate, tempore libero repellendus expedita earum minus consectetur sed. "
          />
          <EventsCardsDesign
            icon={<BsPersonWorkspace />}
            title="Hands-on projects"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veritatis saepe nihil voluptatum cupiditate, tempore libero repellendus expedita earum minus consectetur sed. "
          />
        </div>
        < PageSubtitles title={'Upcoming Weekly Events'}/>
        <div className="alternatingEvents">
          <AlternatingEvents
            eventImage={cyber_securityImg}
            number="1"
            eventLabel="Cyber security"
            eventDay="Monday"
            eventVenue={"Lab F04"}
            eventDuration={"4pm to 7pm"}
            eventTutor={"Webster Ifedha"}
          />
          <AlternatingEvents
            number="2"
            eventImage={UI_UXIMG}
            eventLabel="UI / UX"
            eventDay="Tuesday"
            eventVenue={"Lab F04"}
            eventDuration={"5pm to 8pm"}
            eventTutor={"Manase Gunga"}
          />
          <AlternatingEvents
            number="3"
            eventImage={web_devIMG}
            eventLabel="Web Development"
            eventDay="Wednesday"
            eventVenue={"Lab F04"}
            eventDuration={"6PM - 9PM"}
            eventTutor={"Carolyne Githenduka"}
          />
         
          <AlternatingEvents
            number="4"
            eventImage={androidImg}
            eventLabel="Mobile apps development"
            eventDay="Thursday"
            eventVenue={"Lab F04"}
            eventDuration={"4PM to 7PM"}
            eventTutor={"Stanley Amunze"}
          />

          <AlternatingEvents
            number="5"
            eventImage={cloud_engineeringImg}
            eventLabel="Cloud engineering"
            eventDay="Friday"
            eventVenue={"Lab F04"}
            eventDuration={"3pm to 6pm"}
            eventTutor={"Paul Karanja"}
          />
          <AlternatingEvents
            number="6"
            eventImage={power_platformImg}
            eventLabel="Power Platform"
            eventDay="Saturday"
            eventVenue={"Lab F04"}
            eventDuration={"1pm to 4pm"}
            eventTutor={"Evyonn Mbithe"}
          />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default EventsCards;
