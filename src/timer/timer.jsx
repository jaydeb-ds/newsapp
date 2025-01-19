import { useRef, useEffect, useState } from "react";
import './timer.css'

function Timer() {

    const [time, setTime] = useState(0)
    const [isActive, setActive] = useState(false)
    const [isPause, setPause] = useState(false)
    const intervalRef = useRef(null)
    const inputRef = useRef(null)

    const handleInput = (event) => {
        setTime(parseInt(event.target.value * 60))
    }

    const formatTime = () => {
        const min = String(Math.floor(time / 60)).padStart(2, '0');
        const sec = String(time % 60).padStart(2, '0');
        return `${min} : ${sec}`
    }

    const handleStart = () => {
        setActive(true);
        setPause(true)
        inputRef.current.value = ""
    }

    useEffect(() => {
        
        if(inputRef.current.value <= 0)
        {
            inputRef.current.value= 0
        }

        if (isActive && isPause && time > 0) {
            intervalRef.current = setInterval(() => {
                setTime((prev) => prev - 1)
            },1000)
        }
        else if( time === 0){
            clearInterval(intervalRef.current);
            setActive(false)
            // alert("Time is up")
        }
        return () => clearInterval(intervalRef.current);
    },[isActive,isPause,time])

    const handlePause = ()=>{
        setPause(!isPause)
    }

    const handleReset = ()=>
    {
        clearInterval(intervalRef.current)
        setActive(false)
        setPause(false)
        setTime(0)
    }

    return (<>

        <div className="countdown-timer">

            <div className="timer-display">
                <div>{formatTime()}</div>
                <input type="number" placeholder="Enter the time" onChange={handleInput} ref={inputRef}></input>

            </div>

            <div className="timer-controls">
                <button onClick={handleStart} disabled={isActive && isPause}>Start</button>
                <button onClick={handlePause} disabled={!isActive}> {isPause ? 'Pause': 'Resume'}</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>

    </>)
}

export default Timer;