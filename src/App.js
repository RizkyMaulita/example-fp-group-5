import "./styles.css";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import { Container } from "react-bootstrap";

export default function App() {
  return (
    <Container>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
    </Container>
  );
}
