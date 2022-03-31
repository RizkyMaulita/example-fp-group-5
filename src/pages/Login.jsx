import { Form, Button, Container } from "react-bootstrap";

function LoginPage() {
  return (
    <Container>
      <div className="row row-cols-2">
        <div>
          <img
            src="https://res.cloudinary.com/dxdgvvdwi/image/upload/v1648729302/Ilustration/undraw_login_re_4vu2_dhcgt0.svg"
            width="100%"
            height="90%"
            alt="img-login"
          />
        </div>
        <div>
          <h1 className="text-center mb-3">Login</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit">
                Sign In
              </Button>
            </div>
          </Form>
          {/* <div>Haven't an account ? Register here !</div> */}
        </div>
      </div>
    </Container>
  );
}

export default LoginPage;
