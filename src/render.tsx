import ReactDOM from 'react-dom';
import {App} from './App';
import {store} from './redux/redux-store';

import {BrowserRouter} from 'react-router-dom';
/*
import {Provider} from 'react-redux';

export let renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />  {/!*store={store}*!/}
            </Provider>
        </BrowserRouter>
        , document.getElementById('root')
    );
}
*/
