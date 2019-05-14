import React from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'
import CartList from './CartList'
import CartItem from './CartItem'
import CartTotals from './CartTotals'

export default function Cart() {
  return (
    <section>
      <div className="mb"></div>
      <Title title='your cart items' center />
      <CartColumns />
      <CartList />
      <CartTotals />
    </section>
  )
}
