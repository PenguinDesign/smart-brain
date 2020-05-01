import React from 'react';

const Navigation = ({ onRouteChange }) => {
  return (
    <nav style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
      <p onClick={() => onRouteChange('home')} className='f3 link dim black underline pa3 pointer'>Detect faces</p>
      <p onClick={() => onRouteChange('demo')} className='f3 link dim black underline pa3 pointer'>Detect demographics</p>
      <p onClick={() => onRouteChange('info')} className='f3 link dim black underline pa3 pointer'>How does it work?</p>
    </nav>
  );
}

export default Navigation;