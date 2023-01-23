import Navabar from "../Components/Navbar";
import Product from "../Components/Product";
import '../Styles/Product.css'
import '../App.css'
import Checkout from "../Components/Checkout";
import {useEffect, useState} from 'react'

export default function Products(props){

    const [isClicked, setIsClicked] = useState(false);
    const handleOnClickShoppingCart = (event)=>{
        setIsClicked(!isClicked);
    }

    const movies = [{title: "Moonlight 2016", price: "49.99", inStock:"true", image: "/images/Moonlight.jpg", qty:0, id: 0},
                    {title: "Tenet 2020", price: "29.99", inStock:"true", image: "/images/Tenet.jpg", qty:0, id: 1},
                    {title: "Inception 2010", price: "49.99", inStock:"true", image: "/images/Inception.jpg", qty:0, id: 2},
                    {title: "Interstelar 2014", price: "59.99", inStock:"true", image: "/images/Interstelar.jpg", qty:0, id: 3},
                    {title: "I Origins 2014", price: "39.99", inStock:"true", image: "/images/IOrigins.jpg  ", qty:0, id: 4},
                    {title: "Predestination 2014", price: "29.99", inStock:"true", image: "/images/Predestination.jpg", qty:0, id: 5},
                    {title: "The game 1997", price: "19.99", inStock:"true", image: "/images/TheGame.jpg", qty:0, id: 6},
                    {title: "The Departed 2006", price: "39.99", inStock:"true", image: "/images/The Departed.jpg", qty:0, id: 7},
                    {title: "The Mist 2007", price: "29.99", inStock:"true", image: "/images/TheMist.jpg", qty:0, id: 8},
                    {title: "The Prestige 2006", price: "39.99", inStock:"false", image: "/images/PiratesOfTheCaribbean.jpg", qty:0, id: 9},
                    {title: "The Shawshank Redemeption 1994", price: "39.99", inStock:"false", image: "/images/TheShawshankRedemption.jpg", qty:0, id: 10}]

    const [shoppingCart, setShoppingCart] = useState([])

    const handleOnClickAdd = (event)=>{
        let id = event.target.id;
        console.log(id);
        if(shoppingCart.find((element)=>{
            let temp = {...element}
            temp.qty = 0
            return JSON.stringify(temp) === JSON.stringify(movies[id])
        })){
            let newCart = [...shoppingCart]
            let productIndex = newCart.indexOf(newCart.find((element)=>element.id == id))
            newCart[productIndex] = {...movies[id], qty: newCart[productIndex].qty+1}
            setShoppingCart(newCart)

        }else{ 
            setShoppingCart([...shoppingCart, {...movies[id], qty:1}])
        }  
        
    }

    useEffect(()=>{
        console.log(shoppingCart);
    },[shoppingCart])

    const checkoutAdd = (event)=>{
        let id = event.target.id
        let newCart = [...shoppingCart]
        let productIndex = newCart.indexOf(newCart.find((element)=>element.id == id))
        newCart[productIndex] = {...movies[id], qty: newCart[productIndex].qty+1}
        setShoppingCart(newCart)
    }

    const checkoutRemove = (event)=>{
        let id = event.target.id
        let newCart = [...shoppingCart]
        newCart[id] = {...movies[id], qty: newCart[id].qty-1}
        setShoppingCart(newCart)
    }


    return(
        <div className="product-page">  
            <Navabar handleOnClickShoppingCart = {handleOnClickShoppingCart} shoppingCart = {shoppingCart}/>
            <div className="products">
                <Checkout isClicked={isClicked} handleOnClickShoppingCart = {handleOnClickShoppingCart} shoppingCart = {shoppingCart} checkoutAdd={checkoutAdd} checkoutRemove={checkoutRemove}>
                </Checkout>
                {movies.map((movie)=>{
                    return <Product movie={movie} key={movie.id} handleOnClickAdd = {handleOnClickAdd}></Product>
                })}
            </div>
        </div>
    )
}