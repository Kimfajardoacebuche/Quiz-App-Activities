import React from 'react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

interface QuizPageProps {
  questions: Question[];
  currentIndex: number;
  selectedAnswers: { [key: number]: number };
  onSelectAnswer: (
    questionId: number,
    answerIndex: number
  ) => void;
  onNextQuestion: () => void;
}

export const QuizPage: React.FC<QuizPageProps> = ({
  questions,
  currentIndex,
  selectedAnswers,
  onSelectAnswer,
  onNextQuestion,
}) => {
  const currentQuestion = questions[currentIndex];

  const selectedOption =
    selectedAnswers[currentQuestion.id];

  const isAnswered =
    selectedOption !== undefined;

  const isLastQuestion =
    currentIndex === questions.length - 1;

  return (
    <div className="quiz-container">

      <header className="quiz-header">
        <h1>Frontend Quiz</h1>
      </header>

      <div className="progress-container">
        <div className="progress-label">
          <span>
            Question {currentIndex + 1} of {questions.length}
          </span>

          <span>
            {Math.round(
              ((currentIndex + 1) / questions.length) * 100
            )}%
          </span>
        </div>

        <div className="progress-bar-background">
          <div
            className="progress-bar-fill"
            style={{
              width: `${
                ((currentIndex + 1) / questions.length) * 100
              }%`,
            }}
          />
        </div>
      </div>

      <div className="question-card">

        <h2 className="question-text">
          {currentQuestion.question}
        </h2>

        <div className="options-grid">
          {currentQuestion.options.map(
            (option, index) => (
              <label
                key={index}
                className={`answer-option ${
                  selectedOption === index
                    ? 'selected'
                    : ''
                }`}
              >
                <input
                  type="radio"
                  name="quiz-option"
                  value={index}
                  checked={selectedOption === index}
                  onChange={() =>
                    onSelectAnswer(
                      currentQuestion.id,
                      index
                    )
                  }
                />

                <span className="option-text">
                  {option}
                </span>
              </label>
            )
          )}
        </div>

      </div>

      <div className="actions">

        <button
          className="btn btn-submit"
          disabled={!isAnswered}
          onClick={onNextQuestion}
        >
          {isLastQuestion
            ? 'Submit Quiz'
            : 'Next'}
        </button>

      </div>

    </div>
  );
};