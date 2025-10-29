const Gameboard = (function () {
    const rows = 3;
    const columns = 3;
    const grid = [];

    for (let i = 0; i < rows; i++) {
        grid[i] = [];
        for (let j = 0; j < columns; j++) {
            grid[i].push([]);
        }
    }

    return {grid}
})();


function createPlayer (name, mark) {
    const playerName = name;
    const playerMark = mark;
    const playerWin = false;

    return {playerName, playerMark, playerWin};
}

(function runGame() {
    const player1 = createPlayer("Praise", "X");
    const player2 = createPlayer("Computer", "O");
    console.log(player1);
    console.log(player2);

    let running = true;

    while (running) {
        getplayerMove(player1);
        getplayerMove(player2);
        console.log(Gameboard.grid);

        getplayerMove(player1);
        getplayerMove(player2);
        console.log(Gameboard.grid);

        getplayerMove(player1);
        console.log(Gameboard.grid);
        evalBoard(player1);
        if (player1.playerWin === true) {
            break;
        }

        getplayerMove(player2);
        console.log(Gameboard.grid);
        evalBoard(player2);
        if (player2.playerWin === true) {
            break;
        }

        getplayerMove(player1);
        console.log(Gameboard.grid);
        evalBoard(player1);
        if (player1.playerWin === true) {
            break;
        }

        getplayerMove(player2);
        console.log(Gameboard.grid);
        evalBoard(player2);
        if (player2.playerWin === true) {
            break;
        }

        getplayerMove(player1);
        console.log(Gameboard.grid);
        evalBoard(player1);
        if (player1.playerWin === true) {
            break;
        }
        break;
    }
})();

function getplayerMove(player) {
    let row = prompt("Select Row to play")
    let column = prompt("Select column to play");

    Gameboard.grid[row][column] = player.playerMark;
};

function evalBoard (player) {
    // Row Level eval
    if (Gameboard.grid[0][0] === Gameboard.grid[0][1] && Gameboard.grid[0][1] === Gameboard.grid[0][2]) {
        if (player.playerMark === Gameboard.grid[0][0]) {
            console.log(player.playerName + " won");
            player.playerWin = true;
        }  
    }
    else if (Gameboard.grid[1][0] === Gameboard.grid[1][1] && Gameboard.grid[1][1] === Gameboard.grid[1][2]) {
        if (player.playerMark === Gameboard.grid[1][0]) {
            console.log(player.playerName + " won");
            player.playerWin = true;
        }        
    }
    else if (Gameboard.grid[2][0] === Gameboard.grid[2][1] && Gameboard.grid[2][1] === Gameboard.grid[2][2]) {
        if (player.playerMark === Gameboard.grid[2][0]) {
            console.log(player.playerName + " won");
            player.playerWin = true;
        }        
    }
    // Column level
    else if (Gameboard.grid[1][0] === Gameboard.grid[1][0] && Gameboard.grid[1][0] === Gameboard.grid[2][0]) {
        if (player.playerMark === Gameboard.grid[1][0]) {
            console.log(player.playerName + " won");
            player.playerWin = true;
        }     
    }

    else if (Gameboard.grid[1][1] === Gameboard.grid[1][1] && Gameboard.grid[1][1] === Gameboard.grid[2][1]) {
        if (player.playerMark === Gameboard.grid[1][1]) {
            console.log(player.playerName + " won");
            player.playerWin = true;
        }     
    }
    else if (Gameboard.grid[1][2] === Gameboard.grid[1][2] && Gameboard.grid[1][2] === Gameboard.grid[2][2]) {
        if (player.playerMark === Gameboard.grid[1][2]) {
            console.log(player.playerName + " won");
            player.playerWin = true;
        }         
    }
    // Diagonal 
    else if (Gameboard.grid[0][0] === Gameboard.grid[1][1] && Gameboard.grid[1][1] === Gameboard.grid[2][2]) {
        if (player.playerMark === Gameboard.grid[0][0]) {
            console.log(player.playerName + " won");
            player.playerWin = true;
        }        
    }
    else if (Gameboard.grid[2][0] === Gameboard.grid[1][1] && Gameboard.grid[1][1] === Gameboard.grid[0][2]) {
        if (player.playerMark === Gameboard.grid[2][0]) {
            console.log(player.playerName + " won");
            player.playerWin = true;
        }         
    }
    else {
        console.log("It's a tie");
    }
}