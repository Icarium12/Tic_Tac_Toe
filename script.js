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

    return {playerName, playerMark};
}

(function runGame() {
    const player1 = createPlayer(prompt("Enter your name"), prompt("What is your mark"));
    const player2 = createPlayer(prompt("Enter your name"), prompt("What is your mark"));
    console.log(player1);
    console.log(player2);

    // // First Row
    // Gameboard.grid[0][0] = player1.playerMark;
    // Gameboard.grid[0][1] = player2.playerMark;
    // Gameboard.grid[0][2] = player1.playerMark;

    // // Second row
    // Gameboard.grid[1][0] = player2.playerMark;
    // Gameboard.grid[1][1] = player1.playerMark;
    // Gameboard.grid[1][2] = player2.playerMark;

    // // Third row
    // Gameboard.grid[2][0] = player1.playerMark;
    // console.log(Gameboard.grid);
    // evalBoard(player1);
    // Gameboard.grid[2][1] = player2.playerMark;
    // console.log(Gameboard.grid);
    // evalBoard(player2);
    // Gameboard.grid[2][2] = player1.playerMark;
    // console.log(Gameboard.grid);
    // evalBoard(player1);

    // console.log(Gameboard.grid);

    Gameboard.grid[0][0] = player1.playerMark;
    console.log(Gameboard.grid);

    Gameboard.grid[0][0]
})();


function evalBoard (player) {
    // Row Level eval
    if (Gameboard.grid[0][0] === Gameboard.grid[0][1] && Gameboard.grid[0][1] === Gameboard.grid[0][2]) {
        if (player.playerMark === Gameboard.grid[0][0]) {
            console.log(player.playerName + " won");
        }  
    }
    else if (Gameboard.grid[1][0] === Gameboard.grid[1][1] && Gameboard.grid[1][1] === Gameboard.grid[1][2]) {
        if (player.playerMark === Gameboard.grid[1][0]) {
            console.log(player.playerName + " won");
        }        
    }
    else if (Gameboard.grid[2][0] === Gameboard.grid[2][1] && Gameboard.grid[2][1] === Gameboard.grid[2][2]) {
        if (player.playerMark === Gameboard.grid[2][0]) {
            console.log(player.playerName + " won");
        }        
    }
    // Column level
    else if (Gameboard.grid[1][0] === Gameboard.grid[1][0] && Gameboard.grid[1][0] === Gameboard.grid[2][0]) {
        if (player.playerMark === Gameboard.grid[1][0]) {
            console.log(player.playerName + " won");
        }     
    }

    else if (Gameboard.grid[1][1] === Gameboard.grid[1][1] && Gameboard.grid[1][1] === Gameboard.grid[2][1]) {
        if (player.playerMark === Gameboard.grid[1][1]) {
            console.log(player.playerName + " won");
        }     
    }
    else if (Gameboard.grid[1][2] === Gameboard.grid[1][2] && Gameboard.grid[1][2] === Gameboard.grid[2][2]) {
        if (player.playerMark === Gameboard.grid[1][2]) {
            console.log(player.playerName + " won");
        }         
    }
    // Diagonal 
    else if (Gameboard.grid[0][0] === Gameboard.grid[1][1] && Gameboard.grid[1][1] === Gameboard.grid[2][2]) {
        if (player.playerMark === Gameboard.grid[0][0]) {
            console.log(player.playerName + " won");
        }        
    }
    else if (Gameboard.grid[2][0] === Gameboard.grid[1][1] && Gameboard.grid[1][1] === Gameboard.grid[0][2]) {
        if (player.playerMark === Gameboard.grid[2][0]) {
            console.log(player.playerName + " won");
        }         
    }
    else {
        console.log("It's a tie");
    }
}