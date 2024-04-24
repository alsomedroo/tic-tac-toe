document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('.baby');
    const restartButton = document.querySelector('button');
    const message = document.querySelector('p');
    let currentPlayer = 'X';
    let gameActive = true;

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const checkWinner = () => {
        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (squares[a].innerHTML !== '' && squares[a].innerHTML === squares[b].innerHTML && squares[b].innerHTML === squares[c].innerHTML) {
                gameActive = false;
                message.textContent = `Player ${currentPlayer} wins!`;
                message.style.color = 'green';
                return;
            }
        }
        if (![...squares].some(square => square.innerHTML === '')) {
            gameActive = false;
            message.textContent = "It's a draw!";
            message.style.color = 'blue';
        }
    };

    const handleClick = (index) => {
        if (gameActive && squares[index].innerHTML === '') {
            squares[index].innerHTML = currentPlayer;
            checkWinner();
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    };

    squares.forEach((square, index) => {
        square.addEventListener('click', () => {
            handleClick(index);
        });
    });

    restartButton.addEventListener('click', () => {
        squares.forEach(square => {
            square.innerHTML = '';
        });
        currentPlayer = 'X';
        gameActive = true;
        message.textContent = '';
        message.style.color = 'black';
    });
});
