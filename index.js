var countdownDate = new Date("2026-10-17T19:00:00.000Z").getTime();
var x = setInterval(updateCountdown, 1000);
const roster = new Map([
        ["Cooper P.", null],
        ["Jacob O.W.", "Imogen C."],
        ["Owen B.", "Lynn P."],
        ["Chandler M.", null],
        ["Jackson B.", "Troy S."],
        ["Theo G.", null],
        ["Reid M.", null],
        ["Brandon K.", "Sam L."],
        ["Angel G.", null],
        ["Edgar W.", null],
        ["Joseph P.", null],
        ["Axel M.", null],
        ["Marina C.", null]
    ]
)

const rosterList = document.getElementById("rosterList");
for (const [milker, assistant] of roster.entries()){
    let milkerElement = document.createElement("p");
    milkerElement.textContent = milker;
    rosterList.append(milkerElement);
    if (assistant != null){
        let assistantElement = document.createElement("p");
        assistantElement.textContent = assistant;
        rosterList.append(assistantElement);
    }
    else {
        rosterList.append(document.createElement("p"))
    }
}

document.getElementById("weightInput").addEventListener('change', calcPercent);

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
