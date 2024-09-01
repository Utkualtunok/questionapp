// src/App.js
import React, { useState } from 'react';
import QuestionScreen from './components/QuestionScreen';
import ResultScreen from './components/ResultScreen';
import StartScreen from './components/StartScreen';
import questions from './data/questions';
import './App.css';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const handleAnswer = (answer) => {
    const isCorrect = answer === questions[currentQuestionIndex].answer;
    setUserAnswers((prev) => [...prev, { answer, isCorrect }]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleStart = () => {
    setIsStarted(true);
  };

  return (
    <div className="App">
      {!isStarted ? (
        <StartScreen onStart={handleStart} />
      ) : showResults ? (
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
