import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from './pages/profile';
import ProductPage from './pages/product_page';

import './App.css'

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/oldgarmsbutgoodgarms" component={ProductPage} />
            </Switch>
        </div>
    );
};

export default App;