import React from 'react';
import './App.css';
import {Heder} from './components/Header/Heder';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {Music} from './components/Music/Music';
import {News} from './components/News/News';
import {Settings} from './components/Settings/Settings';
import {Friends} from './components/Friends/Friends';
import {StatePropsType} from './redux/state';


type AppPropsType = {
    state: StatePropsType
    addPost: (postPost: string) => void
    addMessage: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
    updateNewMessageText: (newMessage: string) => void
}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Heder/>
                <Navbar friends={props.state.sidebar.friends}/>
                <div className="app-wrapper-content">
                    <Route path={'/profile'}
                           render={() => <Profile postData={props.state.profilePage.postData}
                                                  addPost={props.addPost}
                                                  newPostText={props.state.profilePage.newPostText}
                                                  updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path={'/dialogs'}
                           render={() => <Dialogs dialogsData={props.state.dialogsPage.dialogsData}
                                                  messages={props.state.dialogsPage.messages}
                                                  addMessage={props.addMessage}
                                                  NewMessageText={props.state.dialogsPage.NewMessageText}
                                                  updateNewMessageText={props.updateNewMessageText}/>}/>
                    <Route path={'/news'}
                           render={() => <News/>}/>
                    <Route path={'/music'}
                           render={() => <Music/>}/>
                    <Route path={'/settings'}
                           render={() => <Settings/>}/>
                    <Route path={'/friends'}
                           render={() => <Friends friends={props.state.sidebar.friends}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
