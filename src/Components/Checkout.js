import '../Styles/Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { Link } from 'react-router-dom'

export default function Checkout(props){

    const thankYou = ()=>{
        alert("Thank you for buying with us!")
    }

    
    return(
        <div className="checkout" style={{display: props.isClicked? 'flex' : 'none'}}>
            <div className="checkout__wrapper" style={{display: props.isClicked? 'flex' : 'none'}} onClick={props.handleOnClickShoppingCart}></div>
            <div className="checkout__shopping-cart" style={{display: props.isClicked? 'flex' : 'none'}}>
                <div className = "checkout__shopping-cart--title">Your shopping cart</div>
                {props.shoppingCart.map((product)=>{
                    return <CheckoutProduct product = {product} key = {product.id} checkoutAdd = {props.checkoutAdd} checkoutRemove={props.checkoutRemove}></CheckoutProduct>
                })}
                <div className='checkout__shopping-cart--total'>Total: {props.shoppingCart.length !== 0 ? props.shoppingCart.reduce((sum, element)=>sum += Math.round(element.price)*parseInt(element.qty),0):0}$</div>
                <Link to='/'><button className = "checkout__button" onClick={thankYou}>Proceed to checkout</button></Link>
            </div>
        </div>   
    )
}