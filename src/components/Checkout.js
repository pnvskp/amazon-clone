import React,{forwardRef} from 'react';
import FlipMove from 'react-flip-move';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';

import '../CSS/checkout.css';
import {useStateValue} from '../StateProvider';

function Checkout(){
  const[{cart,user}] = useStateValue();
  const FunctionalArticle = forwardRef((props, ref) => (
  <div ref={ref}>
    {props.articleName}
  </div>
));
  return(
    <div className="checkout-page">
    <div className="checkout-left">
    <img className="ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/editorialjup/Jupiter_GW-Editorial_1150x323_NCE._CB418800911_.jpg" alt="Ad-banner"/>
    <div>
    <h1 className="checkout-pagetitle"> Shopping Cart </h1>
    <FlipMove  staggerDelayBy={150}
 appearAnimation="accordionVertical" enterAnimation="elevator" leaveAnimation="accordionHorizantal">
    {cart.map(item => (
      <div>
      <FunctionalArticle key={item.id}/>
      <CheckoutProduct
      id={item.id}
      title={item.title}
      image={item.image}
      price={item.price}
      rating={item.rating}
      />
      </div>
    ))}
    </FlipMove>
    </div>
    </div>
    <div className="checkout-right">
    <Subtotal/>
    </div>
    </div>
  )
};

export default Checkout;
