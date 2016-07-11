import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

class ProductDetail extends Component {
  render() {
    //console.log("WOW", this.props.products.toJS())
    const {id} = this.props.params
    const product = this.props.products.filter(product => product.get('id') == id ).first()
    const name = product.get('name')
    const price = product.get('price')
    const addToCart = (event) => {
      this.props.addToCart(id)
    }
    return (
      <div className='product' id={id}>
        <div> Product: {name}; price: ${price}</div>
        <div><button onClick={addToCart}>Add to Cart</button></div>
        <div><Link to='/'>View all</Link></div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.get('products')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (id) => {
      dispatch({
        type: 'ADD_PRODUCT_TO_CART',
        id: parseInt(id)
      })
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail)
