import { state } from './state.js';
import { iterate } from './iterate.js';
import { pattern } from './pattern.js';

window.onload = () => {
  iterate(state);
  pattern(state);
}