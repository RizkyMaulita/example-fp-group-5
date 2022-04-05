const initialState = {
  products: [],
  cart: [], // semua produk yang dimasukkin ke keranjang
  checkoutCart: [],  // produk2 yang dari cart tapi kita mau checkout / bayar
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'getProduct':
      const newState = {
        ...state, // duplicate
        products: action.payload
      }
      return newState
    case 'getCart':
      const newStateCart = {
        ...state, // duplicate
        cart: action.payload
      }
      return newStateCart
    default: 
      return state
  }
}


export default reducer