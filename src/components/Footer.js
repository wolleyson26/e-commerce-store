import React from 'react'
import { ProductConsumer } from '../context'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <ProductConsumer>
            {value => {
                const { socialData, links } = value
                return (
                    <FooterWrapper>
                        <div className="ui container">
                            {links.map(link => {
                                return <Link key={link.id} to={link.path} className='footer-links text-capitalize'>{link.text}</Link>
                            })}
                        </div>
                    </FooterWrapper>
                )
            }}
        </ProductConsumer>
    )
}

const FooterWrapper = styled.footer`
    background: var(--darkGrey);
    margin-top: 5rem;
    
    .footer-links {
        display:block;
        color: var(--mainWhite);
        padding: 1rem 0;
    }
`
