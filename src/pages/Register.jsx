import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'
import React, { useState } from "react";

function RegisterPage() {
  const navigate = useNavigate()
  const [ form, setForm ] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [isPassMatch, setIsPassMatch] = useState(true)

  const changeEmail = (e) => {
    // console.log(e.target?.value)
    const value = e.target?.value

    setForm({
      ...form,
      email: value
    })
  }

  const changePassword = (e) => {
    // console.log(e.target?.value)
    const value = e.target?.value

    setForm({
      ...form,
      password: value
    })

    if (form.confirmPassword && value) {
      if (value !== form.confirmPassword) {
        setIsPassMatch(false)
      } else {
        setIsPassMatch(true)
      }
    }
  }

  const changeConfirmPassword = (e) => {
    // console.log(e.target?.value)
    const value = e.target?.value

    setForm({
      ...form,
      confirmPassword: value
    })

    if (form.password && value) {
      if (value !== form.password) {
        setIsPassMatch(false)
      } else {
        setIsPassMatch(true)
      }
    }
  } 

  const onSubmit = (e) => {
    e.preventDefault()
    if (form.email) {
      if (form.password && form.confirmPassword && form.password === form.confirmPassword) {
        console.log(form)
        // tinggal panggil BE untuk simpan data form register
        fetch('https://6245aa446b7ecf057c226ee2.mockapi.io/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: form.email,
            password: form.password,
            createdAt: new Date()
          })
        })
        .then(response => response.json())
        .then(data => {
          // jika berhasil register, asumsikan dia sudah auto login
          // so tinggal kita masukkan auth login di localstorage
          localStorage.setItem('userLogin', form.email)
          navigate('/')
        })
        .catch(err => console.log(err))
      } else {
        setIsPassMatch(false)
      }
    }
  }

  return (
    <Container style={{ marginTop: '70px' }}>
      <div className="row row-cols-2">
        <div>
          <img
            src="https://res.cloudinary.com/dxdgvvdwi/image/upload/v1648729302/Ilustration/undraw_my_password_re_ydq7_d1bdf0.svg"
            width="100%"
            height="70%"
            alt="img-login"
          />
        </div>
        <div>
          <h1 className="text-center mb-3">Register</h1>
          <Form onSubmit={(e) => onSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={form.email} onChange={(e) => changeEmail(e)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={form.password} onChange={(e) => changePassword(e)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={form.confirmPassword} onChange={(e) => changeConfirmPassword(e)} />
              {
                isPassMatch
                ? <div></div>
                : <div style={{ color: 'red', fontStyle: 'italic' }} > Password doesn't match !</div>
              }
            </Form.Group>

            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </div>
          </Form>
          <div style={{ 
            marginTop: '30px', 
            display: 'flex', 
            justifyContent: 'center',
            borderTop: '1px solid black',
            paddingTop: '20px',
            cursor: 'pointer'
          }}
            onClick={() => navigate("/login")}
          >
            Have an account ? Login here !
          </div>
        </div>
      </div>
    </Container>
  );
}

export default RegisterPage;
