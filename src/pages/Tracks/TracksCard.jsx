import './tracks.css'
import { SiReacthookform } from "react-icons/si";
const ApplicationForm = ({applyImg, applicationMessage}) => {
    return (
        <section className='application_sect'>
            <div className="application_message">
                <div className="application_image">
                {applyImg}
                </div>
                {/* <h2>Apply with us to equip yourself with programming skills to catch up with the ever changing technologies.</h2> */}
                <h2>{applicationMessage}</h2>
            </div>
            <div className='form'>
            <form action="post">
                <input required type="text" placeholder='Enter your name' />
                <input type="Email" placeholder='Enter your email address' required/>
                <input type="text" placeholder='Your course' required/>
                <input type="date" placeholder='Year of study' required />
                <select name="courses" id="courseNames">
                    <option value="1">Cyber security</option>
                    <option value="2">UI / UX Design</option>
                    <option value="3">Web Development</option>
                    <option value="4">Mobile Development</option>
                    <option value="5">Cloud Engineering</option>
                    <option value="6">Power Platform</option>
                </select>
                <button type='button' className='btnApply'>Submit</button>
            </form>
            </div>
            
        </section>
    )
}
const  TrackItems = ({trackImg,trackName, trackDescription, trackDuration}) => {
    return <>
        <div className="track_card">
            <div className="track_img">
                {trackImg}
            </div>
            <div className='reviews'>
            <div className="track_ratings">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
            </div>
            <h5><span class="badge">free</span></h5>
            </div>
            <h2>{trackName}</h2>
            <p>{trackDescription}</p>
            <p className='track_duration'>{trackDuration}</p>
            <div className="tract_bottom">
               <div className="followers">
               <div className="track_followers">
                    {trackImg}
                    {/* <img src="" alt="" /> */}
                    
                </div>
                <p>2K+</p>
               </div>
                <p className='enroll'>Enroll</p>
            </div>

        </div>
    </>
}
const TracksCard = () => {
    return <>
    <div className="trackCard">
        < TrackItems trackName="Cyber Security" trackDescription="You will learn about various security protocols, ethical hacking, encryption techniques, and threat analysis" trackDuration="3 Months" />
        < TrackItems trackName="Cyber Security" trackDescription="Throughout this track, they will learn about various security protocols, ethical hacking, encryption techniques, and threat analysis." trackDuration="3 Months" />
        < TrackItems trackName="Cyber Security" trackDescription="Throughout this track, they will learn about various security protocols, ethical hacking, encryption techniques, and threat analysis." trackDuration="3 Months" />
        < TrackItems trackName="Cyber Security" trackDescription="Throughout this track, they will learn about various security protocols, ethical hacking, encryption techniques, and threat analysis." trackDuration="3 Months" />
        < TrackItems trackName="Cyber Security" trackDescription="Throughout this track, they will learn about various security protocols, ethical hacking, encryption techniques, and threat analysis." trackDuration="3 Months" />
        < TrackItems trackName="Cyber Security" trackDescription="Throughout this track, they will learn about various security protocols, ethical hacking, encryption techniques, and threat analysis." trackDuration="3 Months" />
    </div>
    <ApplicationForm  applyImg={<SiReacthookform />} applicationMessage="Apply to learn with us your technology of choice."/>
    </>
}

export default TracksCard