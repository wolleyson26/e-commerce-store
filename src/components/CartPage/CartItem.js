import React from 'react'
import { FaTrash, FaChevronCircleUp, FaChevronCircleDown, } from 'react-icons/fa';
import styled from 'styled-components'

export default function CartItem({ cartItem, increment, decrement, removeItem }) {
    const { id, title, price, count, total, image } = cartItem

    return (
        <CartItemWrapper>
            <div className="ui equal width stackable grid">
                <div className="row text-center text-capitalize">
                    {/* image */}
                    <div className="column">
                        <img src={image} width='60' alt="product image" />
                    </div>
                    {/* end of image */}
                    {/* title */}
                    <div className="column">
                        {title}
                    </div>
                    {/* end of title */}
                    {/* price */}
                    <div className="column">
                        ${price}
                    </div>
                    {/* end of price */}
                    {/* count contorls */}
                    <div className="column">
                        <div>
                            <FaChevronCircleDown
                                className='cart-icon'
                                onClick={() => decrement(id)}
                            /> <span className='text-title mx'>{count}</span>
                            <FaChevronCircleUp
                                className='cart-icon'
                                onClick={() => increment(id)}
                            />
                        </div>
                    </div>
                    {/* end of count contorls */}
                    {/* remove item */}
                    <div className="column">
                        <FaTrash
                            className='danger'
                            onClick={() => removeItem(id)}
                        />
                    </div>
                    {/* end of remove item */}
                    {/* item total */}
                    <div className="column">
                        <strong>item total: ${total}</strong>
                    </div>
                </div>
                <div className="mb"></div>
            </div>
        </CartItemWrapper>
    )
}

const CartItemWrapper = styled.section` 
    margin-bottom: 20px;
    .danger {
        color: rgb(218, 57, 37);
    }
    .cart-icon {
        color: var(--darkOrange);
    }
`
