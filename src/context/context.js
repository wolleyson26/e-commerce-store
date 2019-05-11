import React, { Component } from 'react';
import { linkData } from './linkData';

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
    }




    handleSidebar = () => {
        this.setState({
            sidebarOpen: !this.state.sidebarOpen
        })
    }

    render() {

        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleSidebar: this.handleSidebar
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer }
