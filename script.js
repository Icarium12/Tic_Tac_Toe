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

const Display = (function () {
    const boxes = document.querySelectorAll('button');
    return {boxes};
})();

function createPlayer (name, mark) {
    const playerName = name;
    const playerMark = mark;
    const playerWin = false;

    return {playerName, playerMark, playerWin};
}



function renderGame() {
    Gameboard.grid[0][0] = Display.boxes[0].textContent;  
    Gameboard.grid[0][1] = Display.boxes[1].textContent;  
    Gameboard.grid[0][2] = Display.boxes[2].textContent;  

    Gameboard.grid[1][0] = Display.boxes[3].textContent;  
    Gameboard.grid[1][1] = Display.boxes[4].textContent;  
    Gameboard.grid[1][2] = Display.boxes[5].textContent;  

    Gameboard.grid[2][0] = Display.boxes[6].textContent;
    Gameboard.grid[2][1] = Display.boxes[7].textContent; 
    Gameboard.grid[2][2] = Display.boxes[8].textContent; 
}


(function runGame() {
    const player1 = createPlayer("Praise", "X");
    const player2 = createPlayer("Computer", "O");

    let currentPlayer = player1;
    let previousPlayer;
    let round = 1;
    function switchPlayer(element) {
        if (currentPlayer === player1) {
            element.textContent = currentPlayer.playerMark;
            round++
            previousPlayer = currentPlayer
            currentPlayer = player2;
        }
        else {
            element.textContent = currentPlayer.playerMark;
            round++
            previousPlayer = currentPlayer;
            currentPlayer = player1;
        }
    }

    Display.boxes.forEach((box) => {
        box.addEventListener('click', () => {
            switchPlayer(box);
            renderGame();
            console.log(Gameboard.grid);
            evalBoard(previousPlayer);
            console.log(previousPlayer);
            console.log(previousPlayer.playerWin);
        }, {once: true});
    });
    
})();

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
    else if (Gameboard.grid[0][0] === Gameboard.grid[1][0] && Gameboard.grid[1][0] === Gameboard.grid[2][0]) {
        if (player.playerMark === Gameboard.grid[1][0]) {
            console.log(player.playerName + " won");
            player.playerWin = true;
        }     
    }

    else if (Gameboard.grid[0][1] === Gameboard.grid[1][1] && Gameboard.grid[1][1] === Gameboard.grid[2][1]) {
        if (player.playerMark === Gameboard.grid[0][1]) {
            console.log(player.playerName + " won");
            player.playerWin = true;
        }     
    }
    else if (Gameboard.grid[0][2] === Gameboard.grid[1][2] && Gameboard.grid[1][2] === Gameboard.grid[2][2]) {
        if (player.playerMark === Gameboard.grid[0][2]) {
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