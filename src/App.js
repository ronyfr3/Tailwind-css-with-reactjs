import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Service from './pages/Service';
import './styles/main.css';


const App = () => (
  <div className='flex flex-col items-center justify-between h-screen overflow-x-hidden'>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/service' component={Service} />
    </Switch>
    <Footer />
  </div>
);

export default App;
