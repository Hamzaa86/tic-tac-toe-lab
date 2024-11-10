const WINNING_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

let gameBoard
let currentPlayer
let gameWinner
let isTie
const gridCells = document.querySelectorAll('.sqr')
const messageDisplay = document.querySelector('#status-message')
const restartButton = document.getElementById('restart-btn')

const startNewGame = () => {
  gameBoard = ['', '', '', '', '', '', '', '', '']
  currentPlayer = 'X'
  gameWinner = false
  isTie = false
  updateView()
}

const updateView = () => {
  updateBoardDisplay()
  updateGameStatusMessage()
}

const updateBoardDisplay = () => {
  gameBoard.forEach((cell, idx) => {
    const cellElement = gridCells[idx]
    cellElement.textContent = cell
    cellElement.style.color =
      cell === 'X' ? 'red' : cell === 'O' ? 'blue' : 'black'
  })
}

const updateGameStatusMessage = () => {
  if (gameWinner) {
    messageDisplay.textContent = `Player ${currentPlayer} wins! 🎉`
  } else if (isTie) {
    messageDisplay.textContent = "It's a tie! 😕"
  } else {
    messageDisplay.textContent = `It's ${currentPlayer}'s turn`
  }
}

const handleCellClick = (e) => {
  const clickedCellIndex = parseInt(e.target.id)
  if (gameBoard[clickedCellIndex] || gameWinner) return
  placePieceInCell(clickedCellIndex)
  checkForWinner()
  checkForTie()
  togglePlayerTurn()
  updateView()
}

const placePieceInCell = (index) => {
  gameBoard[index] = currentPlayer
}

const checkForWinner = () => {
  WINNING_PATTERNS.forEach((pattern) => {
    const [a, b, c] = pattern
    if (
      gameBoard[a] &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
    ) {
      gameWinner = true
    }
  })
}

const checkForTie = () => {
  if (!gameWinner && !gameBoard.includes('')) {
    isTie = true
  }
}

const togglePlayerTurn = () => {
  if (!gameWinner) {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
  }
}

window.onload = startNewGame

restartButton.addEventListener('click', startNewGame)

gridCells.forEach((cell) => {
  cell.addEventListener('click', handleCellClick)
})
