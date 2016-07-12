import test from 'tape'
import {fromJS} from 'immutable'

import { finder } from '../app/reducer'

test('finder', (t) => {


	const INITIAL_STATE = fromJS({
	  products: [
	    {id: 1, name:'Spaghetti', price: 1.79},
	    {id: 2, name:'Gold', price: 299.99},
	    {id: 3, name:'Rake', price: 24.95},
	    {id: 4, name:'Car', price: 34995.00},
	    {id: 5, name:'Falcon', price: 499.99}
	  ],
	  cart: [
	  	2, 1, 4
	  ]
	})

  const removeAction = {
  	id: 4
  }
  let cartIndexOfCar = finder(INITIAL_STATE, removeAction)
  t.deepEqual(cartIndexOfCar, 2, 'it can find an element')


  const someAction = {
  	id: 2
  }
  let cartIndexOfGold = finder(INITIAL_STATE, someAction)
  t.deepEqual(cartIndexOfGold, 0, 'finds some other thing')

	t.end()
})