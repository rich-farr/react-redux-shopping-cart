import {fromJS} from 'immutable'

const INITIAL_STATE = fromJS({
  products: [
    {id: 1, name:'Spaghetti', price: 1.79},
    {id: 2, name:'Gold', price: 299.99},
    {id: 3, name:'Rake', price: 24.95},
    {id: 4, name:'Car', price: 34995.00},
    {id: 5, name:'Falcon', price: 499.99}
  ],
  cart: [1, 1]
})

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_PRODUCT_TO_CART':
      return state.set('cart', state.get('cart').push(action.id))
    default:
      return state
  }
}
