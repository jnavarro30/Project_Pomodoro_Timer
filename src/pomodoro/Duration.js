import React from 'react'

export default function Duration({ session, focusDuration, setFocusDuration, breakDuration, setBreakDuration }) {
    const durationLimit = (limit, modify, setDuration) => {
      if (setDuration === setFocusDuration) {
        setDuration(prevState => {
            let newState = modify === "decrease" ? prevState - 5 : prevState + 5;
            if(modify === "decrease") return newState < limit ? limit : newState;
            else return newState > limit ? limit : newState;
        })
      } else {
        setDuration(prevState => {
            let newState = modify === "decrease" ? prevState - 1 : prevState + 1;
            if(modify === "decrease") return newState < limit ? limit : newState;
            else return newState > limit ? limit : newState;
        })
      }
    }
    
    return (
        <div className="row">
        <div className="col">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
              {/* TODO: Update this text to display the current focus session duration */}
              Focus Duration: {focusDuration < 10 ? `0${focusDuration}` : focusDuration}:00
            </span>
            <div className="input-group-append">
              {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
                onClick={() => durationLimit(5, "decrease", setFocusDuration)}
                disabled={session}
              >
                <span className="oi oi-minus" />
              </button>
              {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-focus"
                onClick={() => durationLimit(60, "increase", setFocusDuration)}
                disabled={session}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                {/* TODO: Update this text to display the current break session duration */}
                Break Duration: {breakDuration < 10 ? `0${breakDuration}` : breakDuration}:00
              </span>
              <div className="input-group-append">
                {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                  onClick={() => durationLimit(1, "decrease", setBreakDuration)}
                  disabled={session}
                >
                  <span className="oi oi-minus" />
                </button>
                {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-break"
                  onClick={() => durationLimit(15, "increase", setBreakDuration)}
                  disabled={session}
                >
                  <span className="oi oi-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
