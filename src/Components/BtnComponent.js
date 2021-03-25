import React from 'react';

export default function BtnComponent(props) {
  return (
    <div>
      {(props.status === 0) ?
        <div>
          <button className="btn"
            onClick={props.start}>Start</button>
          <button className="btn"
            onClick={props.wait}>Wait</button>
          <button className="btn"
            onClick={props.reset}>Reset</button>
        </div> : ""
      }

      {
        (props.status === 1) ?
          <div>
            <button className="btn"
              onClick={props.stop}>Stop</button>
            <button className="btn"
              onClick={props.wait}>Wait</button>
            <button className="btn"
              onClick={props.reset}>Reset</button>
          </div> : ""
      }
    </div >
  );
}