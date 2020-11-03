import React from "react";
import "../CSS/product.css";
import {useStateValue} from '../StateProvider';

function Product(props) {
  const[{cart},dispatch] = useStateValue();

  const addToCart =() =>{
    //dispatch the item into data layer
    dispatch({
      type:"ADD_TO_CART",
      item:{
        id:props.id,
        title:props.title,
        image:props.image,
        price:props.price,
        rating:props.rating
      }
    });
  };
  return (
    <div className="product">
    <div className="product-info">
    <p> {props.title} </p>
    <p className="product-price"> <small> ₹</small> <strong>{props.price} </strong> </p>
    </div>
    <div className="product-rating">
    {Array(props.rating).fill().map( (_,i)=>{
      return(
        <span> ⭐</span>
    )})}
    </div>
    <img  src={props.image} alt="Product"/>
    <button onClick={addToCart}> Add to Cart</button>
    </div>
  );
}

export default Product;
