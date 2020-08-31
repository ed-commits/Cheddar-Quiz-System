import React from 'react';
import './QuestionCard.css';

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: boolean;
}

const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer
}) => (
        <div>
            <p className="question">{question}</p>
            <div className="questioncard-answers">
                {answers.map((answer, index) => (
                    <button key={index} disabled={userAnswer} onClick={callback} value={answer}>
                        <span>{answer}</span>
                    </button>
                ))}
            </div>
        </div>
    );

export default QuestionCard;
