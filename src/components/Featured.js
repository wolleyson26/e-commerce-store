import React from 'react'
import { ProductConsumer } from '../context';
import Title from './Title'
import Product from './Product'

export default function Featured() {
  return (
    <section className='ui container'>
      <div className="mb"></div>
      <Title title='featured products' center='true' />
      <div className="ui stackable grid" style={{justifyContent:'center'}}>
        <ProductConsumer>
          {value => {
            const { featuredProducts, } = value

            return featuredProducts.map(product => (
              <Product key={product.id} product={product} />
            ))
          }}
        </ProductConsumer>
      </div>
    </section>
  )
}
