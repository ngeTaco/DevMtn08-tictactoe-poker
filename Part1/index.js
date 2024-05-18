let player = 'X';

function calculateWinner(){
    const lines = [
        // Horizontal lines
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Vertical lines
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonal lines
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const line of lines) {
        const [a, b, c] = line;
        const squareAText = squares[a].innerText;
        const squareBText = squares[b].innerText;
        const squareCText = squares[c].innerText;

        if (squareAText !== '' && squareAText === squareBText && squareAText === squareCText) {
            return squareAText;
        }
    }
    return undefined;
}

function isBoardFull() {
    for (const square of squares) {
        if (square.innerText === '') {
            return false;
        }
    }
    return true;
}

function play(evt) {
    const targetSquare = evt.target;
    targetSquare.innerText = player;

    if (player === 'X'){
        player = 'O'
    } else {
        player = 'X'
    }
    const currPlayer = document.querySelector('#current-player');
    currPlayer.innerText = player;

    const winner = calculateWinner();
    if (winner) {
        alert(`${winner} is the Winner!`);
    } else if (isBoardFull()) {
        alert('Game is a Tie!');
    }
}

const squares = document.querySelectorAll('.square');

for (const square of squares) {
    square.addEventListener('click', play)
};