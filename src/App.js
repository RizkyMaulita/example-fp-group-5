import "./styles.css";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import { Container } from "react-bootstrap";
import ProductsPage from "./pages/ProductsPage";
import DetailProduct from "./pages/DetailProduct";
import CartPage from "./pages/Cart";
import CheckoutPage from "./pages/Checkout";
import { RequireAuth } from "./guard";

export default function App() {
  const checkLogin = () => {
    if (localStorage.getItem('userLogin')) {
      return true
    } else {
      return false
    }
  }

  return (
    <Container>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/product/:id" element={<DetailProduct />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <CheckoutPage />
          </RequireAuth>
        }></Route>
      </Routes>
    </Container>
  );
}
