import React from 'react'
import styled from 'styled-components'

export default function Title({ title, center }) {
  return (
    <TitleWrapper className='row' center={center}>
      <h1 className="text-title">{title}</h1>
      <div className="title-underline"></div>
      <div className="mb"></div>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
    text-align: ${props => (props.center ? 'center' : 'left')};
    .title-underline {
        height: .25rem;
        width: 7rem;
        background: var(--darkOrange);
        margin: ${props => (props.center ? '0 auto' : '0')};
    }
`


