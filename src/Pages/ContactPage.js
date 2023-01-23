import Navbar from "../Components/Navbar";
import '../Styles/Home.css'
import MovieGrid from '../movie-grid.jpg';
import {AiFillGithub, AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin} from "react-icons/ai"

const backgroundImage = {
    backgroundImage: `url(${MovieGrid})`
};

export default function ContactPage(){

    return(
        <>
            <Navbar shoppingCartDisplay = "none">
            </Navbar>
            <div className = "home-page" style={backgroundImage}>
                <div className="contact-page__wrapper">
                    <a href="https://github.com/Rakooa37"><AiFillGithub className = "contact-icon"></AiFillGithub></a>
                    <a href="https://github.com/Rakooa37"><AiOutlineInstagram className="contact-icon"></AiOutlineInstagram></a>
                    <a href="https://github.com/Rakooa37"><AiOutlineFacebook className="contact-icon"></AiOutlineFacebook></a>
                    <a href="https://github.com/Rakooa37"><AiOutlineLinkedin className="contact-icon"></AiOutlineLinkedin></a>
                </div>
            </div>
        </>
    )
}