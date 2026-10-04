import React, { useState } from 'react';
import { HomePage } from './Pages/HomePage';
import { QuizPage } from './Pages/QuizPage';
import { ResultPage } from './Pages/ResultPage';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: 'What is the capital of France?',
    options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
    correctAnswer: 'Paris',
  },
  {
    id: 2,
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    correctAnswer: 'Mars',
  },
  {
    id: 3,
    question: 'Which language is used to style web pages?',
    options: ['HTML', 'CSS', 'JavaScript', 'Python'],
    correctAnswer: 'CSS',
  },
  {
    id: 4,
    question: 'What is the largest ocean on Earth?',
    options: [
      'Atlantic Ocean',
      'Indian Ocean',
      'Arctic Ocean',
      'Pacific Ocean',
    ],
    correctAnswer: 'Pacific Ocean',
  },
  {
    id: 5,
    question: 'Which gas do plants absorb from the atmosphere?',
    options: [
      'Oxygen',
      'Carbon Dioxide',
      'Nitrogen',
      'Hydrogen',
    ],
    correctAnswer: 'Carbon Dioxide',
  },
  {
      id: 6,   
   question: 'What is the chemical symbol for gold?',
      options: ['Au', 'Ag', 'Fe', 'Pb'],
      correctAnswer: 'Au',
   },
   {
      id: 7,
      question: 'Which country is known as the Land of the Rising Sun?',
      options: ['China', 'Japan', 'Thailand', 'India'],
      correctAnswer: 'Japan',
   },
   { 
      id: 8,   
   question: 'What is the largest planet in our solar system?',
      options: ['Earth', 'Jupiter', 'Saturn', 'Mars'],
      correctAnswer: 'Jupiter',
   },
   {
      id: 9,
      question: 'Which element has the atomic number 1?',
      options: ['Oxygen', 'Hydrogen', 'Carbon', 'Nitrogen'],
      correctAnswer: 'Hydrogen',
   },
   {
      id: 10,
      question: 'What is the process by which plants make their food?',
      options: ['Respiration', 'Photosynthesis', 'Transpiration', 'Digestion'],
      correctAnswer: 'Photosynthesis',
   }
];

type Page = 'home' | 'quiz' | 'result';

const Quiz: React.FC = () => {
  const [page, setPage] = useState<Page>('home');

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: number;
  }>({});

  const [score, setScore] = useState(0);

  const startQuiz = () => {
    setPage('quiz');
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setScore(0);
  };

  const handleSelectAnswer = (
    questionId: number,
    answerIndex: number
  ) => {
    setSelectedAnswers((previousAnswers) => ({
      ...previousAnswers,
      [questionId]: answerIndex,
    }));
  };

  const handleNextQuestion = () => {
    const question = questions[currentQuestion];

    const selectedIndex = selectedAnswers[question.id];

    const selectedAnswer = question.options[selectedIndex];

    const isCorrect =
      selectedAnswer === question.correctAnswer;

    if (isCorrect) {
      setScore((previousScore) => previousScore + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(
        (previousQuestion) => previousQuestion + 1
      );
    } else {
      setPage('result');
    }
  };

  const handleRetake = () => {
    startQuiz();
  };

  const handleHome = () => {
    setPage('home');
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setScore(0);
  };

  if (page === 'home') {
    return <HomePage onStartQuiz={startQuiz} />;
  }

  if (page === 'quiz') {
    return (
      <QuizPage
        questions={questions}
        currentIndex={currentQuestion}
        selectedAnswers={selectedAnswers}
        onSelectAnswer={handleSelectAnswer}
        onNextQuestion={handleNextQuestion}
      />
    );
  }

  return (
    <ResultPage
      score={score}
      totalQuestions={questions.length}
      onRetake={handleRetake}
      onHome={handleHome}
    />
  );
};

export default Quiz;