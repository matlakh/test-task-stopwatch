import React, { useState } from 'react';
import DisplayComponent from './Components/DisplayComponent';
import BtnComponent from './Components/BtnComponent';
import './App.css';

export default function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });

  };

  const stop = () => {
    clearInterval(interv);
    setStatus(0);
    updatedMs = 0; updatedS = 0; updatedM = 0; updatedH = 0;
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  async function reset() {
    stop();
    await sleep(20);
    start();
    console.log(time);
  };


  const wait = () => {
    clearInterval(interv);
    setStatus(0);
  };
  

  return (
    <div className="section-wrapper">
        <div className="stopwatch">
          <DisplayComponent time={time} />
          <BtnComponent status={status} wait={wait} reset={reset} stop={stop} start={start} />
        </div>
    </div>
  );
}

