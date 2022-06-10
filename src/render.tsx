import ReactDOM from 'react-dom';
import {App} from './App';
import {store} from './redux/redux-store';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';

export let renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>
        , document.getElementById('root')
    );
}
