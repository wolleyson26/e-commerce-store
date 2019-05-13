import React, { Component } from 'react';
import { linkData } from './linkData';
import { items } from './productData'
import { socialData } from './socialData';

const ProductContext = React.createContext();

export default class ProductProvider extends Component {

    state = {
        sidebarOpen: false,
        cartOpen: false,
        links: linkData,
        cart: [],
        cartItems: 0,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        storeProducts: [],
        filteredProducts: [],
        featuredProducts: [],
        singleProduct: {},
        socialIcons: socialData,
    }

    componentDidMount() {

        this.setProducts(items)
    }

    setProducts = (products) => {
        let storeProducts = products.map(item => {
            const { id } = item.sys
            const image = item.fields.image.fields.file.url
            const product = { id, ...item.fields, image }
            return product
        })

        // filter featured products
        let featuredProducts = storeProducts.filter(item => item.featured === true)

        this.setState({
            storeProducts,
            filteredProducts: storeProducts,
            featuredProducts,
            // cart: this.getStorageCart(),
            // singleProduct: this.getSingleProduct(),
            loading: false,

        })

    }



    handleSidebar = () => {
        this.setState({
            sidebarOpen: !this.state.sidebarOpen
        })
    }

    handleCart = () => {
        this.setState({
            cartOpen: !this.state.cartOpen
        })
    }

    closeCart = () => {
        this.setState({ cartOpen: false })
    }

    openCart = () => {
        this.setState({ cartOpen: true })
    }

    render() {

        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleSidebar: this.handleSidebar,
                handleCart: this.handleCart,
                openCart: this.openCart,
                closeCart: this.closeCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer }
