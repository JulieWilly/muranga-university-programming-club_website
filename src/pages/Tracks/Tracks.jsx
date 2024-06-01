import './tracks.css'
import PageBanner from '../../components/Pagebanner'
import PageSubtitles from '../../components/PageSubtitle'
import Footer from '../../components/Header/Footer'
import TracksCard from './TracksCard'
const Tracks = () => {
    return <>

        <PageBanner />
        <PageSubtitles title="Tracks Offered" />
        < TracksCard />
        < Footer/>
    
    </>
}

export default Tracks