const pattern = () => {
  const printPattern = (state) => {
    let cellPatternCollection = document.createElement('div');
    cellPatternCollection.className = 'collection';
    
    state.forEach(cell => {
      let patternCell = document.createElement('div');
      if (cell === 0) {
        patternCell.className = 'dead';
      } else {
        patternCell.className = 'alive';
      }
      cellPatternCollection.append(patternCell);
    });
    
    cellsPattern = document.getElementById('cells-pattern');
    cellsPattern.append(cellPatternCollection);
  }
  
  let patternState = initialState;
  
  console.log(patternState);

  printPattern(patternState);
  
  for (let i = 0; i < 198; i++) {
    patternState = iterateCells(patternState);
    printPattern(patternState);
  }
}