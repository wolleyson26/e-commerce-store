import React from 'react'
import Products from '../components/ProductsPage/Products'
import styled from 'styled-components'

export default function ProductsPage() {
    return (
        <ProductPageWrapper>
            <div className="nav-background"></div>
            <Products />
        </ProductPageWrapper>
    )
}

const ProductPageWrapper = styled.div`
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
