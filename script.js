console.log("loaded")
var a = $("#factor-one")
var b = $("#factor-two")
var product = $("#product")
var input = $(".input")
var pas

function multiplication (arg1,arg2) {
  console.log("called")
 var c = arg1*arg2
 product.html(c)
}

input.keydown(function(e) {	
  if (e.keyCode == "13") {
    var aval = a.val()
    var bval = b.val()
    console.log("enter")
    multiplication(aval,bval)
  }
})
