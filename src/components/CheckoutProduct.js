import React from 'react';
import '../CSS/checkoutproduct.css';
import {useStateValue} from '../StateProvider';

function CheckoutProduct(props) {
  const [{cart},dispatch]=useStateValue();

  const removefromCart =() =>{
    //Remove Items from the Cart.
    dispatch({
          type:"REMOVE_FROM_CART",
          item:{
            id:props.id
          }
        });
  }
  return (

    <div className="checkout-product">
    <img className="checkout-image" src={props.image} alt="cart-product"/>
    <div className="checkout-info">
    <p className="checkout-title">{props.title}</p>
    <p className="checkout-price"><small>₹</small><strong>{props.price}</strong></p>
    <div className="checkout-rating">
    {Array(props.rating).fill().map((_,i)=>(<span>⭐</span>))}
    </div>
    {!props.hideButton &&(<button onClick={removefromCart} className="checkout-button">Delete </button>)}
    </div>
    </div>
  )
}

export default CheckoutProduct;
