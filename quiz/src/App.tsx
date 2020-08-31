import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import QuestionCard from './components/QuestionCard';
import Question1 from './quizzes/Question1';
import { shuffleArray } from './utils';
import { QuestionObject, shuffleAnswers } from './QuestionObject';

const q1 = shuffleAnswers(Question1);

const App = () => {
  const [question, setQuestion] = useState<QuestionObject>(q1);

  const startTrivia = async () => {

  }

  const nextQuestion = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const shuffledAnswers = shuffleArray(Question1.answers);

  return (
    <div className="App">
      <h1>Quiz</h1>

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
