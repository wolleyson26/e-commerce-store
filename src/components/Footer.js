import React from 'react'
import { ProductConsumer } from '../context'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <ProductConsumer>
            {value => {
                const { socialIcons, links } = value
                return (
                    <FooterWrapper>
                        <div className="ui container">
                            <div className="ui stackable grid">
                                <div className="nav-icons">
                                    {links.map(link => {
                                        return <Link key={link.id} to={link.path} className='footer-links text-capitalize'>{link.text}</Link>
                                    })}
                                </div>
                                <div className="copyright">
                                    <p className="text-capitalize">copyright &copy;mystore {new Date().getFullYear()}. all rights reserved</p>
                                </div>
                                <div className="social-icons">
                                    {socialIcons.map(icon => <a key={icon.id} href={icon.url} className='icon-link'>{icon.icon}</a>)}
                                </div>
                            </div>
                        </div>
                    </FooterWrapper>
                )
            }}
        </ProductConsumer>
    )
}

const FooterWrapper = styled.footer`
    background: #1B1C1D;
    margin-top: 5rem; 
    
    .footer-links {
        display:block;
        color: var(--mainWhite);
        padding: .5rem 0; 
    }
    .nav-icons {
        margin-right: 3rem;
        padding: 1rem 0;
        transition: var(--mainTransition);
    }
    .nav-icons:hover {
        color: var(--darkOrange);
    }
    .grid {
        justify-content: space-between;
        align-items: center;
        color: var(--mainWhite); 
    } 
    @media (max-width:576px){
        .social-icons, .copyright, .nav-icons {
            margin-top: 2rem;
        } 
        .social-icons{
            margin-bottom: 2rem;
        }
        .social-icons, .copyright {
            padding-left: 0;
        }
    }
    .icon-link{
        color: var(--mainWhite); 
        font-size: 2rem;
        padding-right: 1rem; 
        transition: var(--mainTransition);
    }
    .icon-link:hover {
        color: var(--darkOrange);
    }
`
