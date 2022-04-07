import "./styles.css";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import { Container } from "react-bootstrap";
import ProductsPage from "./pages/ProductsPage";
import DetailProduct from "./pages/DetailProduct";
import MoviesPage from './pages/MoviesPage'
import DetailMovie from "./pages/DetailMovie";

export default function App() {
  return (
    <Container>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/product/:id" element={<DetailProduct />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movie/:id" element={<DetailMovie />}></Route>

      </Routes>
    </Container>
  );
}
