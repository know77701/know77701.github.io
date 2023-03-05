import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/users/UserList";
import User from "./pages/user/User";
import Newuser from "./pages/newuser/Newuser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import Login from "./pages/login/Login";

function App() {
  const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin;
  
  return (
    <Router>
        <Topbar />  
          <div className="container">
            <Sidebar />
            {admin && (
            <Routes>
              <Route path="/Login" element={<Login />}/>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/users/:userId" element={<User />} />
              <Route path="/newuser" element={<Newuser />}/>
              <Route path="/products" element={<ProductList />} />
              <Route path="/products/:productId" element={<Product />} />
              <Route path="/newProduct" element={<Newuser />}/>
            </Routes>
              )}
          </div>
    </Router>
  );
}

export default App;
