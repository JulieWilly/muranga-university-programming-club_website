import "./homeSection.css";
const ClubImages = ({ ClubImages }) => {
  return (
    <>
      <div className="images">
        <img src={ClubImages} alt="Images for the club." />
      </div>
    </>
  );
};

const Heros = () => {
  return (
    <section className='heros_sect'>
      <ClubImages />
      <div className="club_info">
        <p className="short_desc">Learn from Today</p>
        <h1>MUTC </h1>
        <h2>Programming club</h2>
        <p className="club_desc">
          Welcome to the Muranga Univesity of Technology Programming Club. We
          are a group of dedicated and determined minds who are focused to
          effect a difference in line by solving problems and providing working
          solutions using programming.
        </p>

      <button className="explore_courses">Explore courses</button>

      </div>
      <ClubImages />
    </section>
  );
};

export default Heros;
