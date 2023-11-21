# Jogo da Forca - Readme

Este projeto é uma implementação simples do clássico jogo da forca em React. O jogo consiste em adivinhar uma palavra, com cada letra revelada conforme é corretamente escolhida pelo jogador. O jogo também oferece dicas sobre a palavra oculta.

## Funcionalidades

- **Pontuação:** O jogador acumula pontos ao acertar letras da palavra.
- **Dicas:** Cada palavra tem uma dica associada, proporcionando contexto.
- **Limite de Tentativas:** O jogador tem um número limitado de tentativas para adivinhar a palavra.
- **Feedback Visual:** Indicação visual das letras já utilizadas e feedback sobre o resultado do jogo.

## Instalação e Execução

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.

2. Clone este repositório:

   ```bash
   git clone https://github.com/raffa-raffa/RClass

3. Acesse a pasta secret-word
    ```bash
    cd secret-word

4. ```bash 
    npm install 

5. ```bash 
    npm start

 ### Regras do Jogo

Ao iniciar o jogo, você receberá uma dica sobre a palavra a ser adivinhada.

Tente adivinhar a palavra inserindo uma letra de cada vez no campo de entrada.

Cada letra correta revelará sua posição na palavra.

Letras incorretas serão exibidas como letras já utilizadas, e o jogador perderá uma tentativa.

O jogo termina quando o jogador adivinha corretamente a palavra ou excede o número máximo de tentativas.

Ao final do jogo, você pode iniciar uma nova rodada clicando no botão "Nova Palavra".

### Contribuindo

Se deseja contribuir para a melhoria deste projeto, sinta-se à vontade para criar pull requests. Certifique-se de discutir mudanças significativas através de uma issue antes de realizar alterações.

