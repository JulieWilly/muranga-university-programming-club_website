import './homeSection.css'
import { FaCode } from "react-icons/fa"

const NavigationLinks = ({label}) => {
    return (
        <div className="nav-links">
            <nav>
                <ol>
                    <li><a href="#">{label}</a></li>
                </ol>
            </nav>
        </div>
    )
}

export default NavigationLinks