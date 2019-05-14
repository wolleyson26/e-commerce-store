import React from 'react'
import styled from 'styled-components'
import CartSection from '../components/CartPage'

export default function CartPage() {
    return (
        <CartPageWrapper>
            <div className="nav-background"></div>
            <div className="ui container">
                <CartSection />
            </div>
        </CartPageWrapper>
    )
}


const CartPageWrapper = styled.div`
    min-height: 60vh;
    .nav-background {
        background: #1B1C1D;
        position: fixed;
        height: 70px;
        z-index: 0;
        top: 0;
        width: 100%;
        z-index: 1;
    }
`