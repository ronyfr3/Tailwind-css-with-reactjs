import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';
import getSearchResults from './api/SearchApi';
import Home from './pages/Home';
import Service from './pages/Service';
import './styles/main.css';

const App = () => {
  const dispatch = useDispatch();
  let location = useLocation();
  
  useEffect(() => {
    dispatch(getSearchResults());
  }, [dispatch,location]);

  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/service' component={Service} />
      </Switch>
    </div>
  );
};

export default App;
