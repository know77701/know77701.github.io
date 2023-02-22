import {BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector(state => state.user.currentUser);
  console.log(user);
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<ProductList/>}>
          <Route path=":category" element={<ProductList />} />
        </Route>
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}></Route>
        <Route path="/register"element={user ? <Navigate to="/" /> : <Register />}></Route>
      </Routes>
    </Router>
  )
};  

export default App;