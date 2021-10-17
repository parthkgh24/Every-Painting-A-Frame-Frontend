import React from 'react'
import { Link} from 'react-router-dom'

import './Homepage.css'

function Homepage() {
    return (
        <div className="div" style={{margin: "50px", float: "center"}}>
            <h1 id="h1">Every Painting a Frame</h1>
            <h2 id="h2">Welcome to the game!</h2>
            <br />
            {/* <BrowserRouter> */}
            <Link to ='/play' ><button id="homepgbtn">Start</button></Link>
            <br /><br />
            <Link to = '/rules' ><button id="homepgbtn">How to play</button></Link>
            
        </div>
    )
}

export default Homepage
