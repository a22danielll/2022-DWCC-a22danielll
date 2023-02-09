import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

//const obj1 = { a: 0, b: { c: 0 } };
//const obj2 = Object.assign({}, obj1);
//console.log(obj2); // { a: 0, b: { c: 0 } }
//obj1.a = 1;
//console.log(obj1); // { a: 1, b: { c: 0 } }
//console.log(obj2); // { a: 0, b: { c: 0 } }
//obj2.a = 2;
//console.log(obj1); // { a: 1, b: { c: 0 } }
//console.log(obj2); // { a: 2, b: { c: 0 } }
//obj2.b.c = 3;
//console.log(obj1); // { a: 1, b: { c: 3 } }
//console.log(obj2); // { a: 2, b: { c: 3 } }

const obj1 = { a: 0, b: { c: 0 } };
const objDeepClone = cloneDeep(obj1);
obj1.b.c = 1;
console.log(objDeepClone); // // { a: 0, b: { c: 0 } }
