import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileDaTaType} from '../../../redux/profileReducer';
import ProfileStatus from './ProfileStatus';



type ProfileInfoPropsType = {
    profile: ProfileDaTaType
    status:string
    updateStatus:(status:string)=>void
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    console.log(props.profile.photos)
    return (
        <div>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2yeV0nBNNcM90so1GkoNpKRGP2DbpNjdqZw&usqp=CAU" alt={''}/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <div>

                    <img src={props.profile.photos.large} alt={''}/>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
                <div>
                    <li>{props.profile.fullName}</li>
                    <li>{props.profile.userId}</li>
                    <li>{props.profile.aboutMe}</li>
                    <li>{props.profile.lookingForAJob ? 'не ищу работу' : 'ищу работу'}</li>
                    <li>{props.profile.lookingForAJobDescription}</li>
                </div>
            </div>
        </div>
    );
};

