import { useShoppingCart } from 'use-shopping-cart';

export default function Cart() {
  const { cartDetails } = useShoppingCart();

  return (
    <div>
      <h1>Cart</h1>
      {Object.keys(cartDetails).length === 0 && <p>Your cart is empty.</p>}
      {Object.keys(cartDetails).length > 0 && (
        <ul>
          {Object.keys(cartDetails).map((cartItemId) => (
            <li key={cartItemId}>
              {cartDetails[cartItemId].name} - {cartDetails[cartItemId].quantity} x {cartDetails[cartItemId].formattedValue}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
