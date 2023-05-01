function sum(array) {
  return array.reduce((acc, curr) => acc + curr, 0);
}

function multiply(array) {
  return array.reduce((acc, curr) => acc * curr, 1);
}

module.exports = {
  sum,
  multiply
};
