import React from 'react'
import { ProductConsumer } from '../context';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function SideCart() {
    return (
        <ProductConsumer>
            {value => {
                const { cartOpen, closeCart, cart, cartTotal } = value
                console.log(cart)
                return (
                    <CartWrapper show={cartOpen} onClick={closeCart}>
                        <ul>
                            {cart.map(item => {
                                return (
                                    <li key={item.id} className='cart-item mb'>
                                        <img src={item.image} width='35' alt="cart image" />
                                        <div className="mt"></div>
                                        <div>
                                            <p className='text-capitalize'>{item.title}</p>
                                            <p className='text-capitalize'>amount: {item.count}</p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="mb"></div>
                        <h4 className="text-capitalize text">cart total: ${cartTotal}</h4>
                        <div className="text-center">
                            <Link to='/cart' className="main-link">cart page</Link>
                        </div>
                    </CartWrapper>
                )
            }}
        </ProductConsumer>
    )
}

const CartWrapper = styled.div` 
    font-family: 'Montserrat', sans-serif;
    position: fixed;
    top: 72px;
    right: 0;
    width: 100%;
    height: 100%;
    background: var(--mainGrey);
    z-index: 3;
    transform: ${props => (props.show ? 'translateX(0)' : 'translateX(100%)')};
    transition: var(--mainTransition);
    border-left: 4px solid #F7ECE1;
    @media (min-width:576px) {
        width: 25rem;
    }
    padding: 2rem;
    overflow: scroll;
    ul {
        padding: 0 !important;
    }
    .cart-item {
        list-style-type: none;
        font-size: 1.2rem;
        padding-bottom: 0px !important;
    }
    .cart-item p {
        line-height: 15px;
        font-weight: bold;
        color: var(--darkGrey);
    }
`
