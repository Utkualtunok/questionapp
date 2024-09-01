import React, { useState, useEffect } from 'react';

function QuestionScreen({ question, onAnswer }) {
    const [showOptions, setShowOptions] = useState(false);
    const [timeLeft, setTimeLeft] = useState(30);

    useEffect(() => {
        // Yeni bir soru başladığında sayaç ve seçenekler sıfırlanır
        setTimeLeft(30);
        setShowOptions(false);

        // Zamanlayıcıyı başlat
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev === 1) {
                    onAnswer(null); // Süre dolduğunda yanıt vermeden geçiş yap
                }
                return prev - 1;
            });
        }, 1000);

        // İlk 4 saniye sonunda şıkları göster
        const showOptionsTimer = setTimeout(() => {
            setShowOptions(true);
        }, 4000);

        // Zamanlayıcıları temizle
        return () => {
            clearInterval(timer);
            clearTimeout(showOptionsTimer);
        };
    }, [question, onAnswer]);

    return (
        <div className="question-screen">
            <h2>{question.question}</h2>
            <img src={question.image} alt="question" />
            {showOptions ? (
                <div className="options">
                    {question.options.map(option => (
                        <button key={option} onClick={() => onAnswer(option)}>
                            {option}
                        </button>
                    ))}
                </div>
            ) : (
                <p>Seçenekler 4 saniye sonra görünecek...</p>
            )}
            <p>Kalan Süre: {timeLeft} saniye</p>
        </div>
    );
}

export default QuestionScreen;
