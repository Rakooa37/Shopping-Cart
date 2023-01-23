export default function CheckoutProduct(props){
    return(
        <div className='checkout__product'>

            <img src={props.product.image} alt=""></img>
            <div className='checkout__product--content'>
                <div className='checkout__product--title'>{props.product.title}</div>
                <div className='checkout__product--price'>${props.product.price}</div>

                <div className='checkout__product--buttons'>
                    <button id = {props.product.id} onClick={props.checkoutRemove}>-</button>
                    <input disabled type="text" value = {props.product.qty}></input>
                    <button id = {props.product.id} onClick={props.checkoutAdd}>+</button>
                </div>
            </div>

            
        </div>
    )
}