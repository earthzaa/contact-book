import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import IndexPage from './index';
import PageNotFound from './404';
import FormContactPage from './form';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={IndexPage} exact />
                <Route path="/form" component={FormContactPage} exact />
                <Route path="*" component={PageNotFound} />
            </Switch>
        </Router>
    );
};

export default App;