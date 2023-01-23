

export default function Product(props){
    return(
        <div className='products__product'>
            <img src={props.movie.image} alt=""></img>
            <div className='products__product--title'>{props.movie.title}</div>
            <div className='products__product--price'>${props.movie.price}</div>
            <div className='product__product--instock' style={props.movie.inStock === "true" ? {color:'green'}:{color:'red'}}>{props.movie.inStock === "true" ? "In Stock!" : "Out of Stock"}</div>
            <button className='products__product--button' onClick={props.movie.inStock ==='true' ? props.handleOnClickAdd : ()=>{}} id = {props.movie.id}>Add to cart</button>
        </div>
    )
}