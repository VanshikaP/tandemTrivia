import React from 'react'

const ProgressBar = ({progress}) => {
    return (
      <div className='progress-bar-container'>
        <div className='progress-bar'>
          {progress}% completed!
        </div>
      </div>
    )
  }

export default ProgressBar