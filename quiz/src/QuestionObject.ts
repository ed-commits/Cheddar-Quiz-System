import { shuffleArray } from "./utils";

export type QuestionObject = {
    question: string;
    correctAnswer: string;
    answers: string[];
};

export const shuffleAnswers = (question:QuestionObject) => {
    question.answers.push(question.correctAnswer);
    question.answers = shuffleArray(question.answers)
    return question;
}

