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
                        <div className="social-icons">
                            <i className="facebook icon"></i>
                            <i className="instagram icon"></i>
                            <i className="linkedin icon"></i>
                        </div>
                    </SideWrapper>
                )
            }}
        </ProductConsumer>
    )
}

const SideWrapper = styled.nav`
    position: fixed;
    top: 73px;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--darkOrange);
    z-index: 1; 
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
        margin: 1rem 0;
        transition: var(--mainTransition);
    }
    .sidebar-links:hover {
        background: var(--darkOrange);
        color: var(--mainWhite);
        padding: .5rem 1.5rem .5rem 2.5rem;
    } 
    .social-icons {
        font-size: 1.5rem;
        color: var(--mainWhite);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 3rem;
    }
    .social-icons i {
        padding: 2.5rem;
    }
`
