import React from 'react';
import './App.css';
import {Heder} from './components/Header/Heder';
import {Profile} from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import {Music} from './components/Music/Music';
import {News} from './components/News/News';
import {Settings} from './components/Settings/Settings';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {FriendsContainer} from './components/Friends/FriendsContainer';
import {NavbarContainer} from './components/Navbar/NavbarContainer';



export const App= () => {

    return (

            <div className="app-wrapper">
                <Heder/>
                <NavbarContainer/>
                <div className="app-wrapper-content">
                    <Route path={'/profile'}
                           render={() => <Profile />}/>
                    <Route path={'/dialogs'}
                           render={() => <DialogsContainer />}/>
                    <Route path={'/news'}
                           render={() => <News/>}/>
                    <Route path={'/music'}
                           render={() => <Music/>}/>
                    <Route path={'/settings'}
                           render={() => <Settings/>}/>
                    <Route path={'/friends'}
                           render={() => <FriendsContainer/>}/>
                </div>
            </div>
    );
}


