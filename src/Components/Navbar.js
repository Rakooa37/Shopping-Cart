import '../Styles/Navbar.css'
import {AiOutlineShoppingCart} from "react-icons/ai";
import { Link } from 'react-router-dom';


export default function Navabar(props){


    return(
        <div className="navbar">
            <div className= "navbar__title">MoviePosters Store</div>
            <div className="navbar__links">
                <Link to="/"><div className="navbar__links--home">Home</div></Link>
                <Link to="/products"><div className="navbar__links--products">Products</div></Link>
                <Link to="/contact"><div className="navbar__links--contacts">Contact</div></Link>  

                <div onClick={props.handleOnClickShoppingCart} style={{display:props.shoppingCartDisplay}}><AiOutlineShoppingCart className='navbar__links--shopping-cart'></AiOutlineShoppingCart></div>
                <div onClick={props.handleOnClickShoppingCart} style={{display:props.shoppingCartDisplay}} className='navbar__links--shopping-cart--quantity'>({props.shoppingCart && props.shoppingCart.length !== 0 ? 
                    props.shoppingCart.reduce((qty, current)=>{
                            return qty +=current.qty;
                    }, 0) : "0"})</div>
            </div> 
        </div>
    )
}