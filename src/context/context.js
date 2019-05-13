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
        isTop: true
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
            cart: this.getStorageCart(),
            // singleProduct: this.getSingleProduct(),
            loading: false,

        }, () => this.addTotals())

    }

    getTotals = () => {
        let subTotal = 0
        let cartItems = 0
        this.state.cart.forEach(item => {
            subTotal += item.total
            cartItems += item.count
        })

        subTotal = parseFloat(subTotal.toFixed(2))
        let tax = subTotal * .06625
        tax = parseFloat(tax.toFixed(2))
        let total = subTotal + tax
        total = parseFloat(total.toFixed(2))

        return {
            cartItems,
            subTotal,
            tax,
            total
        }
    }

    addTotals = () => {
        const totals = this.getTotals()
        this.setState({
            cartItems: totals.cartItems,
            cartSubTotal: totals.subTotal,
            cartTax: totals.tax,
            cartTotal: totals.total
        })
    }

    getStorageCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || []
        return cart
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

    syncStorage = () => {
        localStorage.setItem('cart', JSON.stringify(this.state.cart))
    }

    addToCart = (id) => {
        let tempCart = [...this.state.cart]
        let tempProducts = [...this.state.storeProducts]
        let tempItem = tempCart.find(item => item.id === id)
        if (!tempItem) {
            tempItem = tempProducts.find(item => item.id === id)
            let total = tempItem.price
            let cartItem = { ...tempItem, count: 1, total }
            tempCart = [...tempCart, cartItem]
        } else {
            tempItem.count++
            tempItem.total = tempItem.price * tempItem.count
            tempItem.total = parseFloat(tempItem.total.toFixed(2))
        }

        this.setState({
            cart: tempCart
        }, () => {
            this.addTotals()
            this.syncStorage()
            this.openCart()
        })
    } 

    render() {

        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleSidebar: this.handleSidebar,
                handleCart: this.handleCart,
                openCart: this.openCart,
                closeCart: this.closeCart,
                addToCart: this.addToCart,
                handleNavMenu: this.handleNavMenu,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer }
