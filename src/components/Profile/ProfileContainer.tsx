import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, getUserStatus, updateStatus} from '../../redux/profileReducer';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router';
import {compose} from 'redux';
import {ProfileUserStatusType} from '../../api/api';

type MapStateToPropsType = {
    profile: ProfileUserStatusType
    status: string|null
    authorizedUserId:number|null
    isAuth:boolean
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateStatus: (status: string) => void
}
type PathParamsType = {
    userId: string ,
}

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            debugger
            userId= String(this.props.authorizedUserId)
            if(!Number(userId)){
                debugger
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(Number(userId))
        this.props.getUserStatus(Number(userId))
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
            />
        )
    }
}


let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId:state.auth.userId,
    isAuth:state.auth.isAuth,
})


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile,getUserStatus,updateStatus,}),
    withRouter,
)(ProfileContainer)


// let WithUrlDataContainerComponent = withRouter(ProfileContainer);
//
// export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent))
