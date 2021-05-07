function latticePaths(gridSize) {
  const grid = new Array(gridSize);
  for (let i = 0; i < gridSize; i++) {
    grid[i] = new Array(gridSize).fill(0);
  }
  grid[0][0] = 2;
  for (let i = 1; i < gridSize; i++) {
    grid[0][i] = grid[0][i - 1] + 1;
  }
  for (let j = 1; j < gridSize; j++) {
    grid[j][0] = grid[j - 1][0] + 1;
  }
  for (let i = 1; i < gridSize; i++) {
    for (let j = 1; j < gridSize; j++) {
      grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
    }
  }
  return grid[gridSize - 1][gridSize - 1];
}

latticePaths(9);
