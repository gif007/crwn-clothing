import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';

import './App.css';

const HatsPage = () => (
  <div>
    <h1>Hats</h1>
  </div>
)

const JacketsPage = () => (
  <div>
    <h1>Jackets</h1>
  </div>
)

const ShoesPage = () => (
  <div>
    <h1>Shoes</h1>
  </div>
)

const WomensPage = () => (
  <div>
    <h1>Womens Wear</h1>
  </div>
)

const MensPage = () => (
  <div>
    <h1>Mens Wear</h1>
  </div>
)

function App() {
  return (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/shop/hats" component={HatsPage} />
    <Route exact path="/shop/jackets" component={JacketsPage} />
    <Route exact path="/shop/shoes" component={ShoesPage} />
    <Route exact path="/shop/womens" component={WomensPage} />
    <Route exact path="/shop/mens" component={MensPage} />
  </Switch>
  )
}

export default App;
