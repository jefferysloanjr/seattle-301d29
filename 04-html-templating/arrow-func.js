function logger(input) {
  console.log('my input:', input);
}

logger('old school es5 logger');

let logger1 = (input) => console.log('logger 1:', input);
let logger2 = input => console.log('logger 2:', input);

logger1('i am logger 1 with parens');
logger2('i am logger 2 without parens');

function adder(a, b, c) {
  return a + b + c;
}

adder(1, 2, 3);

let adder2 = (a, b, c) => a + b + c;

adder2(5, 10, 15);