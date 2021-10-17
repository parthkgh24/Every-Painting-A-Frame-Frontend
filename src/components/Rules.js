import React from 'react'
import './Rules.css'
    

function Rules() {
    const pstyle = {
        fontSize: "20px"
    };
    
    return (
        <div id= "div">
            <p class="p" style = {pstyle}>The rules to the game are simple. </p>
            <p class="p" style = {pstyle}>Before the round begins, a timer will count down. Once it comes to an end, you will be shown a series of paintings.</p>
            <p class="p" style = {pstyle}>You have to write down what movie or show or song the painting reminds you of. It could be anything, from Star Wars to San Andreas. Write down the first thing that comes to mind, and click the submit button. </p>
            <p class ="p" style ={pstyle}>After the round ends, you will be shown the top responses to the piece of art that you just saw, and you can see how alike your responses were.</p>
        </div>
    )
}

export default Rules
