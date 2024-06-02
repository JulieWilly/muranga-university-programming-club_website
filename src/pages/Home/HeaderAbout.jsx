import "../../components/Header/homeSection.css";
import { TbTargetArrow } from "react-icons/tb";
import { FcBinoculars } from "react-icons/fc";
import { BiNotepad } from "react-icons/bi";
import groupImg from '../../images/group.jpg'

const AboutItems = ({ image, title, description }) => {
  return (
    <div className="about_sect">
      <div className="about_text">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="abt_img">
        <img src={image} alt="About us group image" />
      </div>
    </div>
  );
};

const CoreValues = ({ ValuesIcon, valuesTitle, valueDescription }) => {
  return (
    <section className="values_section">
      <div className="about_core_values">
        <div className="core_icon">{ValuesIcon}</div>
        <div className="description">
          <h1>{valuesTitle}</h1>
          <p>{valueDescription}</p>
        </div>
      </div>
    </section>
  );
};
const HeaderAbout = () => {
  return (
    <section>
      <div>
        

        <AboutItems image={groupImg} title="About" description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore,quam architecto. Consequatur, nihil doloribus accusantium ea explicabo dolor laboriosam quaerat eos repellat architecto error laudantium, ad nam, praesentium qui molestias."} />
      </div>
      <div className="abt_core_values">
        <CoreValues
          ValuesIcon={<TbTargetArrow />}
          valuesTitle="Mission"
          valueDescription="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, mollitia!"
        />
        <CoreValues
          ValuesIcon={<FcBinoculars />}
          valuesTitle="Vision"
          valueDescription="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, mollitia!"
        />
        <CoreValues
          ValuesIcon={<BiNotepad />}
          valuesTitle="Objectives"
          valueDescription="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, mollitia!"
        />
      </div>
    </section>
  );
};

export default HeaderAbout;
