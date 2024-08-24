import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import StickyNavbar from './components/StickyNavbar';
import { CartProvider } from './components/CartContext';
import Cart from './components/Cart';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Contact from './pages/Contact';
import ProductDetails from './components/ProductDetails';
import FAQ from './components/sidebar/FAQ'
import Checkout from './components/Checkout';
import Account from './components/sidebar/Account';
import { DarkModeProvider } from './components/Darkmode';
import './App.css'

const theme = {
  colors: {
    primary: '#0d7c66',
    secondary: '#41b3a2',
    accent: '#bde8ca',
    light: '#d7c3f1',
  },
};

const user = {
  username: 'JohnDoe',
  email: 'john.doe@example.com',
  createdAt: '2022-01-15T03:24:00'
};

function App() {
  return (
    <DarkModeProvider>
      <CartProvider>
        <ThemeProvider theme={theme}>
          <Router basename="/djsalon">
            <StickyNavbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:productName" element={<ProductDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/account" element={<Account user={user} />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </CartProvider>
    </DarkModeProvider>
  );
}

export default App;