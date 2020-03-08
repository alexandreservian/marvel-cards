const generateTypeError = (message = '') =>
  (function() {
    throw new TypeError(message);
  })();

export default generateTypeError;
