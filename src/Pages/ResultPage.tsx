import React from 'react';
import { ResultCard } from '../components/ResultCard';

interface ResultPageProps {
  score: number;
  totalQuestions: number;
  onRetake: () => void;
  onHome: () => void;
}

export const ResultPage: React.FC<ResultPageProps> = ({
  score,
  totalQuestions,
  onRetake,
  onHome,
}) => {
  return (
    <div className="result-container">
      <ResultCard
        score={score}
        totalQuestions={totalQuestions}
        onRetake={onRetake}
        onHome={onHome}
      />
    </div>
  );
};