// src/components/StartScreen.js
import React from 'react';

const StartScreen = ({ onStart }) => {
    return (
        <div className="start-screen">
            <h1>Quiz App</h1>
            <hr className="divider" />
            <div className="instructions">
                <p>Test 10 sorudan oluşmaktadır.</p>
                <p>Her soru ekranda en fazla 30sn kalmaktadır.</p>
                <p>Sorular 'Teste Başla' yazısına tıkladıktan sonra gözükecektir.</p>
                <p>Geçilen soruya geri dönülmemektedir.</p>
            </div>
            <button className="start-button" onClick={onStart}>Teste Başla</button>
        </div>
    );
};

export default StartScreen;

