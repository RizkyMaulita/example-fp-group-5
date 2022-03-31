import { Form, Button, Container } from "react-bootstrap";

function RegisterPage() {
  return (
    <Container>
      <div className="row row-cols-2">
        <div>
          <img
            src="https://res.cloudinary.com/dxdgvvdwi/image/upload/v1648729302/Ilustration/undraw_my_password_re_ydq7_d1bdf0.svg"
            width="100%"
            height="90%"
            alt="img-login"
          />
        </div>
        <div>
          <h1 className="text-center mb-3">Register</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
}

export default RegisterPage;
