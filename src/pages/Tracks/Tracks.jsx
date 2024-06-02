import "./tracks.css";
import PageBanner from "../../components/Pagebanner";
import PageSubtitles from "../../components/PageSubtitle";
import Footer from "../../components/Header/Footer";
import TracksCard from "./TracksCard";
const Tracks = () => {
  return (
    <>
      <PageBanner
        bannerTitle="Tracks"
        bannerDescription="Explore our tracks: Cybersecurity, Android, Web Development, and Cloud Computing. Each track is taught by qualified tutors and spans 3 to 6 months, offering in-depth, hands-on learning. Join us to gain practical skills and knowledge in your chosen field, guided by expert instructors."
      />
      <PageSubtitles title="Tracks Offered" />
      <TracksCard />
      <Footer />
    </>
  );
};

export default Tracks;
