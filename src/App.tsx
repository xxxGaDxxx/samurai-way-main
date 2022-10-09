import React from 'react';
import './App.css'
import {Route} from 'react-router-dom';
import Dialogs from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import {NavbarContainer} from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router';
import {compose} from 'redux';
import {initializeApp} from './redux/appReducer';
import {AppStateType} from './redux/redux-store';
import {Preloader} from './components/common/Preloader/Preloader';


type MapStateToPropsType = {
    initialized:boolean
}

export type MapDispatchToPropsType = {
    initializeApp: () => void
}

type PathParamsType = {
}

export type HeaderContainerPropsType =  MapDispatchToPropsType &MapStateToPropsType

type PropsType = RouteComponentProps<PathParamsType> & HeaderContainerPropsType

 class App extends React.Component<PropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavbarContainer/>
                <div className="app-wrapper-content">
                    <Route path={'/profile/:userId?'}
                           render={() => <ProfileContainer/>}/>
                    <Route path={'/dialogs'}
                           render={() => <Dialogs/>}/>
                    {/*<Route path={'/news'}*/}
                    {/*       render={() => <News/>}/>*/}
                    {/*<Route path={'/music'}*/}
                    {/*       render={() => <Music/>}/>*/}
                    {/*<Route path={'/settings'}*/}
                    {/*       render={() => <Settings/>}/>*/}
                    <Route path={'/users'}
                           render={() => <UsersContainer/>}/>
                    <Route path={'/login'}
                           render={() => <Login/>}/>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType):MapStateToPropsType=> {
    return {
        initialized:state.app.initialized
    }
}


export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)


