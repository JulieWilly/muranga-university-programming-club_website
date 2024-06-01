import SocialIcons from "../SocialIcons";
import './homeSection.css'
import NavigationLinks from './NavigationLinks'


const Form = () => {
    return (
        <section>
            <form>
                <div className='subsribe'>
                    <input type="email" placeholder='Enter email' id='EmaiID' />
                    <button>Subscribe</button>
                </div>
            </form>
        </section>
    )
}


const Footer = () => {
    return (<sections>
        <div className="footer_sect">
            <h1>MUTC</h1>

            <p>Programming Hub</p>
            <div className="nav_links">
                <NavigationLinks label="Home"/>
                <NavigationLinks label="Leadership"/>
                <NavigationLinks label="Tracks"/>
                <NavigationLinks label="Events"/>
            </div>
            <h2>Follow us</h2>
            <SocialIcons />
            <Form/>
        <hr />
        <p className="footer_note">&copy; Developed with love by Wilfred Muchire Kiama: All rights reserved.</p>
              
        </div>
    </sections>)
}

export default Footer