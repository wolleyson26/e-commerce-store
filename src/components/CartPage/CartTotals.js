import React from 'react'
import { ProductConsumer } from '../../context'

export default function CartTotals() {
    return (
        <div className="ui container">
            <div className="row">
                <ProductConsumer>
                    {value => {
                        const { clearCart, cartSubTotal, cartTax, cartTotal } = value

                        return (
                            <div className="text-title text-center">
                                <div className="mb"></div>
                                <button className="ui basic red button" onClick={clearCart}>Clear Cart</button>
                                <h3>subtotal: ${cartSubTotal}</h3>
                                <h3>tax: ${cartTax}</h3>
                                <h3>total: ${cartTotal}</h3>
                            </div>
                        )
                    }}
                </ProductConsumer>
            </div>
        </div>
    )
}
