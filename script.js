var frstname = "yairin"
var lastname ="ramirez"
var numberofsiblings = "7"
var haspets = false

console.log(frstname)
console.log(lastname)
console.log(numberofsiblings)
console.log(haspets)


var button = document.getElementById("hi");
var body = document.body;
var clickNumber = 0; 

button.addEventListener("click",function(){
    clickNumber++;
console.log("click!");
body.setAttribute("style", "background-color: red");

if (clickNumber > 2){
    body.setAttribute("style", "background-color: green");
}

})
















