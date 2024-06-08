import React, { useEffect, useState, useRef } from 'react';

function Timer() {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    const timer = useRef();

    useEffect(() => {
        if (running) {
            timer.current = setInterval(() => {
                setTime(prev => prev + 0.017);
            }, 10);
        } else {
            clearInterval(timer.current);
        }
        return () => clearInterval(timer.current);
    }, [running]);

    const startBtn = () => {
        setRunning(true);
    };
    const stopBtn = () => {
        setRunning(false);
    };
    const restartBtn = () => {
        setTime(0);
        setRunning(false);
    };

    const format = (time) => {
        let hours = Math.floor(time / 3600);
        let minutes = Math.floor((time % 3600) / 60);
        let seconds = Math.floor(time % 60);
        let centiseconds = Math.floor((time % 1) * 100);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        centiseconds = centiseconds < 10 ? "0" + centiseconds : centiseconds;

        return (
            <div>
                {hours}:{minutes}:{seconds}
                <span style={{ fontSize: '24px'}}>
                    :{centiseconds}
                </span>
            </div>

        );
    };

    return (
        <>
            <h1>{format(time)}</h1>
            {running ? <button id="stopBtn" onClick={stopBtn}>Stop</button> : <button id="startBtn" onClick={startBtn}>Start</button>}
            <button id="restartBtn" onClick={restartBtn}>Restart</button>
        </>
    )
}

export default Timer;
