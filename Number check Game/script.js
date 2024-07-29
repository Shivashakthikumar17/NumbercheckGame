var guessnumber=document.getElementById("guessnumber")
var result=document.getElementById("result")
var randomnumber=Math.floor(Math.random()*10)+1
function check(){
var enternumber=guessnumber.value
if(randomnumber==enternumber){
result.textContent="Right"
alert("you Won")
}
else{
result.textContent="wrong"
}
}