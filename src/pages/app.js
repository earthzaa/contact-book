import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import IndexPage from './index';
import PageNotFound from './404';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={IndexPage} exact />
                <Route path="*" component={PageNotFound} />
            </Switch>
        </Router>
    );
};

export default App;