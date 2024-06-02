import "./tracks.css";
import PageBanner from "../../components/Pagebanner";
import PageSubtitles from "../../components/PageSubtitle";
import Footer from "../../components/Header/Footer";
import TracksCard from "./TracksCard";
const Tracks = () => {
  return (
    <>
      <PageBanner
        bannerTitle="Club Events"
        bannerDescription="The Leadership Page will highlight the dedicated team behind Murang'a University Tech Club (MUTC). This page will feature profiles of the club's leaders, including their roles, responsibilities, links to their social media accounts, and brief biographies. "
      />
      <PageSubtitles title="Tracks Offered" />
      <TracksCard />
      <Footer />
    </>
  );
};

export default Tracks;
