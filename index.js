function myFunc() {
    const weight = parseFloat(document.getElementById("weightInput").value);
    if (weight <= 0 || weight > 300){
        return;
    }
    const percent = 100 * 3.24 / (parseFloat(document.getElementById("weightInput").value) + 3.24)
    document.getElementById("result").innerHTML = "By the end of the race you will be " + Math.round(percent * 10) / 10 + "% milk by weight!";
}