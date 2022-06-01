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
}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Heder/>
                <Navbar friends={props.state.sidebar.friends}/>
                <div className="app-wrapper-content">
                    <Route path={'/profile'}
                           render={() => <Profile postData={props.state.profilePage.postData}/>}/>
                    <Route path={'/dialogs'}
                           render={() => <Dialogs dialogsData={props.state.dilogsPage.dialogsData}
                                                  messages={props.state.dilogsPage.messages}/>}/>
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
