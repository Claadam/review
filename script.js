function whenClicked() {
  console.log("running function")
  return "1111"
}

var a = whenClicked()
var b = whenClicked

console.log(a.toString())
console.log(b.toString())