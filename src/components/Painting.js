import axios from 'axios'
import { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import './Painting.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function Painting() {
    const [link, setLink] = useState("")
    const [id, setId] = useState("")
    const [resp, setResp] = useState("")
    const [arr, setArr] = useState([])

    const [count, setCount] = useState(1)
    
    const [temp, setTemp] = useState(0) //temp to maintain that paintings don't gt repeated
    const [inputValue, setInputValue] = useState("") //input for textarea

    
    //fcount for first timer before game starts, countdwnpl and key for the usual timer
    const [fcount, setFcount] = useState(0)
    const [countdwnpl, setCountdwnpl] = useState(true)
    const [key, setKey] = useState(0)
    useEffect(() => {
        axios.get('http://localhost:3001/painting')
            .then((res) => {
                console.log(res)
                console.log(res.data._id)
                if (arr.indexOf(res.data._id) === -1) {
                    setLink(res.data.link)
                    setId(res.data._id)
                    setArr(oldArray => [...oldArray, res.data._id]);
                }
                else {
                    setTemp(temp + 1)
                }
            })
    }, [count, temp, countdwnpl])

    const handleChange = (event) => {
        setResp(event.target.value)
        setInputValue(event.target.value)
    }

    const handleSubmit = (event) => {

        axios.post('http://localhost:3001/painting/submit', { id: id, responses: resp })
            .then((res) => {
                console.log(res.data)

                // console.log(resp)
            })
        setInputValue("")
        setCount(count + 1)
        
        setKey(key+1)
        setCountdwnpl(true)

        if (count <= 6) {
            console.log(arr)
            event.preventDefault()
        }

    }

    const handleSkip = (event) =>{
        setInputValue("")
        setArr(arr.slice(0,-1))
        console.log(arr)
        setTemp(temp+1)
        setKey(key+1)
        
        setCountdwnpl(true)
        
        event.preventDefault()
        
    }
    // const looper = (event) =>{
    //         while(count<=10){

    //             event.preventDefault()
    //             count+=1
    //         }
    // }

    const renderTimer = ({ remainingTime }) => {
        if (remainingTime === 0) {
            // setTimer(!timing)
            setCountdwnpl(true)
            return (<div className="timertxt">Moving on</div>)
        }
        return (
            <div className="timer">
                <div className="text">Remaining</div>
                <div className="value">{remainingTime}</div>
                <div className="text">seconds</div>
            </div>
        );
    }

    const renderTimer2 = ({ remainingTime }) => {
        if (remainingTime === 0) {
            return (<div className="timer2">Begin!</div>)
        }
        return (
            <div className="timer">
                <div className="text2">Begins in</div>
                <div className="value2">{remainingTime}</div>
                <div className="text2">seconds</div>
            </div>
        );
    }
    if(fcount===0){
        return(
            <div className="ftimer">
                <CountdownCircleTimer 
                isPlaying
                duration={3}
                size={200}
                colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                onComplete={() => {
                    setTimeout(() => {
                        setFcount(fcount+1)
                      }, 1000);
                      
                    
                return [true, 1000]
            }
            }
            >
                {renderTimer2}
            </CountdownCircleTimer>
        </div>
        )
    }
    if (count <= 6) {
        return (
            <div >
                <h4>What does this remind you of?</h4>
                <div className="tmingwrapper">
                    <div classname="tmercircle">
                        <CountdownCircleTimer
                            isPlaying={countdwnpl}
                            // timing={timing}
                            duration={20}
                            size={130}
                            key={key}
                            colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                        onComplete={() => {
                            setCount(count+1)
                        return [countdwnpl, 1000]}}
                        >
                            {renderTimer}
                        </CountdownCircleTimer>
                    </div>
                    <h6 id="no">Question {count}</h6>
                </div>
                {/* <h2>Hello once more</h2> */}
                <img className="image" src={link} alt="anakinblahxhbsbjh"></img>
                <br />

                <form >
                    <textarea rows="5" cols="52" onChange={handleChange} value ={inputValue} autoFocus></textarea>
                    <br />
                    <button id="ptbtn" type="submit" onClick={handleSubmit}>Submit</button>
                    <button id="skpbtn" onClick={handleSkip}>Pass</button>
                </form>
            </div>
        )
    }
    else {
        return (
            <Redirect to={{ pathname: "/Results", state: { arr: arr } }} />
            // <BrowserRouter>
        )
    }
}

export default Painting

