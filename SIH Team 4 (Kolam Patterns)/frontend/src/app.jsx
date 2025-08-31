import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/gallery" component={Gallery} />
            </Switch>
        </Router>
    );
};

export default App;