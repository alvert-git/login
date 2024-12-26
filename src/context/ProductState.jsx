import React, { useReducer, useState } from 'react'
import productContext from './productContext'
import { cartReducer } from './Reducer'

const ProductState = (props) => {
    // let p1 = {
    //     name:"apple",
    //     price:100
    // }
    // let update = ()=>{
    //     setTimeout(()=>{
    //         setProduct({
    //             name : "Mango",
    //             price : 200
    //         })
    //     },2000)
    // }
    
    const [articles, setArticles] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
       "https://newsapi.org/v2/top-headlines?country=us&apiKey=1f50d2f289fc4edbbbd70f2c1ff50f73"
      );
      if (!response.ok) {
        throw new Error(response.status);
      }
      const data = await response.json();
      setArticles(data.articles);
      console.log("Fetched data:", data.articles);
    } catch (error) {
      console.error("Fetching error:", error);
    }
  };
  let products = [
    {
      id: 1,
      title: "apple",
      description: "apple from mustang sadwfsdafsadfsadfsaddsf",
      price: 100,
      instock: 5,
    },
    {
      id: 2,
      title: "mango",
      description: "mango from kalaiya",
      price: 50,
      instock: 4,
    },
    {
      id: 3,
      title: "orange",
      description: "orange from gorkha",
      price: 100,
      instock: 5,
    },
    {
      id: 4,
      title: "orange",
      description: "orange from gorkha",
      price: 100,
      instock: 6,
    },
  ];

  const [product, setProduct] = useState(products);

  const [state , dispatch] = useReducer(cartReducer,{
    prodicts: product,
    cart: [],
});
  return (
    <productContext.Provider value={{ product, articles, fetchData, state, dispatch }}>
      {props.children}
    </productContext.Provider>
  )
}

export default ProductState
