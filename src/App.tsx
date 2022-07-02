import React from 'react';
import './App.css';
import {Heder} from './components/Header/Heder';
import {Route} from 'react-router-dom';
import {Music} from './components/Music/Music';
import {News} from './components/News/News';
import {Settings} from './components/Settings/Settings';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {UsersContainer} from './components/Users/UsersContainer';
import {NavbarContainer} from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


export const App = () => {

    return (

        <div className="app-wrapper">
            <Heder/>
            <NavbarContainer/>
            <div className="app-wrapper-content">
                <Route path={'/profile/:userId?'}
                       render={() => <ProfileContainer/>}/>
                <Route path={'/dialogs'}
                       render={() => <DialogsContainer/>}/>
                <Route path={'/news'}
                       render={() => <News/>}/>
                <Route path={'/music'}
                       render={() => <Music/>}/>
                <Route path={'/settings'}
                       render={() => <Settings/>}/>
                <Route path={'/users'}
                       render={() => <UsersContainer/>}/>
            </div>
        </div>
    );
}


