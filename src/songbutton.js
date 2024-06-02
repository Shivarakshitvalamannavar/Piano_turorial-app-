// // SongButton.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './songbutton.css'


// const SongButton = ({ link, songName }) => {
//   const handleClick = async () => {
//     try {
//       const response = await fetch(`http://localhost:8080/${encodeURIComponent(songName)}`);
//       const data = await response.json();

//       // Process and display the data (modify as needed)
//       console.log(data.notes);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <button className="song-button" onClick={handleClick}>
//       {songName}
//     </button>
//   );
// };

// // const SongButton = ({ link, songName }) => 
// // {
// //   return (
// //     <Link to = {link}>
// //       <button className = "song-button">{songName}</button>
// //     </Link>
// //   );
// // };

// export default SongButton;

// SongButton.js
import React from 'react';
import { Link } from 'react-router-dom';
import './songbutton.css';

const SongButton = ({ songName }) => {
  return (
    <Link to={`/piano/${encodeURIComponent(songName)}`}>
      <button className="song-button">{songName}</button>
    </Link>
  );
};

export default SongButton;
