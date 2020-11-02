import React, {useState} from 'react'

const QuestionBox = ({question, options, correct, selectAnswer, selected, submitAnswer, clearSelection, showCorrectAns}) => {

    return (
        <div className='question-box'>
            <div className='question'>
                {question}
            </div>
            <div className='option-box'>
                {options.map(o => (
                    <div 
                        className={showCorrectAns && o === correct ? 'option correct-ans' : showCorrectAns && o === selected ? 'option wrong-ans' : 'option'}
                        key={o} 
                        onClick={(e) => selectAnswer(e, o)}
                    >
                        {o}
                    </div>
                ))}
            </div>
            <div className='control-box'>
                <div className='submit-button' onClick={(e) => submitAnswer(selected)}>Submit</div>
                <div className='clear-button' onClick={clearSelection}>Clear</div>
            </div>
        </div>
    )
}

export default QuestionBox