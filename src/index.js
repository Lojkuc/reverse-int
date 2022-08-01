module.exports = function reverse (n) {
  return n.toString().split("").reverse().map(el=>el=="-"?undefined:el).join("")
}
