import React from 'react'
import './Home.css'
import SongButtons from './songbuttons.js'
const Home =  () => 
{
    return (
        <div className = "over">
            <h1 className = "musical"><u>Piano Palette</u></h1>
            <div>
            <SongButtons/>
            </div>
        </div>
    )
}
export default Home