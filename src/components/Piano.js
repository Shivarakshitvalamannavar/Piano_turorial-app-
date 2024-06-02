import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Piano.css';
import { Key } from './Key.js';
import { NOTES, VALID_KEYS, KEY_TO_NOTE } from '../global/constants';

const Piano = () => {
  const [pressedKeys, setPressedKeys] = useState([]);
  const [notes, setNotes] = useState([]);
  const { songName } = useParams();

  const playNote = (note) => {
    if (note) {
      const noteAudio = new Audio(`../../notes/${note}.mp3`);
      noteAudio.play();
    }
  };

  const handleKeyDown = (event) => {
    if (event.repeat) {
      return;
    }
    const key = event.key;
    if (!pressedKeys.includes(key) && VALID_KEYS.includes(key)) {
      setPressedKeys((prevKeys) => [...prevKeys, key]);
    }
    playNote(KEY_TO_NOTE[key]);
  };

  const handleKeyUp = (event) => {
    const key = event.key;
    setPressedKeys((prevKeys) => prevKeys.filter((pressedKey) => pressedKey !== key));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/${encodeURIComponent(songName)}`);
        const data = await response.json();
        setNotes(data.notes);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [songName]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [pressedKeys]);

  const keys = NOTES.map((note, index) => (
    <Key key={index} note={note} pressedKeys={pressedKeys} />
  ));

  const audioFiles = NOTES.map((note, index) => (
    <audio key={index} id={note} src={`../../notes/${note}.mp3`} />
  ));

  return (
    <div>
      <h2 className="over">Try playing the song!!</h2>
      <div className="piano-container">
        <div className = "instruct">
        <p>Instructions (Piano Keys:Keyboard Keys):<br></br>C:z  D:x  E:c  F:v  G:b  A:n  B:m<br></br>Df:s  Ef:d  Gf:g  Af:h  Bf:j</p>
        </div>
        <div className="piano">{keys}</div>
        <div>{audioFiles}</div>
      </div>
      <div className="over">
        <Link to="/">
          <button className="HomeButton">Back to Home Page</button>
        </Link>
      </div>
      <div className='notes-container'>
        {/* Display the notes on the piano page */}
        {notes.map((note, index) => (
          <div key={index} className="note" style={{ left: `${10 + index * 20}px`, zIndex: index + 1, }}>
          {note}    </div>
        ))}
      </div>
    </div>
  );
};

export default Piano;


// import _ from 'lodash';
// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import './Piano.css';
// import { Key } from './Key.js'
// import {
//   NOTES,
//   VALID_KEYS,
//   KEY_TO_NOTE,
// } from '../global/constants';

// class Piano extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       pressedKeys: [],
//     };
//   }

//   playNote = (note) => {
//     if (!_.isEmpty(note)) {
//       const noteAudio = new Audio(document.getElementById(note).src);
//       noteAudio.play();
//     }
//   }

//   handleKeyDown = (event) => {
//     if (event.repeat) {
//       return;
//     }
//     const key = event.key;
//     const updatedPressedKeys = [...this.state.pressedKeys];
//     if (!updatedPressedKeys.includes(key) && VALID_KEYS.includes(key)) {
//       updatedPressedKeys.push(key);
//     }
//     this.setState({
//       pressedKeys: updatedPressedKeys,
//     });
//     this.playNote(KEY_TO_NOTE[key]);
//   }

//   handleKeyUp = (event) => {
//     const index = this.state.pressedKeys.indexOf(event.key);
//     if (index > -1) {
//       this.setState(state => ({
//         pressedKeys: state.pressedKeys.splice(index, 1)
//       }));
//     }
//   }

//   componentDidMount = () => {
//     window.addEventListener('keydown', this.handleKeyDown);
//     window.addEventListener('keyup', this.handleKeyUp);
//   }

//   getnotes = async () =>
//   {
//     const response = await fetch('http://localhost:8080',
//     {
//       method: 'GET'
//     })
//     const notes = await response.json()
//     console.long(notes)
//   }

//   render() {
//     const keys = _.map(NOTES, (note, index) => {
//       return (
//         <Key
//           key={index}
//           note={note}
//           pressedKeys={this.state.pressedKeys}
//         />
//       );
//     });

//     const audioFiles = _.map(NOTES, (note, index) => {
//       return (
//         <audio
//           id={note}
//           key={index}
//           src={`../../notes/${note}.mp3`}
//         />
//       );
//     });

//     // async function fetchData() {
//     //   try {
//     //     const response = await fetch('http://localhost:8080/');
//     //     const data = await response.json();
    
//     //     // Process and display the data
//     //     data.forEach((document) => {
//     //       document.notes.forEach((note) => {
//     //         console.log(note); // Display each element separately (you can modify this part as needed)
//     //       });
//     //     });
//     //   } catch (error) {
//     //     console.error(error);
//     //   }
//     // }

//     // fetchData();

//     return (
//       <div>
//         <h2 className = "over">Try playing the song!!</h2>
//         <div className = "piano-container">
//           <div className="piano">
//             {keys}
//           </div>
//           <div>
//             {audioFiles}
//           </div>
//         </div>
//         <div className = "over">
//         <Link to = "/">
//           <button className = "HomeButton">Back to Home Page</button>
//         </Link>
//         </div>
//       </div>
//     );
//   }
// }

// export default Piano;
