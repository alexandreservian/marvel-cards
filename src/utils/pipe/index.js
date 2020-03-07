const pipe = (...higherFunctions) => base =>
  higherFunctions.reduce((func, nextHigherFunction) => nextHigherFunction(func), base);

export default pipe;
