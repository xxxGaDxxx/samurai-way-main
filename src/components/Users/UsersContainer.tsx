import {connect} from 'react-redux';
import {
    followSuccess,
    setCurrentPage,
    unfollowSuccess,
    UsersType, toggleIsFollowingProgress, getUserThunkCreator, follow, unfollow
} from '../../redux/usersReducer';
import {AppStateType} from '../../redux/redux-store';
import React from 'react';
import Users from './Users';
import {Preloader} from '../common/Preloader/Preloader';


type MapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUser: (users: UsersType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
    getUserThunkCreator: (currentPage: number, pageSize: number) => void
}


export type UsersPropsType = {
    users: UsersType[]
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

        // this.props.toggleIsFetching(true)
        // // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{
        // //     withCredentials:true
        // // })
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUser(data.items)
        //     this.props.setTotalUsersCount(data.totalCount)
        //
        // })
    }

    onPageChanged = (pageNumber: number) => {

        this.props.getUserThunkCreator(pageNumber, this.props.pageSize)
        // this.props.setCurrentPage(pageNumber)
        // this.props.toggleIsFetching(true)
        // // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,{
        // //     withCredentials:true
        // // })
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUser(data.items)
        //
        // })
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

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    console.log(state.usersPage.followingInProgress)
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export const UsersContainer = connect(mapStateToProps, {
    followSuccess,
    unfollowSuccess,
    setCurrentPage,
    toggleIsFollowingProgress,
    getUserThunkCreator,
    follow,
    unfollow,
})(UsersAPIContainer);
