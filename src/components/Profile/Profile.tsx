import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {AppStoreType} from '../../redux/redux-store';


/*type ProfilePropsTyp = {
    store: AppStoreType

}*/

export const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};

