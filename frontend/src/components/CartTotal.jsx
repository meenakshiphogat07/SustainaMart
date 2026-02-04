import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = ({ applyPoints = false }) => { // added applyPoints prop

  const { currency, delivery_fee, getCartAmount, ecoPoints } = useContext(ShopContext);

  const subtotal = getCartAmount();
  const discount = applyPoints ? Math.min(ecoPoints, subtotal) : 0;
  const total = subtotal === 0 ? 0 : subtotal + delivery_fee - discount;

  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>

      <div className='flex flex-col gap-2 mt-2 text-sm'>

        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>{currency}{subtotal}.00</p>
        </div>
        <hr />

        {applyPoints && discount > 0 && (
          <div className='flex justify-between text-green-700'>
            <p>EcoPoints Discount</p>
            <p>- {currency}{discount}.00</p>
          </div>
        )}

        <div className='flex justify-between'>
          <p>Shipping Fee</p>
          <p>{currency}{delivery_fee}.00</p>
        </div>
        <hr />

        <div className='flex justify-between'>
          <b>Total</b>
          <b>{currency}{total}.00</b>
        </div>

      </div>
    </div>
  )
}

export default CartTotal
