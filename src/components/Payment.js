import React, { useState,useEffect } from "react";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../reducer";
import {db} from '../firebase';
import axios from '../axios';
import "../CSS/payment.css";

function Payment() {
  const [{ cart, user },dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');
  const [clientSecret,setClientSecret] = useState(true);

  useEffect ( () => {
    //Generate the Special Stripe Secret which allows us to charge a customer
    const getClientSecret = async () =>{
      const response =await axios({
        method:'post',
        //Stripe expects the total in a currencysubunits
        url: `/payments/create?total=${getCartTotal(cart) *100}`
      });
      setClientSecret(response.data.clientSecret);
    }

    getClientSecret();
  },[cart]);

  console.log( " The secret is >>>>",clientSecret);

  const handleSubmit = async (e) => {

    e.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card: elements.getElement(CardElement)
      }
    }).then(({paymentIntent}) => {
      //paymentIntent means payment confirmation

      db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
        cart:cart,
        amount:paymentIntent.amount,
        created:paymentIntent.created
      })
      setSucceeded(true)
      setError(null);
      setProcessing(false);
      dispatch({
        type:'EMPTY_BASKET'
      })
      history.replace('/orders');
  })
};

  const handleChange = (e) => {
    //Listen for changes in Card Element and display any errors as the customer types their card details

    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          {" "}
          Checkout ( <Link to="/checkout"> {cart?.length} items </Link>)
        </h1>
        <div className="payment-section">
          <div className="payment-title">
            <h2> Delivery Address</h2>
            <div className="payment-address">
              <p> {user?.email}</p>
              <p> 122B React Street</p>
              <p> London,UK</p>
            </div>
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3> Review your Order</h3>
          </div>
          <div className="payment-items">
            {cart.map((item) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3> Payment Method</h3>
          </div>
          <div className="payment-details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment-priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <h2>
                      {" "}
                      Order Total : <strong> {value} </strong>{" "}
                    </h2>
                  )}
                  decimalScale={2}
                  value={getCartTotal(cart)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <button disabled={processing || disabled || succeeded}>
                <span> {processing ? <p> Processing </p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>} {/* Errors*/}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
