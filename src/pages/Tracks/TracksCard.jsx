import './tracks.css'

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
                <div className="track_followers">
                    <img src="" alt="" />
                </div>
                <p>Enroll</p>
            </div>

        </div>
    </>
}
const TracksCard = () => {
    return <>
    <div className="trackCard">
        < TrackItems trackName="Cyber Security" trackDescription="Throughout this track, they will learn about various security protocols, ethical hacking, encryption techniques, and threat analysis." trackDuration="3 Months" />
    </div>
    </>
}

export default TracksCard