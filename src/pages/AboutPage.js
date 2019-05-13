import React from 'react'
import Info from '../components/AboutPage/Info'
import Hero from '../components/Hero'
import aboutBcg from '../images/aboutBcg.jpeg'
import styled from 'styled-components'

export default function AboutPage() {
    return (
        <PageWrapper>
            <div className="nav-background"></div>
            <Info />
        </PageWrapper>
    )
}

const PageWrapper = styled.div`
    .nav-background {
        background: #1B1C1D;
        position: absolute;
        height: 70px;
        z-index: 0;
        top: 0;
        width: 100%;
    }
`
