import React from 'react';
import imgCore from './corejavascript.jpg';
import imgC from './c_book.jpg';
import imgOpen from './opencv_book.jpg';
import imgReact from './react.jpg';

const Book = () => {
    return (
        <div>
            <p>읽은 책 목록</p>
            <ul>
                <li>코어자바스크립트</li>
                <li>열혈강의 C++</li>
                <li>OpenCV4로 배우는 컴퓨터 비전과 머신 러닝</li>
                <li>리액트를 다루는 기술</li>
            </ul>
            <img src={imgCore} />
            <img src={imgC} />
            <img src={imgOpen} />
            <img src={imgReact} />
        </div>
    );
};

export default Book;