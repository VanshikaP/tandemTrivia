import React, {useState} from 'react'
import './App.css';
import ProgressBar from './components/ProgressBar'
import QuestionBox from './components/QuestionBox'
import ScoreBox from './components/ScoreBox'
import questionsData from './questionsData'

// get random 10 questions from questionsData
const questionsSet = questionsData.sort(() => 0.5 - Math.random()).slice(0,10);

function App() {
  const [currQues, setCurrQues] = useState(0)
  const [options, setOptions] = useState([...questionsSet[currQues].incorrect, questionsSet[currQues].correct].sort(() => 0.5 - Math.random()))
  const [score, setScore] = useState(0)
  const [progress, setProgress] = useState(0)
  const [selected, setSelected] = useState('')
  const [showCorrectAns, setShowCorrectAns] = useState(false)

  const selectAnswer = (e, o) => {
    setSelected(o)
    
    // clear other selected answers highlights
    const allOptions = document.querySelectorAll('.option')
    for(let i = 0; i < allOptions.length; i++){
        let o = allOptions[i]
        if(o.classList.length > 1){
            o.classList.remove('selected')
        }
    }
    // add selected class to the highlighted answer
    e.target.classList.add('selected')
  }

  const clearSelection = () => {
      setSelected('')
      document.querySelector('.selected').classList.remove('selected')
      }

  const submitAnswer = (answer) => {
      // check if answer is correct
      if(answer === questionsSet[currQues].correct){
          // increment the score
          setScore(score + 1)
      } 

      // highlight the correct answer
      setShowCorrectAns(true)
      // move to new question and update progress bar after 2 seconds
      setTimeout(() => {
          if (progress < 90){
            setOptions([...questionsSet[currQues+1].incorrect, questionsSet[currQues+1].correct].sort(() => 0.5 - Math.random()))
            setCurrQues(currQues + 1)
            setProgress(progress + 10)
            setShowCorrectAns(false)
          } else{
            setProgress(100)
          }
      }, 1000)
    }
  return (
    <div className="App">
      <div className='page-title'>
        <h1 className='title'>
          Tandem Trivia
        </h1>
      </div>
      {progress < 100 && (
        <div className='content'>
          <ProgressBar progress={progress}/>
          <ScoreBox score={score}/>
          <QuestionBox 
            question={questionsSet[currQues].question}
            options={options}
            correct = {questionsSet[currQues].correct}
            selectAnswer={selectAnswer}
            selected={selected}
            submitAnswer={submitAnswer}
            clearSelection={clearSelection}
            showCorrectAns={showCorrectAns}
          />
        </div>
      )}
      {progress === 100 && (
        <div className='content'>
          <ProgressBar progress={progress}/>
          <ScoreBox score={score}/>
          <h2>Thank you for answering the quiz!</h2>
        </div>
      )}
    </div>
  );
}

export default App;
