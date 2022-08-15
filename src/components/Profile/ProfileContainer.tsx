import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, ProfileDaTaType} from '../../redux/profileReducer';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router';
import {withAuthRedirect} from '../../Hoc/withAuthRedirect';
import {compose} from 'redux';

type MapStateToPropsType = {
    profile: ProfileDaTaType
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

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}



let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,

})


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
        withRouter,
    withAuthRedirect,
)(ProfileContainer)


// let WithUrlDataContainerComponent = withRouter(ProfileContainer);
//
// export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent))
