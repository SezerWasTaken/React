import React, { useEffect, useState, useRef } from "react";

function Timer() {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(true);

    const timer = useRef();

    useEffect(() => {
        if (running) {
            timer.current = setInterval(() => {
                setTime(prev => prev + 0.017);
            }, 10);
        } else {
            clearInterval(timer.current);
        }
        // componentWillUnmount
        return () => clearInterval(timer.current);
    }, [running]);

    const format = (time) => {
        let hours = Math.floor(time / 3600);
        let minutes = Math.floor((time % 3600) / 60);
        let seconds = Math.floor(time % 60);
        let centiseconds = Math.floor((time % 1) * 100);        

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        centiseconds = centiseconds < 10 ? "0" + centiseconds : centiseconds;

        return hours + ":" + minutes + ":" + seconds + ":" + centiseconds;
    };

    const start = () => {
        setRunning(true);
    };

    const stop = () => {
        setRunning(false);
    };

    const reset = () => {
        setTime(0);
        setRunning(false);
    };

    return (
        <div>
            <h1 id="myH1">Stopwatch</h1>
            <div id="container">
                <div id="display">
                    {format(time)}
                </div>
                <div >
                    <h3 id="desc">hour    :    time    :    minute    :    centisecond</h3>
                </div>
                <div id="controls">
                    {running ? null : <button id="startBtn" onClick={start}>Start</button>}
                    {running ? <button id="stopBtn" onClick={stop}>Stop</button> : null}
                    <button id="resetBtn" onClick={reset}>Reset</button>
                </div>
            </div>
        </div>
    );
}

export default Timer;
