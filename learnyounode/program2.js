var sum = 0;
process.argv.splice(0, 2)
process.argv.forEach(function(arg) {
  sum += Number(arg);
})
console.log(sum);
