import './app.css';

import moduleCollection from './modules/ModuleB'
import runPets from './modules/PetModule'
import bubbleSort from './modules/BubbleSort'
import insertSort from './modules/InsertSort'
console.log(moduleCollection);
runPets();
let sortedBubble = bubbleSort([9,2,2,8,6,2,1,0]);
let sortedInsert = insertSort([9,2,2,8,6,2,1,0]);
console.log(sortedInsert);
const page = `
<div class="main">
  <h1>ES6 + Webpack 2 starter</h1>
  <div>
  	
  </div>
  <h2>Paulo Chaves from Piaui, Brazil</h2>
</div>
`;

document.getElementById('root').innerHTML = page;
