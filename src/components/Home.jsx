import React, { useContext, useEffect } from 'react'
import productContext from '../context/productContext';
import { CiSettings } from "react-icons/ci";


const Home = () => {
  const context = useContext(productContext);
  const { homeProduct, allHomeProduct } = context;

  useEffect(() => {
    allHomeProduct();
  }, []);
  return (
    <div>
      <div id="carouselExampleControls" className="carousel" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="../src/assets/hero1.png" className="d-block w-100 heroclass" alt="hero image"/>
    </div>
    <div className="carousel-item">
      <img src="../src/assets/hero3.png" className="d-block w-100 heroclass" alt="hero image"/>
    </div>
    <div className="carousel-item">
      <img src="../src/assets/hero2.png" className="d-block w-100 heroclass" alt="hero image"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


<div className="about_section">
<section className="py-3 py-md-5">
  <div className="container">
    <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
      <div className="col-12 col-lg-6 col-xl-5">
        <img className="img-fluid rounded" loading="lazy" src="../src/assets/about.png" alt="About 1"/>
      </div>
      <div className="col-12 col-lg-6 col-xl-7">
        <div className="row justify-content-xl-center">
          <div className="col-12 col-xl-11">
            <h2 className="mb-3">Who Are We?</h2>
            <p className="lead fs-4 text-secondary mb-3">we are passionate about revolutionizing the way you shop online. With a commitment to quality.</p>
            <p className="mb-5">Founded by a team of industry experts, we prioritize innovation and customer satisfaction. Our user-friendly website is designed to make your shopping experience enjoyable and efficient. Join us on this journey to discover the best products at unbeatable prices, delivered right to your doorstep.</p>
            <div className="row gy-4 gy-md-0 gx-xxl-5X">
              <div className="col-12 col-md-6">
                <div className="d-flex">
                  <div className="me-4 text-primary">
                  <CiSettings style={{ width: "32px", height: "32px" }}/>
                  </div>
                  <div>
                    <h2 className="h4 mb-3">Versatile Brand</h2>
                    <p className="text-secondary mb-0">To empower consumers with a convenient and enjoyable online shopping experience.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="d-flex">
                  <div className="me-4 text-primary">
                  <CiSettings style={{ width: "32px", height: "32px" }}/>
                  </div>
                  <div>
                    <h2 className="h4 mb-3">Digital Agency</h2>
                    <p className="text-secondary mb-0">To empower consumers with a convenient and enjoyable online shopping experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>


<div className="container mt-4">
        <h5 className="text-center">Featured Products</h5>
        <div className="row mt-5">
          {homeProduct.slice(0, 4).map((item) => (
            <div className="col-md-3 mb-4" key={item._id}>
              <div className="card">
                <img
                  src={`http://localhost:5000/uploads/${item.images[0]}`}
                  className="card-img-top"
                  alt="product image"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">Rs. {item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
