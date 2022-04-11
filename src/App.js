import logo from './logo.svg';
import './App.scss';
import Home from './components/Home';
import AddNewProduct from './components/AddNewProduct';
import { useState } from 'react';
import Product from './components/Product/Product';
import 'react-image-lightbox/style.css';
import Nav from './components/Navigation/Nav';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// function App() {
const App = () => {
  const [name, setName] = useState('ltphuoc');
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/weather">
          <div className="">In future</div>
        </Route>
        <Route path="/about">
          <div className="">I'm Phuoc</div>
        </Route>
        <Route path="/">
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
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
