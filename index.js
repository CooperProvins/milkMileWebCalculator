function myFunc() {
    const weight = parseFloat(document.getElementById("weightInput").value);
    if (isNaN(weight) || weight <= 0 || weight > 300){
        return;
    }
    const percent = 100 * 3.25 / (parseFloat(document.getElementById("weightInput").value) + 3.24)
    document.getElementById("result").innerHTML = "By the end of the race you will be " + Math.round(percent * 10) / 10 + "% milk by weight!";
}

var countdownDate = new Date("Oct 17, 2026, 12:00:00").getTime();
var x = setInterval(updateCountdown, 1000);

function updateCountdown() {
    var now = new Date().getTime();

    var distance = countdownDate-now;

    var days = Math.floor(distance/(1000*60*60*24));
    var hours = Math.floor((distance%(1000*60*60*24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance%(1000*60*60)) / (1000 * 60));
    var seconds = Math.floor((distance%(1000*60)) / (1000));

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
}