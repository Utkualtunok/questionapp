// src/App.js
import questions from './data/questions';
import "./App.css";
import React, { useState } from 'react';
import QuestionScreen from './components/QuestionScreen';
import ResultScreen from './components/ResultScreen';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer) => {
    const isCorrect = answer === questions[currentQuestionIndex].answer;
    setUserAnswers(prev => [...prev, { answer, isCorrect }]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className="App">
      {showResults ? (
        <ResultScreen userAnswers={userAnswers} questions={questions} />
      ) : (
        <QuestionScreen
          question={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
}

export default App;
