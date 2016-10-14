console.log("started")
var button = $("#Button")
var display = $("#display")
var clicks = 0

function counter() {
 clicks++ 
 display.html(clicks + " cookies")
 console.log(clicks)
}