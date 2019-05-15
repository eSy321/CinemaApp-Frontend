import React from 'react';
import ReactDom from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import Repertoire from './components/repertoire'
import Kuba from './components/Kuba'

const FirstPage = () => {
    return <Repertoire />
}

const SeancePage = () => {
    return <Kuba />
}

const App = () => {
    return (
        <div>
        <BrowserRouter>
            <div>
                <Route path="/" exact component={FirstPage}/>
                <Route path="/Kuba" exact component={SeancePage}/>
            </div>
        </BrowserRouter>
        </div>
    )
};

ReactDom.render(
    <App />,
    document.querySelector("#root")
);