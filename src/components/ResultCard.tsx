import React from 'react';

interface ResultCardProps {
  score: number;
  totalQuestions: number;
  onRetake: () => void;
  onHome: () => void;
}

export const ResultCard: React.FC<ResultCardProps> = ({
  score,
  totalQuestions,
  onRetake,
  onHome,
}) => {
  const incorrect = totalQuestions - score;
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="result-card">
      <h2>Quiz Completed!</h2>
      
      <div className="score-badge">
        <p className="score-subtitle">Your score:</p>
        <div className="score-display">{score} / {totalQuestions}</div>
      </div>

      <div className="stats-list">
        <div className="stat-item">
          <span>Total Questions:</span>
          <strong>{totalQuestions}</strong>
        </div>
        <div className="stat-item">
          <span>Correct Answers:</span>
          <strong className="text-success">{score}</strong>
        </div>
        <div className="stat-item">
          <span>Incorrect Answers:</span>
          <strong className="text-danger">{incorrect}</strong>
        </div>
        <div className="stat-item">
          <span>Percentage:</span>
          <strong>{percentage}%</strong>
        </div>
      </div>

      <div className="button-group">
        <button onClick={onRetake} className="btn btn-primary">
          Retake Quiz
        </button>
        <button onClick={onHome} className="btn btn-secondary">
          Return Home
        </button>
      </div>
    </div>
  );
};