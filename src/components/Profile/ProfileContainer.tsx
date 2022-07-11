import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {ProfileDaTaType, setUserProfile} from '../../redux/profileReducer';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router';
import {profileAPI} from '../../api/api';

type MapStateToPropsType = {
    profile: ProfileDaTaType
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileDaTaType) => void
}

type PathParamsType = {
    userId: string,
}

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '12'
        }
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        profileAPI.getProfile(userId)
            .then(data => {
                this.props.setUserProfile(data)
            })
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)
