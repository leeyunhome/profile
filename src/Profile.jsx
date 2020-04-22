import React from 'react';

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
        </div>
    );
};

export default Profile;