import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import QuestionCard from './components/QuestionCard';
import Question1 from './quizzes/Question1';

const App = () => {
  const startTrivia = async () => {

  }

  const nextQuestion = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  return (
    <div className="App">
      <h1>Quiz</h1>

      {//<button className="start" onClick={startTrivia}>Start</button>
}

      <QuestionCard
        question={Question1.question}
        answers={Question1.answers}
        callback={checkAnswer}
        userAnswer={false} />

      <button className="next" onClick={nextQuestion}>Next</button>
    </div>
  );
}

export default App;
