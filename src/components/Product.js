import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaSearch, FaCartPlus } from 'react-icons/fa'
import { ProductConsumer } from '../context'

export default function Product({ product }) {
  return (
    <ProductConsumer>
      {value => {
        const { addToCart, setSingleProduct } = value
        return (
          <ProductWrapper>
            <div className="ui card">
              <div className="img-container">
                <img src={product.image} alt="product" className="card-img-top" style={{ height: '230px' }} />
              </div>
              <div className="product-icons">
                <Link to={`/product/${product.id}`} onClick={() => setSingleProduct(product.id)}><FaSearch className='icon'></FaSearch></Link>
                <FaCartPlus className="icon" onClick={() => addToCart(product.id)}></FaCartPlus>
              </div>
              <div className="content">
                <p className="header">{product.title}</p>
                <p className="text-main">${product.price}</p>
              </div>
            </div>
          </ProductWrapper>
        )
      }}
    </ProductConsumer>
  )
}

const ProductWrapper = styled.div`
  .card {
    transition: var(--mainTransition);
    margin-bottom: 10px !important;
    margin-top: 10px !important; 
  }
  .card:hover {
    box-shadow: 0px 0px 10px 0px rgba(119, 119, 119, 0.75); 
    cursor: pointer;
  }
  .card-img-top { 
    transition: var(--mainTransition);
  }
  .card:hover .card-img-top {
    transform: scale()(1.15);
    opacity: .2;
  }
  .img-container {
    position: relative;
    text-align: center;
  }
  .product-icons {
    transition: var(--mainTransition);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .product-icons {
    opacity: 0;
  }
  .card:hover .product-icons {
    opacity: 1;
  }
  .icon {
    font-size: 3rem;
    margin: 1rem; 
    padding: .5rem;
    color: var(--darkOrange);
    background: rgba(0, 0, 0, 0.7);
    border-radius: .5rem;
  }
  .content {
    display: flex;
    /* letter-spacing: 2px; */
    justify-content: space-around;
    text-transform: capitalize;
  }
`
