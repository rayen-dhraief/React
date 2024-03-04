import React from 'react';
import notFoundImage from '../assets/notfound.jfif';

const NotFound = () => {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <img src={notFoundImage} alt="Not Found" />
    </div>
  );
};

export default NotFound;
