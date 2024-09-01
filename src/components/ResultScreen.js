import React from 'react';

function ResultScreen({ userAnswers = [], questions }) {
    const correctAnswersCount = userAnswers.filter(answer => answer.isCorrect).length;
    const totalQuestions = questions.length;

    return (
        <div className="result-screen">
            <h2>Test Sonuçları</h2>
            <p>Doğru Yanıt Sayısı: {correctAnswersCount}</p>
            <p>Toplam Soru Sayısı: {totalQuestions}</p>

            <h3>Detaylı Sonuçlar</h3>
            <ul>
                {questions.map((question, index) => (
                    <li key={index}>
                        <p><strong>{question.question}</strong></p>
                        <p>Verdiğiniz Cevap: {userAnswers[index]?.answer || "Cevap Verilmedi"}</p>
                        <p>Doğru Cevap: {question.answer}</p>
                        {userAnswers[index]?.isCorrect ? (
                            <p style={{ color: 'green' }}>Doğru</p>
                        ) : (
                            <p style={{ color: 'red' }}>Yanlış</p>
                        )}
                    </li>
                ))}
            </ul>

            <button onClick={() => window.location.reload()}>Tekrar Dene</button>
        </div>
    );
}

export default ResultScreen;
