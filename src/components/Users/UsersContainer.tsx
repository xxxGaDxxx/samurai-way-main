import {connect} from 'react-redux';
import {
    followSuccess,
    setCurrentPage,
    unfollowSuccess,
    toggleIsFollowingProgress,
    requestUsers,
    follow,
    unfollow
} from '../../redux/usersReducer';
import {AppStateType} from '../../redux/redux-store';
import React, {ComponentType} from 'react';
import Users from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {compose} from 'redux';
import {withAuthRedirect} from '../../Hoc/withAuthRedirect';
import {ItemsUsersType} from '../../api/api';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from '../../redux/usersSelectors';


type MapStateToPropsType = {
    users: ItemsUsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUser: (users: ItemsUsersType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
    getUserThunkCreator: (currentPage: number, pageSize: number) => void
}


export type UsersPropsType = {
    users: ItemsUsersType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number

    setCurrentPage: (pageNumber: number) => void

    isFetching: boolean
    followingInProgress: Array<number>
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void

    getUserThunkCreator: (currentPage: number, pageSize: number) => void
}

class UsersAPIContainer extends React.Component<UsersPropsType> {
    componentDidMount() {

        this.props.getUserThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {

        this.props.getUserThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

// let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose<ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
        followSuccess,
        unfollowSuccess,
        setCurrentPage,
        toggleIsFollowingProgress,
        getUserThunkCreator: requestUsers,
        follow,
        unfollow,
    }),
)(UsersAPIContainer)


// export const UsersContainer = connect(mapStateToProps, {
//     followSuccess,
//     unfollowSuccess,
//     setCurrentPage,
//     toggleIsFollowingProgress,
//     getUserThunkCreator,
//     follow,
//     unfollow,
// })(UsersAPIContainer);
