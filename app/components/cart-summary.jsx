import React, {Component} from 'react'
import {connect} from 'react-redux'

class CartSummary extends Component {
  render() {
    const items = this.props.cart.map((item, index) => {
      return this.props.products.filter(product => {
        if (product.toJS().id === item) {
          return product.toJS()
        }
      })
    })
    return (
      <div id='cart'>
        <h4>Shopping Cart</h4>
        <div className='products'>
          {items.map((item, index) => {
            return <div key={index}>{item.toJS()[0].name}</div>
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.get('products'),
    cart: state.get('cart')
  };
}

export default connect(
  mapStateToProps
)(CartSummary)
