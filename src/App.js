import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainNavbar from './components/MainNavbar';
import Home from './pages/Home';
import Products from './pages/Products'
import Contact from './pages/Contact'
import Users from './pages/User'
import Login from './pages/Login'
import Register from './pages/Register'
import Protectedcomp from './components/Protectedcomp';
import BookingForm from './pages/BookingForm';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import About from './pages/About';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />
     <MainNavbar />
      <Routes>
        
      <Route path='/' element={<Home />} />
              <Route element={<Protectedcomp />}>
                  <Route path='/products' element={<Products />} />
                  <Route path='/gallery' element={<Gallery />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/users' element={<BookingForm />} />
              </Route>

              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
