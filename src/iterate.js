const iterate = () => {
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
    
    cells = document.getElementById('cells-iterate');
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
  
  let iterateState = initialState;
  
  console.log(iterateState);

  setInterval(() => {
    iterateState = iteration(iterateState);
  }, 500);
}