import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, ProfileDaTaType} from '../../redux/profileReducer';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router';
import {Redirect} from 'react-router-dom';


type MapStateToPropsType = {
    profile: ProfileDaTaType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
}

type PathParamsType = {
    userId: string,
}

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {

        let userId = this.props.match.params.userId
        console.log(typeof userId)
        if (!userId) {
            userId = '21'
        }
        this.props.getUserProfile(Number(userId))
    }


    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)
