import React, { useState } from "react"
import { Card, Form, Button } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { resetCart } from "../store/action";

function CheckoutPage () {
  const [ form, setForm ] = useState({
    name: '',
    telp: '',
    address: '',
    notes: ''
  })
  const cart = useSelector(state => state.cart)
  const total = useSelector(state => state.total)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onChangeForm = (e, key) => {
    const value = e?.target?.value 
    setForm({
      ...form,
      [key]: value
    })
  }

  const order = () => {
    const payload = {
      name: form.name,
      telp: form.telp,
      address: form.address,
      notes: form.notes,
      userID: localStorage.getItem('userLoginID') || '',
      products: cart,
      totalPrice: total,
      createdAt: new Date()
    }

    fetch('https://6245aa446b7ecf057c226ee2.mockapi.io/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      .then(response => response.json())
      .then(data => {
        dispatch(resetCart())
        toast.success('Success Order !', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        setTimeout(() => {
          navigate('/')
        }, 3000)
      })
      .catch(err => console.log(err))
  }

  const checkDisabledOrder = () => {
    if (!cart?.length) {
      return true
    } else {
      if (!form.name || !form.telp || !form.address) {
        return true
      } else {
        return false
      }
    }
  }

  return (
    <div style={{ margin: '30px 0' }}>
      <ToastContainer />
      <h1 style={{ textAlign: 'center', margin: '30px 0' }}>Checkout</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '45%' }}>
          <Card style={{ padding: '10px' }} >
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" value={form.name} onChange={e => onChangeForm(e, 'name')} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Telp Number</Form.Label>
                <Form.Control type="text" placeholder="Enter Telp Number"  value={form.telp} onChange={e => onChangeForm(e, 'telp')}  />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Address</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter Address"  value={form.address} onChange={e => onChangeForm(e, 'address')}  />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Notes</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter Notes"  value={form.notes} onChange={e => onChangeForm(e, 'notes')} />
              </Form.Group>
            </Form>
          </Card>
        </div>
       
        <Card style={{ width: '45%' }}>
          <Card.Header>
            <h4 className="text-center">Review Pesanan</h4>
          </Card.Header>
          <Card.Body>
            <div className="d-flex my-2">
              <div style={{ width: '20%'}}>Name</div>
              <div style={{ width: '80%'}}>: {form.name}</div>
            </div>
            <div className="d-flex my-2">
              <div style={{ width: '20%'}}>Telp Number</div>
              <div  style={{ width: '80%'}}>: {form.telp}</div>
            </div>
            <div className="d-flex my-2">
              <div style={{ width: '20%'}}>Address</div>
              <div  style={{ width: '80%'}}>: {form.address}</div>
            </div>
            <div className="d-flex my-2">
              <div style={{ width: '20%'}}>Notes</div>
              <div  style={{ width: '80%'}}>: {form.notes}</div>
            </div>
            <div className="d-flex mt-2 mb-4">
              <div style={{ width: '20%'}}>Pesanan</div>
              <div  style={{ width: '80%'}}>:</div>
            </div>
            {
            cart?.map(cp => (
              <Card style={{ margin: '10px 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                  <img src={cp?.imgUrl} width="100" height={"100"} />
                  <Card.Body >
                    <Card.Title>{cp?.name}</Card.Title>
                    <Card.Text style={{ textAlign: 'right', margin: 0 }}>
                      x{cp?.quantityOrder}
                    </Card.Text> 
                    <Card.Text style={{ textAlign: 'right' }}>
                      Rp {Number(cp?.price)?.toLocaleString('id-ID')}
                    </Card.Text>      
                  </Card.Body>
                </div>
              </Card>
            ))
          }
          <div className="d-flex mt-2 mb-4">
              <div style={{ width: '20%'}}>Total Pesanan</div>
              <div  style={{ width: '80%', textAlign: 'right', paddingRight: '1em', fontWeight: 'bolder' }}>
                Rp {Number(total)?.toLocaleString('id-ID')}
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <Button variant="primary" disabled={checkDisabledOrder()} onClick={() => order()}>
                Order
              </Button>
            </div>
          </Card.Body>
        </Card>

      </div>
    </div>
  )
}

export default CheckoutPage