import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import dummy_memberImg from '../../images/dummy_member1.jpg'
import dummy_member2Img from '../../images/dummy_member2.jpeg'
import dummy_member3Img from '../../images/dummy_member3.jpg'

import "../../components/Header/homeSection.css";
import PageSubtitles from "../../components/PageSubtitle";

const TestmonialDesign = ({ quotes, image, name, designation }) => {
  return (
    <section className="testmonial_design_sect">
      <div className="designs">
        <div className="testmonial_text">
          <p>
            <RiDoubleQuotesL className="icons_quotes"/>
            {quotes}
            <RiDoubleQuotesR className="icons_quotes" />
          </p>
        </div>

        <div className="testmonial_image">
          <img src={image} alt="" />
          </div>
      </div>
      <hr />
      <div className="desingnations">
        <h2>{name}</h2>
        <p>{designation}</p>
      </div>
    </section>
  );
};
const Testimonials = () => {
  return (
    <section className="testimonials_sect">
      <PageSubtitles title={"Testimonials"} des/>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima dolor
        modi harum voluptatem ducimus eveniet sunt beatae nemo ipsam quidem.</p>
      <div className="user_testimonial">
        <TestmonialDesign
        image={dummy_memberImg}
          quotes="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima dolor modi harum voluptatem ducimus eveniet sunt beatae nemo ipsam quidem."
          name=" Madam Rachel"
          designation="Former Chairperson"
        />
        <TestmonialDesign
        image={dummy_member2Img}
          quotes="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima dolor modi harum voluptatem ducimus eveniet sunt beatae nemo ipsam quidem."
          name="Sir Luther King Jr."
          designation="Former Secretary"
        />
        <TestmonialDesign
        image={dummy_member3Img}
          quotes="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima dolor modi harum voluptatem ducimus eveniet sunt beatae nemo ipsam quidem."
          name="Sir James Spader"
          designation="Alumni"
        />
      </div>
    </section>
  );
};

export default Testimonials;
