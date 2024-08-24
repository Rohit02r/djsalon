import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import 'aos/dist/aos.css';
import AOS from 'aos';

import './Products.css'; // Import the CSS file for styling
import Shampoo from '../assests/Products/shampoo.jpg'
import FaceCream from '../assests/Products/facecream.jpg'
import BeardOil from '../assests/Products/beard oil.jpg'
import HairOil from '../assests/Products/hairoil.jpg'
import Comb from '../assests/Products/comb.jpg'
import Sunscreen from '../assests/Products/sunsreen.jpg'
import BodyLotion from '../assests/Products/bodylotion.jpg'
import NeemFaceWash from '../assests/Products/aleovera.jpg'
import TermericFaceWash from '../assests/Products/termeric.jpg'

const Products = () => {
  const navigate = useNavigate(); 

  const products = [{
    id: 'product1',
    img: Shampoo,
    title: 'Shampoo',
    description: 'Nourishing shampoo for healthy hair.',
    price: 299,
  },
  {
    id: 'product2',
    img: FaceCream,
    title: 'Face Cream',
    description: 'Hydrating face cream for a radiant complexion.',
    price: 499,
  },
  {
    id: 'product3',
    img: BeardOil,
    title: 'Beard Oil',
    description: 'Softens and conditions your beard.',
    price: 399,
  },
  {
    id: 'product4',
    img: HairOil,
    title: 'Hair Oil',
    description: 'Revitalizing oil for stronger hair.',
    price: 349,
  },
  {
    id: 'product5',
    img: Comb,
    title: 'Comb',
    description: 'High-quality comb for all hair types.',
    price: 149,
  },
  {
    id: 'product6',
    img: Sunscreen,
    title: 'Sunscreen',
    description: 'Protects your skin from harmful UV rays.',
    price: 599,
  },
  {
    id: 'product7',
    img: BodyLotion,
    title: 'Body Lotion',
    description: 'Moisturizing lotion for smooth skin.',
    price: 399,
  },
  {
    id: 'product8',
    img: NeemFaceWash,
    title: 'Neem Face Wash',
    description: 'Cleansing face wash for a fresh feel.',
    price: 249,
  },
  {
    id: 'product9',
    img: TermericFaceWash,
    title: 'Termeric Face Wash',
    description: 'Revitalizing eye cream to reduce dark circles.',
    price: 699,
  },
];
  const handleProductClick = (product) => {
    // Programmatically navigate to the product details page
    navigate(`/products/${product.title.toLowerCase().replace(/\s+/g, '-')}`, { state: { product } });
  };
  useEffect(() => {
    console.log('Initializing AOS');
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
    <section id="products" className="products-section py-5">
      <div className="container">
        <h2>Our Products</h2>
        <p className="products-intro">
          Explore our range of premium products designed to enhance your beauty and well-being.
        </p>
        <div className="row">
          {products.map((product, index) => (
            <div key={index} className="col-lg-4 col-md-6 d-flex" data-aos="fade-up">
              <div className="card flex-fill mb-4" onClick={() => handleProductClick(product)}>
                <img src={product.img} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-price"><strong>₹ {product.price}</strong></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default Products;