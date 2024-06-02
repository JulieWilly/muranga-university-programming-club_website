
import { GiThreeFriends } from "react-icons/gi";
import { MdOutlineToday } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { GiDuration } from "react-icons/gi";
import Footer from '../../components/Header/Footer'
const EventsCardsDesign = ({icon, title, desc}) => {
    return (<div>
        <div className="cards">
            <div className="card_icon">
                {icon}
            </div>
            <div className="card_desc">
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    </div>)
}
const Icons = ({icon}) => {
    return <>
        <p className="event_icons">{icon}</p>
    </>
}

const AlternatingEvents = ({number, eventImage, eventLabel, eventDay, eventVenue, eventDuration, eventTutor}) => {
    return <section>
        <div className="alternating_events">
                <p className="day">{number}</p>
            <div className="event_image">
                {eventImage}
                {/* <img src="" alt="" /> */}
            </div>
            <div className="event_details">
                <h1>{eventLabel}</h1>
                <div className="items">
                    <Icons icon={<MdOutlineToday/>}/>
                    <h3>{eventDay}</h3>
                </div>
                <div className="items">
                    {<Icons icon={<FiMapPin />} />}
                    <p>{eventVenue}</p>
                </div>
                <div className="items">
                <Icons icon={<GiDuration/>}/>
                    <p>{eventDuration}</p>
                </div>
                <h2><span>By: </span>{eventTutor}</h2>
            </div>
        </div>

    </section>
}

const EventsCards = () => {
    return <>
    <div>
        <div className="event_cards">
            <EventsCardsDesign icon={<GiThreeFriends />}title='Friendly Teams' desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veritatis saepe nihil voluptatum cupiditate, tempore libero repellendus expedita earum minus consectetur sed." />
            <EventsCardsDesign icon={<GiThreeFriends />}title='Friendly Teams' desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veritatis saepe nihil voluptatum cupiditate, tempore libero repellendus expedita earum minus consectetur sed." />
            <EventsCardsDesign icon={<GiThreeFriends />}title='Friendly Teams' desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veritatis saepe nihil voluptatum cupiditate, tempore libero repellendus expedita earum minus consectetur sed. " />
            <EventsCardsDesign icon={<GiThreeFriends />}title='Friendly Teams' desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veritatis saepe nihil voluptatum cupiditate, tempore libero repellendus expedita earum minus consectetur sed. " />
            
        </div>
        <div className="alternatingEvents">
            <AlternatingEvents number='1'  eventLabel='Web Development' eventDay='Wednesday' eventVenue={'Lab F04'} eventDuration={'6PM - 9PM'} eventTutor={'Carolyne Githenduka'} />
            <AlternatingEvents number='1'  eventLabel='Web Development' eventDay='Wednesday' eventVenue={'Lab F04'} eventDuration={'6PM - 9PM'} eventTutor={'Carolyne Githenduka'} />
            <AlternatingEvents number='1'  eventLabel='Web Development' eventDay='Wednesday' eventVenue={'Lab F04'} eventDuration={'6PM - 9PM'} eventTutor={'Carolyne Githenduka'} />
            <AlternatingEvents number='1'  eventLabel='Web Development' eventDay='Wednesday' eventVenue={'Lab F04'} eventDuration={'6PM - 9PM'} eventTutor={'Carolyne Githenduka'} />
        </div>
        <Footer />
    </div>
    </>
}
export default EventsCards;