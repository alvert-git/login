import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Counter from "./components/Service";
import Alert from "./components/Alert";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Profile from "./components/Profile";
import { toast } from 'react-toastify';
import Userlist from './components/Userlist'
import User from './components/User'
import ProductState from "./context/ProductState";
import News from "./components/News";
import CartItems from "./components/cartitems";
import AddProduct from "./components/AddProduct";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);
  const [mode , setMode] = useState('dark');
  const [btn , btnText] = useState('Enable Light');
  

  const notify = (message) => toast(message);

  const toggleMode = ()=>{
    if (mode == 'light') {
      setMode('dark')
      btnText('Enable light')
      notify("Dark Mode Enabled")
    }else{
      setMode('light')
      btnText('Enable Dark')
      notify("Light Mode Enabled")
    }
  }

  return (
    <>
    <ProductState>
    <Router>
    <Navbar mode={mode} btn={btn} toggleMode={toggleMode} notify={alert} />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/news" element={<News />}/>
      <Route path='/user/:userId/:userName' element={<User/>}/>
      <Route path='/user' element={<Userlist />}/>
      <Route path="/CartItems" element={<CartItems/>}/>
      <Route path="/addproduct" element={<AddProduct />}/>
    </Routes>
    
    <Footer/>
  
    
    

      {/* <div className="container">
        <h1 className="heading">Hello World</h1>
        <div className="card">
          <h4>Count is {count}</h4>
          <button onClick={() => setCount((count) => count + 1)}>
            Increment
          </button>
          <button onClick={() => setCount((count) => count -1 )}>
            Decrement
          </button>
        </div>
      </div> */}
      </Router>
      </ProductState>
    </>
  );
}

export default App;
