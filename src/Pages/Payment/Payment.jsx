import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
    const {id} = useParams()
    const [cart] = useCart()
    const selectedClass = cart.find( (item) => item._id === id)
    const price = selectedClass?.price
    

    return (
        <div className='w-full px-10'>
            <div className='mx-auto text-center md:w-4/12 my-8'>
            <h2 className='text-3xl uppercase py-4'>Payment</h2>
            </div>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} id={id} selectedClass={selectedClass} cart={cart}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;