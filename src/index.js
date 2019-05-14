import React from 'react';
import ReactDom from 'react-dom'
import Repertoire from './repertoire'

const App = () => {
    return <Repertoire />;
};

ReactDom.render(
    <App />,
    document.querySelector("#root")
);