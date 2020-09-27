import { iterateCells } from './cells.js';

const printPattern = (state) => {
  let cells = document.createElement('div');
  cells.className = 'collection';
    
  state.forEach(cell => {
    let patternCell = document.createElement('div');
    if (cell === 0) {
      patternCell.className = 'dead';
    } else {
      patternCell.className = 'alive';
    }
    cells.append(patternCell);
  });
    
  let cellsPattern = document.getElementById('cells-pattern');
  cellsPattern.append(cells);
}

export const pattern = (state) => {
  printPattern(state);
    
  for (let i = 0; i < 198; i++) {
    state = iterateCells(state);
    printPattern(state);
  }
}