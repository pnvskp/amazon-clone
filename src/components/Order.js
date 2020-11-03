import React from "react";
import "../CSS/order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";



function Order(props) {

  return (
    <div className="order">
      <h2>Order</h2>
      <p>
        {moment.unix(props.order.data.created).format("MMMM Dd YYYY, h:mma")}
      </p>
      <p className="order-id">
        <small>{props.order.id} </small>
      </p>
      {props.order.data.cart?.map((item) => {
        return (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            hideButton
          />
        );
      })}
      <CurrencyFormat
        renderText={(value) => (
          <h2 className="order-total">
            Order Total : <strong> {value} </strong>{" "}
          </h2>
        )}
        decimalScale={2}
        value={props.order.data.amount/100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
    </div>
  );
}

export default Order;
