/* A brief overview of Javascript functions */
/*
  - Every JavaScript function is actually a Function object. 
  - This means it inherits the Function object prototype functions. 
  - A function is composed of a sequence of statements called the function body. 
  - Values can be passed to a function (called 'arguments'), and the function will return a value.
  - In JavaScript, functions are first-class objects, because they can have properties and methods.
  - What distinguishes them from other objects is that functions can be called.
  
  See more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
*/

// ES5 (AKA EMCAScript 5, EMCAScript 2009)
/* ---------------------------------- Function Declarations ----------------------------*/
// to call function
myFunction();

function myFunction() {
  // statements
}

/*
 - Function declarations are hoisted to the top of the enclosing function or global scope so can be called before the declaration.
 - A standard Javascript function is synchronous so it is blocking.
 - By default functions return undefined* but can return another value using the return keyword.
 - Function Declarations should not be used in conditional statements, use Function Expressions instead.
 - See more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function

 *In the case of a constructor called with the new keyword, the default value is the value of its 'this' parameter.
*/

/* ---------------------------- Function Expressions ------------------------*/
// Named function expression
const myFunction = function namedFunction() {
  // statements
};

// Anonymous function expression
const myFunction = function() {
  // statements
};

// to call either function
myFunction();

/*
 - A function expression is very similar to and has almost the same syntax as a function declaration.
 - The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions.
 - Function expressions are not hoisted to the beginning of the scope so cannot be used before they appear in the code.
 - Naming a function expression can be useful for locating a bug in the call stack.
 - The function name is only local to the function body.
 - A function expression can be used as an IIFE which runs as soon as it is defined. (See below)
 - Commonly used as a callback function.
 - See more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
*/

/* --------------------------------- IIFE -----------------------------*/
(function() {
  // statements
})();

// Or
(function() {
  // statements
})();

/*
 - Immediately Invoked Function Expressions (IIFEs) are called immediately with the expression and are not stored/accessable elsewhere in the code.
 - It is a design pattern which is also known as a Self-Executing Anonymous Function.
 - The function scope of an IIFE is used to prevent leaking local variables to the global scope, though this can now be done using let/const rather than var.
 - IIFEs can be used to wrap state (or data in general) that's meant to be private.
 - This syntax cal be used for anonymous or named function expressions as well as arrow functions.
*/

/* ---------------------------- Callback Function ------------------------*/
// This outer function has a function parameter
function outerFunction(callback) {
  // statements
  let arg = 'value';
  callback(arg);
}

function callbackFunction(param) {
  // statements
}

outerFunction(callbackFunction);

/*
 - A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
 - If the outer function has a function parameter it can define when the callback function is called by calling callback().
 - The callback function can be any type of function.
*/

// ES6 (AKA EMCAScropt 6, EMCAScript 2015)
/* ---------------------------- Arrow Functions ----------------------------*/
// Arrow function expression
// No parameters and multiple statements
const myFunction = () => {
  // statements
};
// Single parameter and multiple statements
const myFunction = arg => {
  //statements
};
// Multiple parameters and multiple statements
const myFunction = (arg1, arg2) => {
  // statements
};

// Anonymous arrow functions (commonly passed as callback functions)
function myFunction(callback) {
  // ...
}
// No parameters and multiple statements
myFunction(() => {
  // statements
});
// Single parameter and multiple statements
myFunction(arg => {
  // statements
});
// Multiple parameters and multiple statements
myFunction((arg1, arg2) => {
  // statements
});
// The only statement is a return statement.
myFunction((...args) => args.length);

/*
 - An arrow function is a function expression.
 - Arrow functions should only be used when functions act as data and not as methods.
 - When there is only one parameter, we can remove the surrounding parentheses.
 - When the only statement in an arrow function is `return`, we can remove `return` and remove the surrounding curly brackets.
 - In a concise body (no curly brackets), only an expression is specified, which becomes the implicit return value. In a block body (curly brackets), you must use an explicit return statement or return undefined.
 - It is possible to pass deconstructing paramenters.
 - Arrow functions does not have it's own 'this', the 'this' of it's enclosing scope/function.
*/

/* ---------------------------- Function Promises ------------------------*/
function myFunction() {
  return new Promise(function(resolve, reject) {
    if (x) {
      resolve(data);
    } else {
      reject(error);
    }
  });
}

myFunction()
  .then(data => {
    data;
  })
  .catch(error => {
    error;
  })
  .finally(() => {
    // statements
  });

/*
 - Use promises whenever you are using asynchronous or blocking code.
 - Promises are like callbacks but instead of telling the first function what to do once it's async tasks completes, the first function produces a promise object which you can THEN decide what to do with.
 - For all practical purposes, resolve() maps to .then() and reject() maps to .catch()
 - Must use both .then() and .catch()
 - The return type of all the methods in the Promise object, regardless of whether they are static methods or prototype methods, is again a Promise.
 - You can also use .finally() to do an action after either case, reject or resolve.
 - The Promise.all() method can be used to wait until an array of promises has resolved and then resolve an array of resolves or the reject of the first promise to reject.
*/

// ES7
/* ---------------------------- Async Functions ------------------------*/
// Async function declaration
async function myFunction() {
  // statements
}

// Or

// Async anonymous function expression (can also be named function expression)
const myFunction = async () => {
  // statements
};

/*
 - Async functions automatically use an implicit Promise to return results.
 - If the Async Function includes another async function/promise you can use the await keyword.
 - await blocks the code execution within the async function until another function is resolved/returned.
 - There can be multiple awat statements within a single async function.
 - A problem with await is that it will silently exit your function if no try-catch block was provided for it.
 - Every time you use await you are using BLOCKING code.
 */

/* ----------------------- try...catch async-await function example -------------------*/
async function thisThrows() {
  throw new Error('Thrown from thisThrows()');
}

async function run() {
  try {
    await thisThrows();
  } catch (e) {
    console.error(e);
  } finally {
    console.log('We do cleanup here');
  }
}

run();

/*Output:
  Error: Thrown from thisThrows()
    ...stacktrace
  We do cleanup here*/
