import React from 'react'
import PaintingInfo from './PaintingInfo'

function Results(props) {
    // for(var i= 0; i<props.arr.length; i++){
        // console.log(props.location.state.arr)
        // const array1 = ['6125073fb4dbcad2b24beb07', '6125074db4dbcad2b24beb08'];
        // console.log(array1)

       if(props.location.state){
        return (
            <div style = {{padding: 20}}>
                <h2>Results</h2>
                {/* {props.state.location.arr[0]} */}
                {/* <PaintingInfo pid = {props.arr[i]} /> */}
                {props.location.state.arr.map(arr =>(<PaintingInfo pid={arr} />))}
                {/* {array1.map(x => <h6><PaintingInfo pid = {x} /></h6>)} */}
            </div>
        )
    }
    else{
        return(
            <p>YOU SHALL NOT PASS</p>
        )
    } 
}

export default Results
