const rosterArray = [
    "Cooper P.",
    "Jacob O.W.",
    "Owen B.",
    "Chandler M.",
    "Jackson B.",
    "Theo G.",
    "Reid M.",
    "Brandon K.",
    "Angel G.",
    "Edgar W.",
    "Joseph P.",
    "Axel M.",
    "Marina C."
];

var countdownDate = new Date("2026-10-17T19:00:00.000Z").getTime();
var x = setInterval(updateCountdown, 1000);

const rosterList = document.getElementById("rosterList");
for (const person of rosterArray){
    let personElement = document.createElement("li");
    personElement.textContent = person;
    rosterList.append(personElement);
}

function updateCountdown() {
    var now = Date.now();

    var distance = countdownDate-now;

    var days = Math.floor(distance/(1000*60*60*24));
    var hours = Math.floor((distance%(1000*60*60*24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance%(1000*60*60)) / (1000 * 60));
    var seconds = Math.floor((distance%(1000*60)) / (1000));

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
}

function calcPercent() {
    const weight = parseFloat(document.getElementById("weightInput").value);
    if (isNaN(weight) || weight <= 0 || weight > 300){
        return;
    }
    const percent = 100 * 3.25 / (weight + 3.25);
    const result = document.getElementById("result");
    result.hidden = false;
    result.innerHTML = "By the end of the race you will be " + Math.round(percent * 10) / 10 + "% milk by weight!";
}
