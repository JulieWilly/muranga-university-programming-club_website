import './leadership.css'
import PageBanner from './Pagebanner'
import LeadersCard from './LeadersCard'


const Leadership = () => {
    return <>
        <PageBanner />
        <h1 className='leadership_title'>Our Perfect Team</h1>
        <LeadersCard/>
    </>
}
export default Leadership;