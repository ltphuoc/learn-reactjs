import logo from './logo.svg';
import './App.scss';
import Home from './components/Home';
import AddNewProduct from './components/AddNewProduct';
import { useState } from 'react';
import Product from './components/Product/Product';
import 'react-image-lightbox/style.css';
import Nav from './components/Nav/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About/About';
import Todo from './components/Todo/Todo';
import Weather from './components/Weather/Weather';
// function App() {
const App = () => {
  const [name] = useState('Phuoc');
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <div className="App">
            <header className="App-header content-left">
              <img src={logo} className="App-logo" alt="logo" />
              <p>Hello world with {name}</p>
              <Todo />
            </header>
            <div className="content-right">
              <AddNewProduct />
              <hr />
              <Product />
            </div>
          </div>
        </Route>
        <Route path="/todo">
          <Todo />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/weather">
          <Weather />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <div className="not-found-page">404 not found</div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
