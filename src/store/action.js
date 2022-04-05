export const fetchProduct = () => {
  return (dispatch, getState) => {
    fetch("https://6245aa446b7ecf057c226ee2.mockapi.io/products")
    .then(response => response.json())
    .then(data => {
      const action = {
        type: 'getProduct',
        payload: data
      } 
      dispatch(action)
    })
    .catch(err => console.log(err))
  }
}

export const addToCart = (product) => {
  return (dispatch, getState) => {
    console.log(product, '<<< product untuk dimasukkin ke cart')
    const cart = getState().cart
    console.log(cart, '<<< cart')

    const findCart = cart?.find(cp => cp?.id === product?.id)
    let newCart = []
    if (findCart) { // jika sebelumnya sudah pernah masukin product 
      newCart = cart?.map(cp => {
        if (cp?.id === product?.id) {
          const newQuantityOrder = cp.quantityOrder + 1
          const stockProduct = product?.quantity
          if (newQuantityOrder > stockProduct) {
            // dia tidak bisa menambahkan jika misalkan di cartnya udah mencapai semua stock
          } else {
            cp.quantityOrder++
          }
        }
        return cp
      })
    } else {
      product.quantityOrder = 1
      newCart = [
        ...cart,
        product
      ]
    }
    const action = {
      type: 'getCart',
      payload: newCart
    }
    dispatch(action)
  }
}

export const subCart = (product) => {
  return (dispatch, getState) => {
    const cart = getState().cart

    const newCart = []
    
    for (let i = 0; i < cart?.length; i++) {
      const cp = cart[i]
      if (cp?.id === product?.id) {
        cp.quantityOrder--
      }
      if (cp.quantityOrder > 0) {
        newCart.push(cp)
      }
    }

    const action = {
      type: 'getCart',
      payload: newCart
    }
    dispatch(action)
  }
}

export const removeCart = (product) => {
  return (dispatch, getState) => {
    const cart = getState().cart

    const newCart = []
    
    for (let i = 0; i < cart?.length; i++) {
      const cp = cart[i]
      if (cp?.id !== product?.id) {
        newCart.push(cp)
      }
    }

    const action = {
      type: 'getCart',
      payload: newCart
    }
    dispatch(action)
  }
}