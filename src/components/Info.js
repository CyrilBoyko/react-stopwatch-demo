import "../App.css"

const Info = () => {
    return(
        <div className='info'>
            Hello, this is my React stopwatch.
            To start counting, press the Start button and the Start button changes to a Stop button.
            If you press the Stop button, the counter will stop and reset to zero.
            To pause the counter, you need to press the wait button twice (but rather quickly, no more than 300 ms between clicks).
            If you press the reset button while the stopwatch is running, it will not stop the counter, but will set the time to 00:00:00, but if the counter is stopped, it will simply reset to zero.
            Enjoy your use.
        </div>
    )
}

export default Info;