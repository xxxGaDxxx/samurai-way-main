import React from 'react';
import s from './Paginator.module.css';


type PaginatorType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void

}

export const Paginator: React.FC<PaginatorType> = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pageCount = Math.ceil(totalUsersCount / pageSize)
    let peges = []

    for (let i = 0; i <= pageCount; i++) {
        if (i <= 0) {
        } else {
            peges.push(i)
        }
    }

    return (
        <div>
            {peges.map(p => {

                return <span key={Math.random()} className={currentPage === p ? s.selectedPage : ''}
                             onClick={() => onPageChanged(p)}>{p}</span>

            })}
        </div>
    )
}
