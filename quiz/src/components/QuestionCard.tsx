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
            <p>{question}</p>
            <div className="questioncard-answers">
                {answers.map(answer => (
                    <button disabled={userAnswer} onClick={callback}>
                        <span>{answer}</span>
                    </button>
                ))}
            </div>
        </div>
    );

export default QuestionCard;
