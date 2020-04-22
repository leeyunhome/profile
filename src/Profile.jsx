import React from 'react';
import imgA from './img/camera.jpg';
import imgB from './img/fog.jpg';
import imgC from './img/tx2.jpg';
import imgD from './img/video2.jpg';
import imgE from './img/video3.jpg';
import imgF from './img/xavier.jpg';

const data = {
    neuezeal: {
        name: '이윤호',
        description: 'c, c++을 좋아하는 개발자'
    }
};

const Profile = ({ match }) => {
    const { username } = match.params;
    const profile = data[username];
    if (!profile) {
        return <div>존재하지 않는 사용자입니다.</div>
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.name}</p>
            <img src={imgB} width="100%" />
            <img src={imgA} width="100%" />
            <img src={imgC} width="100%" />
            <img src={imgD} width="100%" />
            <img src={imgE} width="100%" />
            <img src={imgF} width="100%" />

        </div>
    );
};

export default Profile;