import ReactDOM from 'react-dom';
import {App} from './App';
import {store} from './redux/state';
import React from 'react';

export let render = () => {
    ReactDOM.render(<App
        store={store}/* addPost={store.addPost.bind(store)}
                         addMessage={store.addMessage.bind(store)}
                         updateNewPostText={store.updateNewPostText.bind(store)}
                         updateNewMessageText={store.updateNewMessageText.bind(store)}*//>, document.getElementById('root')
    );

}