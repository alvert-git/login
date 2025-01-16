import React from 'react'

const Footer = () => {
  return (
    <div>
    <footer className="footer p-5 h-5 mt-5" style={{backgroundColor:'aquamarine'}}>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h2>Ecommerce</h2>
                </div>
                
                <div className="col-md-3">
                    <h5>Contact Us</h5>
                    <ul className="list-unstyled">
                        <li>Email: info@example.com</li>
                        <li>Phone: +1233567890</li>
                        <li>Address: 123 Street, City, Country</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5>Follow Us</h5>
                    <ul className="list-inline footer-links">
                        <li className="list-inline-item">
                          <a href="#">
                                <i className="fab fa-facebook"></i>
                          </a>
                          </li>
                        <li className="list-inline-item">
                          <a href="#">
                                <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                                <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                                <i className="fab fa-linkedin"></i>
                          </a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5>Location</h5>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56482.09594176828!2d85.2873060000453!3d27.77493758628992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1ec21a0ec5f1%3A0x21faccfa9ccf1956!2sTokha!5e0!3m2!1sen!2snp!4v1732439737990!5m2!1sen!2snp" width="100%" height="200px" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-md-6">
                    <p>&copy; 2024 Your Website. All rights reserved.</p>
                </div>
                <div className="col-md-6 text-end">
                    <ul className="list-inline footer-links">
                        <li className="list-inline-item">
                            <a href="#" className="text-white">
                                Privacy Policy
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#" className="text-white">
                                Terms of Service
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#" className="text-white">
                                Sitemap
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer
