import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import Question1 from './quizzes/Question1';
import { shuffleArray } from './utils';

// Types
import { QuestionObject, shuffleAnswers } from './QuestionObject';

// Styles
//import logo from './logo.svg';
import './App.css';

const q1 = shuffleAnswers(Question1);

const App = () => {
  const [question, setQuestion] = useState<QuestionObject>(q1);
  const [score, setScore] = useState<number>(0);
  const incScore = () => setScore(score + 1);

  const startTrivia = async () => {

  }

  const nextQuestion = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.value === question.correctAnswer) {
      // The correct answer was picked
      console.log("Yes");
      incScore();
    }
    else {
      // The wrong answer was picked
      console.log("No");
    }
  }

  const shuffledAnswers = shuffleArray(Question1.answers);

  return (
    <div className="App">
      <h1>Quiz</h1>

      <p>Score: {score}</p>

      {//<button className="start" onClick={startTrivia}>Start</button>
      }

      <QuestionCard
        question={Question1.question}
        answers={shuffledAnswers}
        callback={checkAnswer}
        userAnswer={false} />

      <button className="next" onClick={nextQuestion}>Next</button>
    </div>
  );
}

export default App;
