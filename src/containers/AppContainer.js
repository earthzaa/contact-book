import React from 'react';
import PropTypes from 'prop-types';

const AppContainer = (props) => {
    const { children } = props;

    return (
        <main>
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                crossOrigin="anonymous"
            />
            <div className="container pt-5">{children}</div>
        </main>
    );
};

AppContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppContainer;