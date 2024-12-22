let boardSize = 16;

function createBoard() {
    
    // create each row
    for (i=0; i<boardSize; i++) {
        
        //create row items
        for (j=0; j<boardSize; j++) {

        }
    }
}

function resetBoard() {
    let boardSize = prompt("What size?");

    document.querySelector(".board-container").textContent = "";

    createBoard();
}

createBoard(boardSize);

document.querySelector("button.reset").addEventListener("click", resetBoard);