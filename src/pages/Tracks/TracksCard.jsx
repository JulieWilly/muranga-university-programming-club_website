import "./tracks.css";
import UI_UXIMG from '../../images/ui_ux.jpg'
import web_devIMG from '../../images/web_dev.jpg';
import cyber_securityImg from '../../images/cyberSecurity.jpeg'
import androidImg from '../../images/android.jpg'
import cloud_engineeringImg from '../../images/cloud_engineering.jpg'
import power_platformImg from '../../images/cloud_power.png'


import { SiReacthookform } from "react-icons/si";
const ApplicationForm = ({ applyImg, applicationMessage }) => {
  return (
    <section className="application_sect">
      <div className="application_message">
        <div className="application_image">{applyImg}</div>
        <h2>{applicationMessage}</h2>
      </div>
      <div className="form">
        <form className="forms" action="post">
        <h1>Register below</h1>

          <input required type="text" placeholder="Enter your name" />
          <input type="Email" placeholder="Enter your email address" required />
          <input type="text" placeholder="Your course" required />
          <input type="date" placeholder="Year of study" required />
          <select name="courses" id="courseNames">
            <option value="1">Cyber security</option>
            <option value="2">UI / UX Design</option>
            <option value="3">Web Development</option>
            <option value="4">Mobile Development</option>
            <option value="5">Cloud Engineering</option>
            <option value="6">Power Platform</option>
          </select>
          <button type="button" className="btnApply">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
const TrackItems = ({
  trackImg,
  trackName,
  trackDescription,
  trackDuration,
}) => {
  return (
    <>
      <div className="track_card">
        <div className="track_img">
         <img src={trackImg} alt="Course / Track Image" /> 
        </div>
        <div className="reviews">
          <div className="track_ratings">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
          <h5>
            <span class="badge">free</span>
          </h5>
        </div>
        <h2>{trackName}</h2>
        <p>{trackDescription}</p>
        <p className="track_duration">{trackDuration}</p>
        <div className="tract_bottom">
          <div className="followers">
            <div className="track_followers">
              
              <img src={trackImg} alt="" />
            </div>
            <p>2K+ followers</p>
          </div>
          <p className="enroll">Enroll</p>
        </div>
      </div>
    </>
  );
};
const TracksCard = () => {
  return (
    <>
      <div className="trackCard">
        <TrackItems
        trackImg={cyber_securityImg}
          trackName="Cyber Security"
          trackDescription="You will learn about various security protocols, ethical hacking, encryption techniques, and threat analysis"
          trackDuration="3 Months"
        />
        <TrackItems
          trackImg={UI_UXIMG}
          trackName="UI / UX Design"
          trackDescription="You will learn about user research, wireframing, prototyping, and usability testing.students will gain hands-on experience in designing."
          trackDuration="2 Months"
        />
        <TrackItems
        trackImg={web_devIMG}
          trackName="Web Development"
          trackDescription="You will learn the fundamentals of front-end development using HTML, CSS, and JavaScript, and back-end development with technologies."
          trackDuration="5 Months"
        />
        <TrackItems
        trackImg={androidImg}
          trackName="Mobile Development"
          trackDescription="You will explore the basics of mobile app development techonologies languages like Java, Kotlin, Swift, and Dart."
          trackDuration="4 Months"
        />
        <TrackItems
        trackImg={cloud_engineeringImg}
          trackName="Cloud Engineering"
          trackDescription="You will learn about various cloud service providers such as AWS, Google Cloud, and Microsoft Azure."
          trackDuration="3 Months"
        />
        <TrackItems
        trackImg={power_platformImg}
          trackName="Power Platform"
          trackDescription="You will learn how to create custom business applications, automate workflows, analyze data, and build chatbots with minimal coding."
          trackDuration="3 Months"
        />
      </div>
      <ApplicationForm
        applyImg={<SiReacthookform />}
        applicationMessage="Apply to learn with us your technology of choice."
      />
    </>
  );
};

export default TracksCard;
