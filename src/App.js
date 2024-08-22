import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import StickyNavbar from './components/StickyNavbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Contact from './pages/Contact';
import ProductDetails from './components/ProductDetails';

const theme = {
  colors: {
    primary: '#0d7c66',
    secondary: '#41b3a2',
    accent: '#bde8ca',
    light: '#d7c3f1',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
    <StickyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productName" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
