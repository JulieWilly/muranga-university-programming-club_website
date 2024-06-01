import './homeSection.css'

const AboutItems = ({title, description}) => {
    return (
        <div className="abt_items">
            {/* <div className="abt_img">
                {image}
            </div> */}
            <div className="abt_desc">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

const HeaderAbout= () => {
    return (
        <section >

            <h2>we are here and we are in large and confident.</h2>
            
            {/* <div><AboutItems title={} description={"dklsadklsdklas"} /> </div> */}
        </section>
    )
}

export default HeaderAbout