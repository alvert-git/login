import React, { useContext, useEffect } from "react";

import Apple from "../assets/img1.png";
import productContext from "../context/productContext";

const Profile = () => {
  const context = useContext(productContext);
  const {
    state: { cart },
    product,
    dispatch,
  } = context;
  console.log("this is porducts", product);
  // console.log("this is state", state);

  useEffect(() => {
    // fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h5 className="text-centre">This is my Products</h5>
      <div className="row">
        {product.map((item) => {
          return (
            <div className="col-md-3 mb-4" key={item.id}>
              <div className="card">
                <img src={Apple} className="card-img-top" alt="news images" />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">Rs. {item.price}</p>
                  {cart && cart.some((p) => p.id === item.id) ? (
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: item,
                        });
                      }}
                    >
                      Remove form cart
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: item,
                        });
                      }}
                    >
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
