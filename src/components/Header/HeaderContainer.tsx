import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {getAuthUserDate} from '../../redux/authReducer';
import {RouteComponentProps, withRouter} from 'react-router';
import {AppStateType} from '../../redux/redux-store';


type MapStateToPropsType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getAuthUserDate: () => void
}

type PathParamsType = {

}

type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & HeaderContainerPropsType


class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getAuthUserDate()
    }

    render() {
        return <>
            <Header data={this.props}/>
        </>

    }
}

let mapStateToProps = (state: AppStateType) :MapStateToPropsType=> {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        email: state.auth.email,
        id: state.auth.userId,
    }
}


let WithUrlDataContainerComponent = withRouter(HeaderContainer);

export default connect(mapStateToProps, {getAuthUserDate})(WithUrlDataContainerComponent)