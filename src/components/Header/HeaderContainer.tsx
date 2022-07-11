import React from 'react';
import {Header} from './Header';

import {connect} from 'react-redux';
import { setAuthUserDate} from '../../redux/authReducer';
import {RouteComponentProps, withRouter} from 'react-router';
import {AppStateType} from '../../redux/redux-store';
import {headersAPI} from '../../api/api';


type MapStateToPropsType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    setAuthUserDate: (id: number, login: string, email: string) => void
}

type PathParamsType = {

}

type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & HeaderContainerPropsType


class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        //     withCredentials: true
        // })
        headersAPI.getHeader().then(data => {
                if (data.resultCode === 0) {
                    debugger
                    let {id, login, email} = data.data
                    this.props.setAuthUserDate(id, login, email)
                }
            })
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

export default connect(mapStateToProps, {setAuthUserDate})(WithUrlDataContainerComponent)