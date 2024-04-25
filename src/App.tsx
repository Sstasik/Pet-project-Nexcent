import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/NavBar';

import Footer from './footer/Footer';
import HomePage from './pages/homepage/HomePage';
import Service from './pages/service/Service';
import Testimotial from './pages/testimonial/Testimotial';
import Product from './pages/product/Product';
import Features from './pages/features/Features';
import FAQ from './pages/FAQ/FAQ';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service" element={<Service />} />
        <Route path="/features" element={<Features />} />
        <Route path="/product" element={<Product />} />
        <Route path="/testimonial" element={<Testimotial />} />
        <Route path="/FAQ" element={<FAQ />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
