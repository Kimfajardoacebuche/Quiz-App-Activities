import React from 'react';

interface HomePageProps {
  onStartQuiz: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onStartQuiz }) => {
  return (
    <div className="home-container">
      <p className="sub-title">Welcome to the</p>
      <h1 className="main-title">Frontend Quiz!</h1>
      <p className="description">
        Test your web development skills with 10 questions covering HTML, CSS, JavaScript, and React.
      </p>
      <button className="btn btn-gradient" onClick={onStartQuiz}>
        Start Quiz
      </button>
    </div>
  );
};