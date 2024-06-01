import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import './homeSection.css'
const QuotesIcon = ({quoteIcon}) => {
    return (<section className="quotesIcon">
            {quoteIcon}
    </section>)
}
const TestmonialDesign = ({ quotes, image, name, designation}) => {
    return <section className="testmonial_design_sect">
            <div className="designs">
                <div className="testmonial_text">
                    <p>< RiDoubleQuotesL/>{quotes}<RiDoubleQuotesR/></p>
                </div>

                <div className="testmonial_image">
                    {image}
                </div>
            </div>
            <div className="desingnations">
                    <h2>{name}</h2>
                    <p>{designation}</p>
                </div>
    </section>
}
const Testimonials = () => {
    return (
        <section className="testimonials_sect">
            <h1>Testimonials</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima dolor modi harum voluptatem ducimus eveniet sunt beatae nemo ipsam quidem.</p>
            <div className="user_testimonial">
                <TestmonialDesign quotes="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima dolor modi harum voluptatem ducimus eveniet sunt beatae nemo ipsam quidem." name="Sir Wilfred Kiama" designation="Chairperson" />
                <TestmonialDesign quotes="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima dolor modi harum voluptatem ducimus eveniet sunt beatae nemo ipsam quidem." name="Sir Wilfred Kiama" designation="Chairperson" />
                <TestmonialDesign quotes="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima dolor modi harum voluptatem ducimus eveniet sunt beatae nemo ipsam quidem." name="Sir Wilfred Kiama" designation="Chairperson" />

            </div>
        </section>
    )
}

export default Testimonials