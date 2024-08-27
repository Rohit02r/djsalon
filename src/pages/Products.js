import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../components/FavouritesContext';
import Footer from '../components/Footer';
import 'aos/dist/aos.css';
import AOS from 'aos';
import RedHeart from '../assests/Icon/rh.svg';
import EmptyHeart from '../assests/Icon/eh.svg';
import './Products.css';
import products from '../components/data/productsd';  // Import the product data

const Products = () => {
  const navigate = useNavigate(); 
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleProductClick = (product) => {
    navigate(`/products/${product.title.toLowerCase().replace(/\s+/g, '-')}`, {
      state: { product },
    });
  };

  return (
    <div>
      <section id="products" className="products-section py-5">
        <div className="container">
          <h2>Our Products</h2>
          <div className="row">
            {products.map((product) => (
              <div
                key={product.id}
                className="col-lg-4 col-md-6 d-flex"
                data-aos="fade-up"
              >
                <div
                  className="card flex-fill mb-4"
                  onClick={() => handleProductClick(product)}
                >
                  <img
                    src={product.img}
                    className="card-img-top"
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-price">
                      <strong>₹ {product.price}</strong>
                    </p>
                    <img
                      src={favorites.includes(product.id) ? RedHeart : EmptyHeart}
                      alt="Favorite"
                      id="favorite-icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(product.id);
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Products;
