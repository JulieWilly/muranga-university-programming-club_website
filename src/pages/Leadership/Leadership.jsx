import './leadership.css'
import PageBanner from '../../components/Pagebanner'
import LeadersCard from './LeadersCard'
import PageSubtitles from '../../components/PageSubtitle'

const Leadership = () => {
    return <>
        <PageBanner bannerTitle="Leadership" bannerDescription="The Leadership Page will highlight the dedicated team behind Murang'a University Tech Club (MUTC). This page will feature profiles of the club's leaders, including their roles, responsibilities, links to their social media accounts, and brief biographies."/>
        < PageSubtitles title="Our Perfect Team"/>
        <LeadersCard/>
    </>
}
export default Leadership;