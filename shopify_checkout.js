import { useState, useEffect } from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const Cart = () => {
  const { cartDetails, redirectToCheckout } = useShoppingCart()
  const [stripe, setStripe] = useState(null)

  useEffect(() => {
    if (stripe === null) {
      setStripe(stripePromise)
    }
  }, [])

  return (
    <div>
      <h1>Cart</h1>
      {Object.keys(cartDetails).map((sku) => {
        const { name, price, quantity, image } = cartDetails[sku]
        return (
          <div key={sku}>
            <img src={image} alt={name} width="100" />
            <div>{name}</div>
            <div>{price} x {quantity}</div>
          </div>
        )
      })}
      <button onClick={() => redirectToCheckout({ sessionId: 'checkout-session-id' })}>
        Checkout
      </button>
    </div>
  )
}

export default Cart
