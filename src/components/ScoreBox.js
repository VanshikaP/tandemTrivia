import React from 'react'

const ScoreBox = ({score}) => {
    return (
        <div className='score-box'>
            Score - {score}/10
        </div>
    )
}

export default ScoreBox