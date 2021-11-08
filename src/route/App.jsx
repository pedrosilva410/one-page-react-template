import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
