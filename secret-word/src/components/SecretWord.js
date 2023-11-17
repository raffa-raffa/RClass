import React, { useState, useEffect } from "react";
import "./SecretWord.css";

const SecretWord = () => {
    const [letter, setLetter] = useState("");
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [displayedWord, setDisplayedWord] = useState("");

    const wordsecret = [
        { word: "Elefante", dica: ": Maior mamífero terrestre" },
    ];

    const wordlist = [{ word: " Elefante ", dica: ": Maior mamífero terrestre" },
    { word: " Astronauta ", dica: ": Pessoa que viaja para o espaço" },
    { word: " Guitarra ", dica: ": Instrumento musical de cordas" },
    { word: " Abacaxi ", dica: ": Fruta tropical amarela e espinhosa" },
    { word: " Esquilo ", dica: ": Roedor fofo com cauda peluda" },
    { word: " Arco-íris ", dica: ": Fenômeno óptico com várias cores" },
    { word: " Camaleão ", dica: ": Réptil que muda de cor" },
    { word: " Violino ", dica: ": Instrumento de cordas tocado com um arco" },
    { word: " Girassol ", dica: ": Flor amarela que segue o sol" },
    { word: " Cachoeira ", dica: ": Fluxo de água caindo de uma altura" },
    { word: " Pinguim ", dica: ": Ave marinha não voadora" },
    { word: " Chocolate ", dica: ": Doce feito de cacau e açúcar" },
    { word: " Onda ", dica: ": Movimento de uma superfície da água" },
    { word: " Futebol ", dica: ": Esporte com uma bola e dois times" },
    { word: " Cenoura ", dica: ": Vegetal alaranjado e crocante" },
    { word: " Computador ", dica: ": Dispositivo eletrônico para processamento de dados" },
    { word: " Piano ", dica: ": Instrumento musical de teclas" },
    { word: " Floresta ", dica: ": Área extensa coberta por árvores" },
    { word: " Foguete ", dica: ": Veículo espacial propelido por motores" },
    { word: " Coruja ", dica: ": Ave noturna de rapina" },
    { word: " Melancia ", dica: ": Fruta grande com polpa vermelha" },
    { word: " Inverno ", dica: ": Estação do ano mais fria" },
    { word: " Bailarina ", dica: ": Pessoa que dança ballet" },
    { word: " Tesouro ", dica: ": Objeto de valor escondido" },
    { word: " Sorrir ", dica: ": Expressão facial feliz" },
    { word: " Travesseiro ", dica: ": Usado para apoiar a cabeça durante o sono" },
    { word: " Helicóptero ", dica: ": Aeronave com hélices giratórias" },
    { word: " Biblioteca ", dica: ": Local onde se encontram livros" },
    { word: " Abraço ", dica: ": Demonstração de carinho com os braços" },
    { word: " Montanha ", dica: ": Elevação natural e proeminente da Terra" },]

    const getRandomWord = () => {
        const randomIndex = Math.floor(Math.random() * wordlist.length);
        return wordlist[randomIndex];
    };

    const [currentWord, setCurrentWord] = useState(getRandomWord());

    const checkWord = () => {
        let updatedDisplayedWord = currentWord.word
            .toLowerCase()
            .split('')
            .map((l) => (guessedLetters.includes(l) ? l : "_"))
            .join('');
        setDisplayedWord(updatedDisplayedWord);
    };

    const verifyLetter = () => {
        const lowercaseLetter = letter.toLowerCase();
        console.log(lowercaseLetter, "letter");
        setGuessedLetters([...guessedLetters, lowercaseLetter]);
        setLetter("");
    };

    const onchangeData = (event) => {
        const maxLength = 1;
        const value = event.target.value.slice(0, maxLength).toLowerCase();
        setLetter(value);
    };

    useEffect(() => {
        checkWord();
    }, [currentWord, guessedLetters]);

    const handleNewWord = () => {
        setGuessedLetters([]);
        setLetter("");
        setCurrentWord(getRandomWord());
    };

    return (
        <div>
            <div className="header">
                <h4>Pontuação: </h4>
                <h1>Advinhe a Palavra</h1>
                <h3>Dica sobre a palavra {currentWord.dica} </h3>
                <p>Você ainda tem: 3 tentativas</p>
            </div>
            <div className="container">
                <div className="secretword">
                    {displayedWord.split('').map((letter, index) => (
                        <div key={index} className="letter">
                            {letter === '_' ? ' ' : letter}
                        </div>
                    ))}
                </div>
            </div>
            <div className="footer">
                <p>Tente advinhar uma letra da palavra</p>
                <div className="play">
                    <input type="text" value={letter} onChange={onchangeData} />
                    <button onClick={verifyLetter}>Jogar</button>
                </div>
                <span>Letras já foram utilizadas: {guessedLetters.join(", ")}</span>
                <button onClick={handleNewWord}>Nova Palavra</button>
            </div>
        </div>
    );
};

export default SecretWord;