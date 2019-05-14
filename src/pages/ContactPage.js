import React from 'react'
import Contact from '../components/ContactPage/Contact'
import styled from 'styled-components'

export default function ContactPage() {
    return (
        <ContactPageWrapper>
            <div className="nav-background"></div>
            <div className="ui container">
                <div className="mb"></div>
                <Contact />
            </div>
        </ContactPageWrapper>
    )
}

const ContactPageWrapper = styled.div`
    .nav-background {
        background: #1B1C1D;
        position: fixed;
        height: 70px;
        z-index: 0;
        top: 0;
        width: 100%;
        z-index: 1;
    }
`
