import {
    addMessage,
    addPost,
    state,
    subsckibe,
    updateNewMessageText,
    updateNewPostText
} from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';

const renderEntireTree = () => {
    ReactDOM.render(<App state={state} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText}
                         updateNewMessageText={updateNewMessageText}/>, document.getElementById('root')
    );
}
subsckibe(renderEntireTree)