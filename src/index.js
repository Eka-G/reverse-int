module.exports = function reverse (n) {
  return Math.sign(n) === -1 ? 
  +(n*(-1)+'').split('').reverse().join("") :
  +(n+'').split('').reverse().join("")
}
