// Background.js
import React from 'react';

const Background = ({ imageUrl }) => {
  const containerStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: '100vh',
    // position: 'relative', // Ensure position is set to relative
    // zIndex: -1, // Corrected: Set a lower z-index for the background
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
  };

  return <div style={containerStyle}></div>;
};

export default Background;
