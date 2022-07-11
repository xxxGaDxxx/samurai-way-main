import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    setUser,
    setTotalUsersCount, toggleIsFetching,
    unfollow,
    UsersType
} from '../../redux/usersReducer';
import {AppStateType} from '../../redux/redux-store';
import React from 'react';
import Users from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {usersAPI} from '../../api/api';


type MapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}


export type UsersPropsType = {
    users: UsersType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUser: (users: UsersType[]) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number

    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void

    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
}

class UsersAPIContainer extends React.Component<UsersPropsType> {
    componentDidMount() {

        this.props.toggleIsFetching(true)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{
        //     withCredentials:true
        // })
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            debugger

            this.props.toggleIsFetching(false)
            this.props.setUser(data.items)
            this.props.setTotalUsersCount(data.totalCount)

        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,{
        //     withCredentials:true
        // })
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUser(data.items)

        })
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
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}


export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUser,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersAPIContainer);
