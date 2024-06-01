import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
const Icons = ({social_icon}) => {
    return(
        <>
        <div className="icons">
            {social_icon}
        </div>
        </>
    )
}
const SocialIcons = () => {
    return (<>
        <div className="social_icons">
            < Icons social_icon={<BsTwitterX />}/>
            < Icons social_icon={<FaFacebookF />}/>
            < Icons social_icon={<FaLinkedinIn />}/>
            < Icons social_icon={<FaInstagram />}/>
            < Icons social_icon={<FaWhatsapp />}/>
        </div>
        
    </>)
}

export default SocialIcons;