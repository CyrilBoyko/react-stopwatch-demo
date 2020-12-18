import React from 'react';
import useTimer from '../hook/useTimer';
import {formatTime} from '../utils';
import '../App.css'

const Timer = () => {
    const {timer, isActive, isPaused, handleStart, handleWait, handleStop, handleReset, wait} = useTimer(0)
    return (
        <div className="timer">
            <h3>React Stopwatch</h3>
            <div className='stopwatch-card'>
                <p>{formatTime(timer)}</p>
                <div className='buttons'>
                    {
                        !isActive || !isPaused ?
                            <button onClick={handleStart}>Start</button>
                            : <button onClick={handleStop}>Stop</button>
                    }
                    <button onClick={wait}>Wait</button>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </div>
        </div>
    );
}

export default Timer;