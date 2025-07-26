// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import { loadStripe } from "@stripe/stripe-js";
// import {
//   PaymentElement,
//   Elements,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";
// import tokenCatch from "@/lib/token";

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const accessToken = tokenCatch;

//   const [errorMessage, setErrorMessage] = useState<string | null>(null);

//   const handleSubmit = async (event: any) => {
//     event.preventDefault();

//     if (elements == null) {
//       return;
//     }

//     // Trigger form validation and wallet collection
//     const { error: submitError }: any = await elements.submit();
//     if (submitError) {
//       // Show error to your customer
//       setErrorMessage(submitError.message);
//       return;
//     }

//     // Create the PaymentIntent and obtain clientSecret from your server endpoint
//     const res = await fetch("https://api.stripe.com/v1/payment_methods", {
//       method: "POST",
//       headers: {
//         Authorization: `${accessToken}`,
//       },
//     });

//     console.log(res);

//     const { client_secret: clientSecret } = await res.json();
//     console.log(clientSecret);

//     const { error }: any = await stripe.confirmPayment({
//       //`Elements` instance that was used to create the Payment Element

//       elements,
//       clientSecret,
//       confirmParams: {
//         return_url: "https://example.com/order/123/complete",
//       },
//     });

//     if (error) {
//       // This point will only be reached if there is an immediate error when
//       // confirming the payment. Show error to your customer (for example, payment
//       // details incomplete)
//       setErrorMessage(error.message);
//     } else {
//       // Your customer will be redirected to your `return_url`. For some payment
//       // methods like iDEAL, your customer will be redirected to an intermediate
//       // site first to authorize the payment, then redirected to the `return_url`.
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <PaymentElement />
//       <button
//         className="bg-blue-500 px-8 py-3"
//         type="submit"
//         disabled={!stripe || !elements}
//       >
//         Pay
//       </button>
//       {/* Show error message to your customers */}
//       {errorMessage && <div>{errorMessage}</div>}
//     </form>
//   );
// };

// export default CheckoutForm;
