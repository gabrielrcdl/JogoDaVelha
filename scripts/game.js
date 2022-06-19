//  Arquivo contém a regra de negócio, a lógica do jogo

// 1 Iniciar as variáveis


let board  = ['', '', '', '', '', '', '', '', '']; // Começam vazias, mas poderão ter um "x" ou um "o"
let playerTime = 0;
let symbols = ['o', 'x'];

function handleMove(position){
    board[position] = symbols[playerTime]

    if (playerTime == 0){
        playerTime = 1;
    }
    else{
        playerTime = 0;
    }
}