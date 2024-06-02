// SongButtons.js
import React from 'react';
import SongButton from './songbutton';
import './songbuttons.css'

const SongButtons = () => {
  const songs = [
    { id: 1, name: 'saregamapa' },
    { id: 2, name: 'Interstellar' },
    { id: 3, name: 'Faded' },
    { id: 4, name: 'Someone You Loved' },
    { id: 5, name: 'No Time to Die' },
    { id: 6, name: 'National Anthem' },
    { id: 7, name: 'Happy Birthday' },
    { id: 8, name: 'Drag me Down' },
    { id: 9, name: 'Shape of You' },
    { id: 10, name: 'Hall of Fame' },
  ];

  const rowsize = 5;
  const numRows = Math.ceil(songs.length / rowsize);

  return (
    <div className="song-buttons-container">
      {[...Array(numRows)].map((_, rowIndex) => (
        <div key={rowIndex} className="song-buttons-row">
          {songs.slice(rowIndex * rowsize, (rowIndex + 1) * rowsize).map((song) => (
            <SongButton key={song.id} link="/piano" songName={song.name} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SongButtons;
