import React from 'react';
import Home from './Home';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Profile from './Profile';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/neuezeal">neuezeal 프로필</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true}/>
      <Route path={["/about", "/info"]} component={About} />
      <Route path="/profile/:username" component={Profile} />
    </div>
  );
};

export default App;