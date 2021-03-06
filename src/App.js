import logo from './logo.svg';
import './App.scss';
import { useState } from 'react';
import Product from './components/Product/Product';
import 'react-image-lightbox/style.css';
import Nav from './components/Nav/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About/About';
import Todo from './components/Todo/Todo';
import Registration from './components/Registration/Registration';
import OTP from './components/OTP/OTP';
import Blog from './components/Blog/Blog';
import BlogDetail from './components/Blog/BlogDetail';
import TodoApp from './components/TodoApp/TodoApp';
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
            </header>
          </div>
        </Route>
        <Route path="/todo">
          <Todo />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <TodoApp />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/blog" exact>
          <Blog />
        </Route>
        <Route path="/blog/detail/:id">
          <BlogDetail />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/otp">
          <OTP />
        </Route>
        <Route path="*">
          <div className="not-found-page">404 not found</div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
