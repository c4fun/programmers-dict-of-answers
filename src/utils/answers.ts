import {generateAllAnswers, generateAllAnswers as init} from '../res/initializeListOfAnswers';

let allAnswers = generateAllAnswers();

function getARandomAnswer(): string {
    let numOfAnswers = allAnswers.length;
    let randomNumber = Math.floor(Math.random() * Math.floor(numOfAnswers));
    // console.log("randomNuber is: ", randomNumber);
    let answer = allAnswers[randomNumber];
    return answer.text;
}

export function getAnswer(): string {
    const answer = getARandomAnswer()

    return answer;
}