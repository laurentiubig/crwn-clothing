import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IK549Jgc1VhBcjzsewePw6fEsViotTpOzws5csuwYS6ewXgMPrqCbigl92UAghONngyzgbVJN67qqeiHAtQIPTM000NGGopPB";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing lt"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Ypur total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;