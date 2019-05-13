import React from 'react';
import styled from 'styled-components';
import mainBcg from '../images/storeBcg.jpeg'

export default function Hero({ img, title, children }) {
    return (
        <HeroWrapper img={img}>
            <div className="banner">
                <h1 className="title">{title}</h1>
                {children}
            </div>
        </HeroWrapper>
    )
}

const HeroWrapper = styled.div`
    text-align: center;
    min-height: 65vh;
    display: flex;
    align-items: center;
    justify-content: center; 
    color: var(--mainWhite);
    margin-top: -80px;
    background: radial-gradient(circle, #64686c, #505457, #3e4043, #2c2d2f, #1b1c1d),
    url(${props => props.img}) center/cover no-repeat; 
    .title {
        padding-top: 2rem;
        font-size: 3.5rem;
        text-shadow: 4px 4px 2px rgba(0,0,0,.3);
        text-transform: uppercase;
        letter-spacing: var(--mainSpacing);
    } 
`
