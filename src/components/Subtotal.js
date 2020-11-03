import React from 'react';
import CurrencyFormat from 'react-currency-format';
import '../CSS/subtotal.css';
import { useStateValue } from "../StateProvider";
import {getCartTotal} from '../reducer';
import {useHistory} from 'react-router-dom';

function Subtotal(){
  const history = useHistory();
  const[{cart}]=useStateValue();

  return(
    <div className="subtotal">
    <CurrencyFormat
    renderText={(value) =>(
      <>
      <h2> Subtotal( {cart?.length} items ) : <strong> {value} </strong> </h2>
      <small className="subtotal-gift">
      <input type="checkbox"/> This order contains a gift </small>
      </>
    )}
    decimalScale={2}
    value={getCartTotal(cart)}
    displayType={"text"}
    thousandSeparator={true}
    prefix={"₹"}
    />
    <div >
    <button onClick={e => history.push('/payment')} className="proceed-button"> Proceed to Buy </button>
    </div>
    </div>
  )
};

export default Subtotal;
