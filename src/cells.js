const newState = (index, lowerCheck, upperCheck, state) => {
  if ((state[lowerCheck] === 1 && state[index] === 1 && state[upperCheck] === 1)) {
    return 0;
  }
  
  if ((state[lowerCheck] === 1 && state[index] === 1 && state[upperCheck] === 0)) {
    return 0;
  }

  if ((state[lowerCheck] === 1 && state[index] === 0 && state[upperCheck] === 1)) {
    return 0;
  }

  if ((state[lowerCheck] === 1 && state[index] === 0 && state[upperCheck] === 0)) {
    return 1;
  }

  if ((state[lowerCheck] === 0 && state[index] === 1 && state[upperCheck] === 1)) {
    return 1;
  }

  if ((state[lowerCheck] === 0 && state[index] === 1 && state[upperCheck] === 0)) {
    return 1;
  }
  
  if ((state[lowerCheck] === 0 && state[index] === 0 && state[upperCheck] === 1)) {
	  return 1;
  }

  if ((state[lowerCheck] === 0 && state[index] === 0 && state[upperCheck] === 0)) {
    return 0;
  }
} 

const stateIndexEnd = (state) => {
	return state.length - 1;
}

const rules = (index, state) => {
	const end = stateIndexEnd(state);
  if (index === 0) {
  	return newState(index, end, 1, state);
  }
  
  if (index === end) {
  	return newState(index, end - 1, 0, state);
  }
  
  return newState(index, index - 1, index + 1, state);
}

export const iterateCells = (state) => {
	const newState = [];
  for (let i = 0; i < state.length; i++) {
  	const newCell = rules(i, state);
    newState.push(newCell);
  }
  
  return newState;
}