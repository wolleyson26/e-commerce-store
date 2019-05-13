import React from 'react'
import { FaBars, FaCartPlus } from 'react-icons/fa';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context'


export default function Navbar() {
    return (
        <ProductConsumer>
            {value => {
                const { links, cartItems, handleSidebar, handleCart } = value

                return (
                    <NavWrapper>
                        <div className="nav-center">
                            <FaBars className="nav-icon nav-bars" onClick={handleSidebar} />
                            <h1 className='text-title'>My Store</h1>
                            <nav>
                                <ul>
                                    {links.map(link => {
                                        return (
                                            <li key={link.id}>
                                                <Link to={link.path} className='nav-links'>{link.text}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </nav>
                            <div className="nav-cart">
                                <FaCartPlus className="nav-icon" onClick={handleCart} />
                                <div className="cart-items">{cartItems}</div>
                            </div>
                        </div>
                    </NavWrapper>
                )
            }}
        </ProductConsumer>
    )
}

const NavWrapper = styled.nav`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    width: 100%; 
    padding: 0rem 1.5rem; 
    background: #1B1C1D; 
    z-index: 2;
    .nav-center {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1170px;
        margin: 0 auto; 
    }
    .nav-center h1 {
        color: var(--darkOrange);  
    }
    .nav-icon {
        font-size: 1.5rem;
        cursor: pointer;
    }
    .nav-cart {
        color: var(--primaryColor);
        position: relative;
    }
    .cart-items {
        background: var(--darkOrange);
        color: var(--mainWhite);
        font-size: .85rem;
        position: absolute;
        top: -8px;
        right: -8px;
        padding: 0 5px;
        border-radius: 50%;
    }
    .nav-bars {
        color: var(--mainWhite);
    }

    @media (min-width:768px){
        .nav-bars {
            display: none; 
        }
        li {
            display: inline-block;
        } 
        nav {
            display: block;
        }  
    } 
    @media (max-width:768px) {
        nav {
            display: none;
        } 
    }
    .nav-links {
        display: block;
        font-size: 1.2rem;
        text-transform: capitalize;
        color: rgba(255, 255, 255, 0.7);;
        padding: 1rem 1.5rem !important;  
        transition: var(--mainTransition); 
        /* clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%); */
    }
    .nav-links:hover {
        color: var(--mainWhite);
        text-decoration: none;
        
    }
    
    ul{
        list-style: none;
        padding: 0 !important;
    }  
    

`
