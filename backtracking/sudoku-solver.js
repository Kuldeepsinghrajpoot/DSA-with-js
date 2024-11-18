function solveSudoku(board) {
  // Helper function to check if placing num at (row, col) is valid
  function isValid(board, row, col, num) {
    for (let i = 0; i < 9; i++) {
      // Check row
      if (board[row][i] === num) return false;
      // Check column
      if (board[i][col] === num) return false;
      // Check 3x3 sub-box
      const boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
      const boxCol = 3 * Math.floor(col / 3) + (i % 3);
      if (board[boxRow][boxCol] === num) return false;
    }
    return true;
  }

  // Helper function to solve the board using backtracking
  function backtrack(board) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === 0) { // Empty cell
          for (let num = 1; num <= 9; num++) {
            if (isValid(board, row, col, num)) {
              board[row][col] = num; // Place number
              if (backtrack(board)) return true; // Recur with the new state
              board[row][col] = 0; // Undo and try next number
            }
          }
          return false; // No valid number found, backtrack
        }
      }
    }
    return true; // Solved
  }

  backtrack(board);
  return board;
}

// Example usage:
let board = [
  [5, 3, 0,| 0, 7, 0, 0, 0, 0],
  [6, 0, 0,| 1, 9, 5, 0, 0, 0],
  [0, 9, 8,| 0, 0, 0, 0, 6, 0],
  [8, 0, 0,| 0, 6, 0, 0, 0, 3],
  [4, 0, 0,| 8, 0, 3, 0, 0, 1],
  [7, 0, 0,| 0, 2, 0, 0, 0, 6],
  [0, 6, 0,| 0, 0, 0, 2, 8, 0],
  [0, 0, 0,| 4, 1, 9, 0, 0, 5],
  [0, 0, 0,| 0, 8, 0, 0, 7, 9]
];

console.log("Solved Sudoku:");
console.log(solveSudoku(board));
