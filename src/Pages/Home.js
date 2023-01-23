import Navabar from "../Components/Navbar";
import '../Styles/Home.css'
import MovieGrid from '../movie-grid.jpg';
import { Link } from "react-router-dom";

const backgroundImage = {
    backgroundImage: `url(${MovieGrid})`
};


export default function Home(){
    return(
        <div>
            <Navabar shoppingCartDisplay = "none"></Navabar>
            <div className = "home-page" style={backgroundImage}>
                <div className="home-page__wrapper">
                    <div className="home-page__title" >The best posters store online</div>
                    <Link to="/products"><button className="home-page__button">Discover</button></Link>
                </div>
            </div>
            
        </div>
    )
}