import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IK549Jgc1VhBcjzsewePw6fEsViotTpOzws5csuwYS6ewXgMPrqCbigl92UAghONngyzgbVJN67qqeiHAtQIPTM000NGGopPB";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment succesful");
      })
      .catch((error) => {
        console.log("Payment error:", JSON.parse(error));
        alert('There was an issue with your payment.')
      });
  };
 
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing lt"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
