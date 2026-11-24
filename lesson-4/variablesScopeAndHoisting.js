let varWithoutValue;
varWithoutValue = 90;
// const size = 10;
// let count = 5;
// var total = 100;

// // const size = 20 
// count = 30;
// total = 150;
// var total = 200;

// console.log(size);
// console.log(count);
// console.log(total);

/** block scope */
// {
//     const size = 50;
//     console.log('block', size);
//     let count = 99;
//     console.log('block', count);
//     var total = 'qqq';
//     console.log('block', total);
// }

// console.log('global', size);
// console.log('global', count);
// console.log('global', total);

/** function scope */
// function testFunctionScope() {
//     const size = 200;
//     console.log('function', size);
//     console.log('functionBefore', count);
//      count = 300;
//     console.log('function', count);
//      total = 400;
//     console.log('function', total);
// }

// console.log(typeof testFunctionScope);
// testFunctionScope();
// console.log('global', size);
// console.log('global', count);
// console.log('global', total);



/** hoisting */
// const hoistedConst = 'I am not hoisted';
// console.log('hoisting', hoistedConst);

// var hoistedVar;
// console.log('hoisting', hoistedVar);
// var hoistedVar = 'I am hoisted';
// console.log('hoisting after declaration', hoistedVar);


/** functions */
// const arrowFn = () => {
//     console.log('arrow function');
// }
// // arrowFn()

// // regularFn()
// const regularFn = function() {
//     console.log('regular function');
// }

// regularDeclarationFn()

// function regularDeclarationFn() {
//     console.log('regular declaration function');
// }