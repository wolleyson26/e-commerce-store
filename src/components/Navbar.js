import React from 'react'
import { FaBars, FaCartPlus } from 'react-icons/fa';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context'


export default function Navbar() {
    return (
        <ProductConsumer>
            {value => {
                const { links, cartItems } = value

                return (
                    <NavWrapper>
                        <div className="nav-center">
                            <FaBars className="nav-icon nav-bars" />
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
                                <FaCartPlus className="nav-icon" />
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
    padding: 1rem 1.5rem;
    background: var(--mainGrey);
    border-bottom: 3px solid var(--darkOrange);
    z-index: 1;
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
        font-size: 1.5rem;
        text-transform: capitalize;
        padding: .5rem 1.5rem;
         background: var(--mainGrey);
        transition: var(--mainTransition); 
        color: var(--mainBlack);
    }
    ul{
        list-style: none;
        padding: 0 !important;
    } 
    

`
