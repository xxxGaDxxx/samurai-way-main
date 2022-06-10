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
import {StorePropsType} from './redux/state';


type AppType = {
    store: StorePropsType
}

export const App: React.FC<AppType> = (props) => {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Heder/>
                <Navbar friends={props.store._state.sidebar.friends}/>
                <div className="app-wrapper-content">
                    <Route path={'/profile'}
                           render={() => <Profile postData={props.store._state.profilePage.postData}
                                                  dispatch={props.store.dispatch.bind(props.store)}
                                                  newPostText={props.store._state.profilePage.newPostText}
                           />}/>
                    <Route path={'/dialogs'}
                           render={() => <Dialogs dialogsData={props.store._state.dialogsPage.dialogsData}
                                                  messages={props.store._state.dialogsPage.messages}
                                                  newMessageText={props.store._state.dialogsPage.newMessageText}
                                                  dispatch={props.store.dispatch.bind(props.store)}
                           />}/>
                    <Route path={'/news'}
                           render={() => <News/>}/>
                    <Route path={'/music'}
                           render={() => <Music/>}/>
                    <Route path={'/settings'}
                           render={() => <Settings/>}/>
                    <Route path={'/friends'}
                           render={() => <Friends friends={props.store._state.sidebar.friends}/>}/>
                </div>
                <p>q</p>
            </div>
        </BrowserRouter>
    );
}


