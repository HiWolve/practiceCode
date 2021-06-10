console.log('Kreston');
console.log(9);

let upper = function (string) {

  return string.toUpperCase();

}

let lower = function (string) {
  return string.toLowerCase();

}

let concat = function (str1, str2, cb) {
  let together = str1 + str2;

  if (cb === undefined) {
    return together
  }
  return cb(together)
}
