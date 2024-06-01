import './leadership.css'
import PageBanner from '../../components/Pagebanner'
import LeadersCard from './LeadersCard'
import PageSubtitles from '../../components/PageSubtitle'

const Leadership = () => {
    return <>
        <PageBanner />
        < PageSubtitles title="Our Perfect Team"/>
        <LeadersCard/>
    </>
}
export default Leadership;