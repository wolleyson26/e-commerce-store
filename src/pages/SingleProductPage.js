import React from 'react'
import styled from 'styled-components'
import Title from '../components/Title'
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

export default function SIngleProductPage() {
    return (
        <SinglePageWrapper>
            <div className="nav-background"></div>
            <div className="ui container">
                <div className="mb"></div>
                <Title title='Product details' center />
                <ProductConsumer>
                    {value => {
                        const { singleProduct, addToCart } = value

                        const { company, description, id, price, title, image } = singleProduct
                        console.log(singleProduct)
                        return (
                            <div className="product-info">
                                <div className="img-container">
                                    <img key={id} src={`../${image}`} alt="product image" />
                                </div>
                                <div className="mb"></div>
                                <div className="product-container">
                                    <h5 className="text-title">product: {title}</h5>
                                    <h5 className="text-title">price: ${price}</h5>
                                    <h5 className="text-title">details about product:</h5> <p>{description}</p>
                                    <button className="ui orange button" onClick={() => addToCart(id)}> Add To Cart</button>
                                    <Link to='/products' className="ui orange button" style={{
                                        margin
                                            : '.75rem'
                                    }}>Back To Products</Link>
                                </div>
                            </div>
                        )
                    }}
                </ProductConsumer>
            </div>
        </SinglePageWrapper>
    )
}

const SinglePageWrapper = styled.section`
     .nav-background {
        background: #1B1C1D;
        position: fixed;
        height: 70px;
        z-index: 0;
        top: 0;
        width: 100%;
        z-index: 1;
    } 
    .img-container img {
        max-width: 340px;
    }
`
