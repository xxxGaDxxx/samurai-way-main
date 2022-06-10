import React from 'react';
import './App.css';
import {Heder} from './components/Header/Heder';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import {Music} from './components/Music/Music';
import {News} from './components/News/News';
import {Settings} from './components/Settings/Settings';
import {Friends} from './components/Friends/Friends';
import { AppStoreType} from './redux/redux-store';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';


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
                           render={() => <Profile store={props.store}/>}/>
                    <Route path={'/dialogs'}
                           render={() => <DialogsContainer store={props.store}/>}/>
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


