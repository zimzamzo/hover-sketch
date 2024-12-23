let boardSize = 16;
let randomColorMode = true;
let gradientMode = false;

function createBoard() {
    
    let boardContainer = document.querySelector(".board-container");

    // populate board
    for (i=0; i<boardSize; i++) {

        // create row element
        let boardRow = document.createElement("div");
        boardRow.classList.add("board-row-container");

        // populate row with items
        for (j=0; j<boardSize; j++) {
            let boardItem = document.createElement("div");
            boardItem.classList.add("board-item");
            boardRow.appendChild( boardItem );
        }

        // append the row to the board
        boardContainer.appendChild( boardRow );

        document.querySelector(".board-value").textContent = boardSize;
    }
}

function resetBoard() {
    boardSize = prompt("What size?");

    document.querySelector(".board-container").textContent = "";

    createBoard();
}

// random color generator source from internet, unknown author
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function mouseoverEvent(e) {
    if (e.target.classList.contains("board-item")) {
        let color;

        if (randomColorMode) {
            color = getRandomColor();
        }
        else color = "black";

        

        e.target.style.backgroundColor = color;
    }
}

createBoard();

document.querySelector("button.reset").addEventListener("click", resetBoard);

document.querySelector(".board-container").addEventListener("mouseover", (e) => mouseoverEvent(e));