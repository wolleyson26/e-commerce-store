import React from 'react'
import CartItem from './CartItem'
import { ProductConsumer } from '../../context'

export default function CartList() {
    return (
        <div className="ui equal width stackable grid">
            <div className="row">
                <div className="column">
                    <ProductConsumer>
                        {
                            value => {
                                const { cart, increment, decrement, removeItem } = value
                                if (cart.length === 0) {
                                    return (
                                        <h1 className="text-title text-center mb">your cart is currently empty</h1>
                                    )
                                }
                                return (
                                    <>
                                        {
                                            cart.map(item => (
                                                <CartItem
                                                    key={item.id}
                                                    cartItem={item}
                                                    increment={increment}
                                                    decrement={decrement}
                                                    removeItem={removeItem}
                                                />
                                            ))
                                        }
                                    </>
                                )
                            }
                        }
                    </ProductConsumer>
                </div>
            </div>
        </div>
    )
}
