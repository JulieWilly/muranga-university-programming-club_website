import { RiDoubleQuotesL } from "react-icons/ri";
import './homeSection.css'
const TestmonialDesign = ({ quotes, image, name, designation}) => {
    return <section>
            <div className="testmonial_design_sect">
                <div className="testmonial_text">
                    <p>{quotes}</p>
                </div>
                <div className="testmonial_image">
                    {image}
                </div>
                <div className="desingnations">
                    <p>{name}</p>
                    <p>{designation}</p>
                </div>
            </div>
    </section>
}
const Testimonials = () => {
    return (
        <section className="testimonials_sect">
            <h1>Testimonials</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima dolor modi harum voluptatem ducimus eveniet sunt beatae nemo ipsam quidem.</p>
            <div className="user_testimonial">
                <TestmonialDesign quotes="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima dolor modi harum voluptatem ducimus eveniet sunt beatae nemo ipsam quidem."/>
            </div>
        </section>
    )
}

export default Testimonials