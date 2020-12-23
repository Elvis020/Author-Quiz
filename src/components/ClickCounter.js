import React from 'react'

const ClickCounter = (props) => {
    const {numberOfClicks,handleClick} =  props;
    return (
        <div onClick={handleClick}>
            This div has been clicked {numberOfClicks} times.
        </div>
    )
}

export default ClickCounter
