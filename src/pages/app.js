import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import IndexPage from './index';
import PageNotFound from './404';
import CreateContactPage from './create';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={IndexPage} exact />
                <Route path="/create" component={CreateContactPage} exact />
                <Route path="*" component={PageNotFound} />
            </Switch>
        </Router>
    );
};

export default App;