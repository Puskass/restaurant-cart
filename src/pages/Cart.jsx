import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartProduct from '../components/CartProduct'

const Cart = () => {

  const {meals, total} = useContext(CartContext)

  return (
    <div>
      <h3>Your Cart</h3>
      <p>Total: ${total.toFixed(2)}</p>
      <div>
        {meals.map((meal, i) => 
          <CartProduct
          key={i}
          meal={meal}
          />
        )}
      </div>
    </div>
  )
}

export default Cart