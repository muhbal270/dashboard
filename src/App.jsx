import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

// components
import Sidebar from "./components/Sidebar";
import Navbarcomp from "./components/Navbarcomp";
import Footer from "./components/Footer";

// pages
import DashboardPage from "./pages/DashboardPage";
import UserPage from "./pages/UserPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <div className="d-flex min-vh-100">
      <div className="w-auto">
        <Sidebar />
      </div>
      <div className="col overflow-auto">
        <Navbarcomp />

        <Routes>
          <Route path="/" Component={DashboardPage} />
          <Route path="/user" Component={UserPage} />
          <Route path="/cart" Component={CartPage} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
