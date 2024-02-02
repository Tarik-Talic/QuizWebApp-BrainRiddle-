import { nanoid } from 'nanoid';



export function formatQuizData(data: any) {
  console.log(data);
  let formattedData = data.map((item: any) => {
    return {
      id: nanoid(),
      question: item.question,
      correctAnswer: item.correct_answer,
      answers: shuffleAnswers([...item.incorrect_answers, item.correct_answer]),
    };
  });
  return formattedData;
}
function shuffleAnswers(posibleAnswers: string[]) {
  let arrJoined = [...posibleAnswers].sort(() => Math.random() - 0.5);
  let arrayOfAnswers = arrJoined.map((item) => {
    return {
      value: item,
    };
  });

  return arrayOfAnswers;
}