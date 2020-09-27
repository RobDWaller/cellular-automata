import { iterateCells } from './cells.js';

const printIterate = (state) => {
  let cellCollection = document.createElement('div');
  cellCollection.className = 'collection';
    
  state.forEach(cell => {
    let div = document.createElement('div');
    if (cell === 0) {
      div.className = 'dead';
    } else {
      div.className = 'alive';
    }
    cellCollection.append(div);
  });
    
  let cells = document.getElementById('cells-iterate');
  if (cells.children.length > 0) {
    cells.children[0].remove();
  }
  cells.append(cellCollection);
}
  
const iteration = (state) => {
  state = iterateCells(state);
  printIterate(state);
  return state;
}

export const iterate = (state) => {
  setInterval(() => {
    state = iteration(state);
  }, 500);
}