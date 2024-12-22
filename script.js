let boardSize = 16;

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
    }
}

function resetBoard() {
    boardSize = prompt("What size?");

    document.querySelector(".board-container").textContent = "";

    createBoard();
}

createBoard();

document.querySelector("button.reset").addEventListener("click", resetBoard);