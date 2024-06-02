import './App.css';
import Piano from './components/Piano.js';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Background from './Background.js';
import Home from './Home.js'

function App() 
{
  const imageUrl = "https://media.istockphoto.com/id/1076840920/vector/music-background.jpg?s=612x612&w=0&k=20&c=bMG2SEUYaurIHAjtRbw7bmjLsXyT7iJUvAM5HjL3G3I="
  return (
      <div className = "Page">
        <Background imageUrl = {imageUrl}/>
        <Router>
          <Routes>
            <Route exact path = "/" element = {<Home/>}/>
            {/* <Route exact path = "/piano" element = {<Piano/>}/> */}
            <Route path="/piano/:songName" element={<Piano/>} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
