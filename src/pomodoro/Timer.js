import React, { useState } from 'react';

export default function Timer({ session, focusDuration, breakDuration, isTimerRunning }) {
    let value = 0;

    const formatMinutes = (duration) => {
        return duration < 10 ? `0${duration}` : duration;
    }

    const formatTimeRemaining = (seconds) => {
       const minutes = Math.floor(seconds / 60);
       const d = new Date();
       d.setSeconds(seconds);
       const secs = d.getSeconds();
     
       return `${minutes < 10 ? `0${minutes}` : minutes}:${secs < 10 ? `0${secs}` : secs}`;
    }

    const trackProgress = () => {
        let duration = session?.label === "Focusing" ? focusDuration * 60 : breakDuration * 60;
        const time = (duration - session?.timeRemaining);
        const percentage = (time / duration) * 100;
        value = percentage;
    }

    trackProgress();


    return (
        <div style={{display: session ? "block" : "none"}}>
        {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
           {session ? (
              <h2 data-testid="session-title">
              {session?.label} for {session?.label === "Focusing" ? formatMinutes(focusDuration) : formatMinutes(breakDuration)}:00 minutes
            </h2>
            ): null} 
            {/* TODO: Update message below correctly format the time remaining in the current session */}
            {session ? (
              <p className="lead" data-testid="session-sub-title">
              {formatTimeRemaining(session?.timeRemaining)} remaining
            </p>
            ): null} 
            
            {isTimerRunning ? '' : 'PAUSED'}
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={value} // TODO: Increase aria-valuenow as elapsed time increases
                style={{ width: `${value}%` }} // TODO: Increase width % as elapsed time increases
              />
            </div>
          </div>
        </div>
      </div>
    )
}
