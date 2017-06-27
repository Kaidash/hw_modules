import './app.css';

import moduleCollection from './modules/ModuleB'
import {getByConstructor, Animal, Pet, Cat} from './modules/PetModule'
import bubbleSort from './modules/BubbleSort'
import insertSort from './modules/InsertSort'
import Base from './modules/furnitureModules/BaseModule'
import Chair from './modules/furnitureModules/ChairModule'
// let sortedBubble = bubbleSort([9,2,2,8,6,2,1,0]);
// let sortedInsert = insertSort([9,2,2,8,6,2,1,0]);
// console.log(sortedInsert);
//
// let cat = new Cat ('Vasya', 'Cat', 'Gray');
// console.log(cat);
// console.dir(cat);
// let pet = new Pet ('Chappy', 'Dog');
// console.log(pet);
// console.dir(pet);
// getByConstructor(cat);
// getByConstructor(pet);

let chair = new Chair(100, 100);
console.log(chair.getCordinate());
console.log( Chair.prototype.__proto__.__proto__ == Base.prototype);
const page = `
<div class="main">
  <h1>ES6 + Webpack 2 starter</h1>
  <div>
  	
  </div>
  <h2>Paulo Chaves from Piaui, Brazil</h2>
</div>
`;

document.getElementById('root').innerHTML = page;
