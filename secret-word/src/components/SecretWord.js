import React from "react";
import "./SecretWord.css"
const SecretWord = () => {
    return(
        <div>
            <div className="header">
            <h4>Pontuação: </h4>
            <h1>Advinhe a palavra:</h1>
            <h3>Dica sobre a palavra: </h3>
            <p>Voê ainda tem 3 tentativas</p>
            </div>
            <div className="secret-word">
                <input type="text" />
            </div>
            <div className="footer">
                <p>Tente advinhar uma letra da palavra</p>
                <div className="play">
                <input type="text"  />
                <button >Jogar</button>
                </div>
                <span>Letras já foram utilizadas</span>
            </div>
        </div>
        )
    }
export default SecretWord