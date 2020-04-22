import React from 'react';
import imgA from './opencv1.png';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h1>소개</h1>
            <p>기술스택</p>
            <ul>
                <li>c, c++, javascript</li>
                <li>android</li>
                <li>HTML, CSS</li>
                <li>SPA(React)</li>
                <li>Node.js</li>
                <li>MongoDB, MySQL</li>
                <li>opencv(기초)</li>
            </ul>
            <p>수행 프로젝트(열화상 영상에서 차간거리, 추돌예상시간 표시 및 DB(mysql)연동</p>
            <img src={imgA} width="500px"/>
          <a href="https://photos.app.goo.gl/qEnr4rq1GeA5acxR8">링크</a>

            

        </div>
    );
};

export default About;