import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './redux/redux-store';
import {App} from './App';


    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />  {/*store={store}*/}
            </Provider>
        </BrowserRouter>
        , document.getElementById('root')
    );


