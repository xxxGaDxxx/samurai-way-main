import React from 'react';
import './App.css';
import {Heder} from './components/Header/Heder';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {Music} from './components/Music/Music';
import {News} from './components/News/News';
import {Settings} from './components/Settings/Settings';
import {Friends} from './components/Friends/Friends';
import { AppStoreType} from './redux/redux-store';


type AppType = {
    store: AppStoreType
}

export const App: React.FC<AppType> = (props) => {
    let state = props.store.getState()


    return (

            <div className="app-wrapper">
                <Heder/>
                <Navbar friends={state.sidebarPage.friends}/>
                <div className="app-wrapper-content">
                    <Route path={'/profile'}
                           render={() => <Profile postData={state.profilePage.postData}
                                                  dispatch={props.store.dispatch.bind(props.store)}
                                                  newPostText={state.profilePage.newPostText}

                           />}/>
                    <Route path={'/dialogs'}
                           render={() => <Dialogs dialogsData={state.dialogsPage.dialogsData}
                                                  messages={state.dialogsPage.messages}
                                                  newMessageText={state.dialogsPage.newMessageText}
                                                  dispatch={props.store.dispatch.bind(props.store)}
                           />}/>
                    <Route path={'/news'}
                           render={() => <News/>}/>
                    <Route path={'/music'}
                           render={() => <Music/>}/>
                    <Route path={'/settings'}
                           render={() => <Settings/>}/>
                    <Route path={'/friends'}
                           render={() => <Friends friends={state.sidebarPage.friends}/>}/>
                </div>
            </div>
    );
}


