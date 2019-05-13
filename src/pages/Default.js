import React from 'react'
import styled from 'styled-components'

export default function Default() {
    return (
        <DefaultPageWrapper>
            <div className="nav-background"></div>
            <div>
                <h1>Hello from default page</h1>
            </div>
        </DefaultPageWrapper>
    )
}

const DefaultPageWrapper = styled.div`
    .nav-background {
        background: #1B1C1D;
        position: absolute;
        height: 70px;
        z-index: 0;
        top: 0;
        width: 100%;
    }
`
