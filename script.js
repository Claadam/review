var a = $("#factor one")
var b = $("#factor two")
var product = $("#product")
var input = $(".input")

function multiplication (arg1,arg2) {
 var c = arg1*arg2
 product.html(c)
}

input.keydown(function(e) {	
  if (e.keyCode == "13") {
    multiplication(a,b)
  }
})
