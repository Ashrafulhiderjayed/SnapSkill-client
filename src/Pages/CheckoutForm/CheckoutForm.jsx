import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import "./CheckoutForm.css";
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const CheckoutForm = ({price, selectedClass, cart, id}) => {
    const stripe = useStripe()
    const elements = useElements()
    const {user} = useContext(AuthContext)
    const [cardError, setCardError] = useState('')
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')

    useEffect(() =>{
        if(price > 0){
          axiosSecure.post('/create-payment-intent', {price})
          .then(res =>{
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
            })
        }
      }, [price, axiosSecure])


    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (!stripe || !elements) {
        return;
      }
  
      const card = elements.getElement(CardElement);
  
      if (card == null) {
        return;
      }
      const { error } = await stripe.createPaymentMethod({
        type: "card",
        card,
      });
  
      if (error) {
        console.log("error", error);
        setCardError(error.message);
      } else {
        setCardError("");
      }
  
      setProcessing(true);
  
      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email || "unknown",
              name: user?.displayName || "anonymous",
            },
          },
        });
  
      if (confirmError) {
        console.log(confirmError);
      }
  
      console.log("payment intent", paymentIntent);
      setProcessing(false);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        // save payment information to the server
        const payment = {
          email: user?.email,
          transactionId: paymentIntent.id,
          price,
          available_seats: selectedClass.available_seats,
          date: new Date(),
          status: "service pending",
          className: selectedClass.class_name,
          cartItems: selectedClass._id,
          image: selectedClass.image,
          classItems: selectedClass.classItemId
        };
  
        axiosSecure.post("/payments", payment).then((res) => {
          console.log(res.data);
          fetch(`http://localhost:5000/all-classes/seats/${selectedClass.classItemId}`,{
            method: "PATCH",
          })
            .then((res) => res.json())
            .then((data) => {});
  
          if (res.data.insertResult.insertedId) {
            // display confirm
            console.log(res.data.insertResult.insertedId)
          }
          if (res.data.deleteResult.deletedCount > 0) {
            // display confirm
          }
        });
      }
    }

    return (
        <>
         <form className='w-2/3 m-8' onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
          <button className='btn btn-outline btn-primary btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret || processing}>
            Pay
          </button>
         </form>
         {cardError && <p className='text-red-500 font-semibold ml-8'>{cardError}</p>}
         {transactionId && <p className='text-green-500'>Transaction complete with transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;