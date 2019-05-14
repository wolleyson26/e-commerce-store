import React from 'react'
import { ProductConsumer } from '../../context';
import Product from '../Product'
import Title from '../Title'

export default function Products() {
    return (
        <ProductConsumer>
            {value => {
                const { storeProducts, setSingleProduct } = value

                return (
                    <div className="ui container">
                        <div className="mb"></div>
                        <Title title='our products' />
                        <div className="ui stackable grid" style={{ justifyContent: 'center' }}>
                            {storeProducts.map(product => {
                                return (
                                    <Product key={product.key} product={product} onClick={() => setSingleProduct(product.id)} />
                                )
                            })}
                        </div>
                    </div>
                )
            }}
        </ProductConsumer>
    )
} 
