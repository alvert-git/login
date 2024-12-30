import React, { useState } from 'react'

const AddProduct = () => {
    const [product , setProduct] = useState({
        title : "",
        description : "",
        price : "",
        instock : ""
    })
    const handleChange = (e)=>{
      setProduct({...product, [e.target.name]: e.target.value})
      
    }
  return (
    <div className='container mt-4'>
      <h4>Add your product</h4>
      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" 
    name="title"
    value={product.title}
    onChange={handleChange}
    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
    <input type="text" 
    name="description"
    value={product.description}
    onChange={handleChange}
    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
    <input 
    type="number" 
    name="price"
    value={product.price}
    onChange={handleChange}
    className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Instock</label>
    <input type="number"
    name="instock"
    value={product.instock}
    onChange={handleChange}
    className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default AddProduct