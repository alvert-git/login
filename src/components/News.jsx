import React, { useEffect } from 'react'
import { useContext } from 'react';
import productContext from '../context/productContext';
import img from '../assets/img2.png'

const News = () => {
      const context = useContext(productContext);
      const { product ,fetchData, articles} = context;
    
    
      useEffect(() => {
        fetchData();
      }, []);
    
      return (
        <div className="container mt-4">
          <h5 className="text-centre">This is my News</h5>
          <div className="row">
            {articles.map((item) => {
              return (
                <div className="col-md-3 mb-4" key={item.url}>
                  <div className="card">
                    <img
                      src={item.urlToImage || img}
                      className="card-img-top"
                      alt="news images"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.title.slice(0, 80)}</h5>
                      <p className="card-text">{item.description}</p>
                      <a
                        href={item.url}
                        target="_blank"
                        className="btn btn-primary"
                      >
                        Read news
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    };
    

export default News
