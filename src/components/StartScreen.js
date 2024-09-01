import React from 'react';

function StartScreen({ startTest }) {
    return (
        <div className="start-screen">
            <h1>Teste Hoş Geldiniz</h1>
            <p>Bu test 10 sorudan oluşmaktadır. Başlamak için aşağıdaki butona tıklayın.</p>
            <button id="start" onClick={startTest}>Teste Başla</button>
        </div>
    );
}

export default StartScreen;
