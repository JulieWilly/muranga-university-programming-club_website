import './homeSection.css'
import { FaCode } from "react-icons/fa"
import { Link } from 'react-router-dom'

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