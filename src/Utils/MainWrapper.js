import React from 'react';

import './MainWrapper.css';
import Navbar from '../navbar/Navbar';

const MainWrapper = Component => {
  return props => {
    return (
      <div className="MainWrapper">
        <Navbar {...props} />
        <main className="main-content">
          <Component {...props} />
        </main>
      </div>
    );
  };
};

export default MainWrapper;
