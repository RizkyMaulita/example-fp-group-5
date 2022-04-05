import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import { addToCart, subCart, removeCart } from "../store/action";

function CartPage () {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const checkDisabledAdd = (cp) => {
    if (cp?.quantityOrder === cp?.quantity) {
      return true
    } else {
      return false
    }
  }
  return (
    <div style={{ margin: '30px 0' }}>
      <h5>My Cart !</h5>
      <div style={{ width: '50%' }}>
        {
          cart?.map(cp => (
            <Card style={{ margin: '10px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <img src={cp?.imgUrl} width="200" height={"200"} />
                <Card.Body >
                  <Card.Title>{cp?.name}</Card.Title>
                  <Card.Text>
                    Price : {cp?.price}
                  </Card.Text>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Button variant='light' onClick={() => dispatch(subCart(cp))}> 
                      <FontAwesomeIcon icon={faMinusSquare} />
                    </Button>
                    <div style={{ margin: '0 10px'}}>{cp?.quantityOrder}</div>
                    <Button variant='light' disabled={checkDisabledAdd(cp)}
                      onClick={() => dispatch(addToCart(cp))}
                    > 
                      <FontAwesomeIcon icon={faPlusSquare} />
                    </Button>
                  </div>
                </Card.Body>
                <Button variant='light' style={{ alignSelf: 'start' }} onClick={() => dispatch(removeCart(cp))}>
                  <FontAwesomeIcon icon={faXmark} />
                </Button>
              </div>
            </Card>
          ))
        }
      </div>
    </div>
  )
}

export default CartPage