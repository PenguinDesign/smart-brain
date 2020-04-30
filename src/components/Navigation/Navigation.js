import React from 'react';

const Navigation = ({ onRouteChange }) => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <p onClick={() => onRouteChange('home')} className='f3 link dim black underline pa3 pointer'>Detect faces</p>
      <p onClick={() => onRouteChange('demographics')} className='f3 link dim black underline pa3 pointer'>Detect demographics</p>
    </nav>
  );
}

export default Navigation;