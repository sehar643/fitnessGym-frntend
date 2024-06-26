import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainNavbar from "./components/MainNavbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import User from "./pages/User";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Protectedcomp from "./components/Protectedcomp";
import BookingForm from "./pages/BookingForm";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import UpdateComp from "./pages/UpdateComp";
import Admin from "./pages/admin/Admin";
import toast, { Toaster } from "react-hot-toast";

export const SERVER_URL = "http://localhost:7000/api";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Toaster />
        <MainNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Protectedcomp />}>
            <Route path="/products" element={<Products />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/users" element={<BookingForm />} />
            <Route path="/user-list" element={<User />} />
            <Route path="/update/:id" element={<UpdateComp />} />
          </Route>
          <Route path="/admin" element={<Admin />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
