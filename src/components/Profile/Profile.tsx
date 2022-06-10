import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {AppStoreType} from '../../redux/redux-store';


type ProfilePropsTyp = {
    store: AppStoreType

}

export const Profile: React.FC<ProfilePropsTyp> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store} />
        </div>
    );
};

