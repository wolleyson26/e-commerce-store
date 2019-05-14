import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaFrown } from 'react-icons/fa'

export default function Default() {
    return (
        <DefaultPageWrapper>
            <div className="nav-background"></div>
            <div className="ui container text-center">
                <div className="mb"></div>
                <FaFrown className='frown' />
                <h1>404 page not found</h1>
                <Link to='/' className='ui basic button'>Back To Home</Link>
            </div>
        </DefaultPageWrapper>
    )
}

const DefaultPageWrapper = styled.div`
    min-height: 60vh; 
    h1 {
        text-transform: capitalize;
    }
    .frown {
        font-size: 5rem;
        color: var(--darkOrange);
    }
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
