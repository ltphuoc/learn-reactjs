import logo from "./logo.svg";
import "./App.scss";
import Home from "./components/Home";
import AddNewProduct from "./components/AddNewProduct";
import { useState } from "react";
import Product from "./components/Product/Product";
import "react-image-lightbox/style.css";

// function App() {
const App = () => {
  const [name, setName] = useState("ltphuoc");
  return (
    <div className="App">
      <header className="App-header content-left">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world with {name}</p>
        <Home />
      </header>
      <div className="content-right">
        <AddNewProduct />
        <hr />
        <Product />
      </div>
    </div>
  );
};

export default App;
