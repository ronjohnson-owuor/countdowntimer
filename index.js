
var days = document.getElementById("days");
var hours = document.getElementById("hours");
var mins = document.getElementById("mins");

let minutes = 60;
mins.innerHTML = minutes +" "+"M";
setInterval(function() {
if (minutes === 0) {
minutes = 60;
displayHours();
} else {
minutes--;
mins.innerHTML = minutes +" "+"M";  
}
},60000);




let hour = 10;
hours.innerHTML = hour +" "+"H";
function displayHours(){
hour --;
hours.innerHTML = hour +" "+"H";
if(hour == 0){
hour = 10;
displayDays();
}
}



let day =20;
days.innerHTML = day +" "+"D";
function displayDays(){
day --;
days.innerHTML=day +" "+"D";
}