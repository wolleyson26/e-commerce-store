import React from 'react'
import styled from 'styled-components'

export default function CartColumns() {
  return (
    <ColumnWrapper>
      <div className='ui equal width grid'>
        <div className="row text-center">
          <div className="column"><p className="text-uppercase">item</p></div>
          <div className="column"><p className="text-uppercase">item name</p></div>
          <div className="column"><p className="text-uppercase">price</p></div>
          <div className="column"><p className="text-uppercase">quantity</p></div>
          <div className="column"><p className="text-uppercase">remove</p></div>
          <div className="column"><p className="text-uppercase">total</p></div>
        </div>
        <div className="mb"></div>
      </div>
    </ColumnWrapper>
  )
}

const ColumnWrapper = styled.div`
  @media (max-width:768px){
    display: none;
  }
`
