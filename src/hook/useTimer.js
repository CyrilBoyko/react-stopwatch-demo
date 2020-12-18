import {useState, useRef} from 'react';

const useTimer = (initialState = 0) => {
    const [timer, setTimer] = useState(initialState)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const countRef = useRef(null)

    const handleStart = () => {
        setIsActive(true)
        setIsPaused(true)
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
    }

    let counter = 0;

    const wait = () => {
        counter++;
        if (counter === 1)
            setTimeout(() => {
                handleWait()
            }, 300);
        setTimeout("counter = 0", 300)
    }

    function handleWait() {
        if (counter === 2)
            clearInterval(countRef.current)
        setIsPaused(false)
        if (counter === 1)
            setIsPaused(true)
    }

    const handleStop = () => {
        clearInterval(countRef.current)
        setIsActive(false)
        setIsPaused(false)
        setTimer(0)
    }

    const handleReset = () => {
        setTimer(0)
    }

    return {
        timer,
        isActive,
        isPaused,
        handleStart,
        handleWait,
        handleStop,
        handleReset,
        wait
    }
}

export default useTimer;