import {connect} from 'react-redux';
import {
    followAC,
    setCurrentPageAC,
    setUserAC,
    setUsersTotalUsersCountAC,
    unfollowAC,
    UsersType
} from '../../redux/usersReducer';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import React from 'react';
import axios from 'axios';
import Users from './Users';


type MapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUser: (users: UsersType[]) => void


    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}


type UsersPropsType = {
    users: UsersType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUser: (users: UsersType[]) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number

    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

 class UsersAPIContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUser(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)

            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUser(response.data.items)

            })
    }

    render() {
        /*let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let peges = []

        for (let i = 0; i <= pageCount; i++) {
            if (i <= 0) {
            } else {
                peges.push(i)
            }
        }*/

        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            onPageChanged={this.onPageChanged}

        />
        /*<div className={s.users}>
            <div>
                {peges.map(p => {

                    return <span className={this.props.currentPage === p ? s.selectedPage : ''}
                                 onClick={() => this.onPageChanged(p)}>{p}</span>

                })}

            </div>

            {
                this.props.users.map((u: UsersType) =>
                    <div key={u.id}>
                        <span>
                            <div>

                                <img src={userPhoto}
                                     alt={''}/> {/!*u.photo.small !== null ? u.photo.small :userPhoto*!/}
                            </div>
                            <div>
                                {
                                    u.followed
                                        ? <button onClick={() => {
                                            this.props.unfollow(u.id)
                                        }}>Unfollow</button>
                                        : <button onClick={() => {
                                            this.props.follow(u.id)
                                        }}>Follow</button>
                                }

                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{'u.location.contry'}</div>
                                <div>{'u.location.citi'}</div>
                            </span>
                        </span>
                    </div>)
            }
        </div>*/

    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUser: (users: UsersType[]) => {
            dispatch(setUserAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setUsersTotalUsersCountAC(totalCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);
