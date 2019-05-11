import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context';

export default function Sidebar() {
    return (
        <ProductConsumer>
            {value => {
                const { links, sidebarOpen, handleSidebar } = value
                return (
                    <SideWrapper show={sidebarOpen}>
                        <ul>
                            {links.map(link => {
                                return (
                                    <li key={link.id}>
                                        <Link
                                            to={link.path}
                                            className='sidebar-links'
                                            onClick={handleSidebar}>{link.text}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </SideWrapper>
                )
            }}
        </ProductConsumer>
    )
}

const SideWrapper = styled.nav`
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--darkOrange);
    /* z-index: 1;  */
    transition: var(--mainTransition);
    transform: ${props => (props.show ? 'translateY(0)' : 'translateY(-120%)')};
    ul {
        list-style-type: none;
        padding: 0 !important;
    }
    .sidebar-links {
        display: block;
        font-size: 1.5rem;
        text-transform: capitalize;
        color: var(--mainWhite);
        padding: .5rem 1.5rem;
        transition: var(--mainTransition);
    }
    .sidebar-links:hover {
        background: var(--darkOrange);
        color: var(--mainWhite);
        padding: .5rem 1.5rem .5rem 2.5rem;
    } 
`
