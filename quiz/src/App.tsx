import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import Questions from './quizzes/Question1';
import { shuffleArray } from './utils';

// Types
import { QuestionObject, shuffleAnswers } from './QuestionObject';

// Styles
//import logo from './logo.svg';
import './App.css';

const questionsList = Questions.map(question => shuffleAnswers(question));

const App = () => {
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const question = () => questionsList[questionNumber];
  const incQuestion = () => setQuestionNumber(questionNumber + 1); // TODO: handle last question
  const [score, setScore] = useState<number>(0);
  const incScore = () => setScore(score + 1);

  const startTrivia = async () => {

  }

  const nextQuestion = async () => {
    incQuestion()
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.value === question().correctAnswer) {
      // The correct answer was picked
      console.log("Yes");
      incScore();
    }
    else {
      // The wrong answer was picked
      console.log("No");
    }
  }

  return (
    <div className="App">
      <h1>Quiz</h1>

      <p>Score: {score}</p>

      {//<button className="start" onClick={startTrivia}>Start</button>
      }

      <QuestionCard
        question={question().question}
        answers={question().answers}
        callback={checkAnswer}
        userAnswer={false} />

      <button className="next" onClick={nextQuestion}>Next</button>
    </div>
  );
}

export default App;
