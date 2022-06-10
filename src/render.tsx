import ReactDOM from 'react-dom';
import {App} from './App';
import {store} from './redux/state';
import React from 'react';

export let renderTree = () => {
    ReactDOM.render(<App
        store={store}/>, document.getElementById('root')
    );
}
