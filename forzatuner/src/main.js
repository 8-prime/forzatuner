
let tuner = new Object();

function confirmWd(){
    tuner.wd = document.getElementById("wd").value;
    localStorage.setItem('tuner', JSON.stringify(tuner));
    alert("hallo");
};

function enterValues(){
    tuner.armin = document.getElementById("armin").value;
    tuner.armax = document.getElementById("armax").value;

    tuner.springmin = document.getElementById("springmin").value;
    tuner.springmax = document.getElementById("springmax").value;

    tuner.shockmin = document.getElementById("shockmin").value;
    tuner.shockmax = document.getElementById("shockmax").value;

    tuner.wd = JSON.parse(localStorage.getItem('tuner') || {}).wd;
    
    localStorage.setItem('tuner', JSON.stringify(tuner));
    alert("entererd vals");
};

function calculateValues(){
    conversion(JSON.parse(localStorage.getItem('tuner') || {}));
    alert("gonna calc");
};

function conversion(atuner){
    let tuneVals = new Object();

    tuneVals.arf = ((atuner.armax - atuner.armin) * (atuner.wd / 100)) + 1;
    tuneVals.arb = ((atuner.armax - atuner.armin) * ((100 - atuner.wd) / 100)) + 1;

    tuneVals.spf = ((atuner.springmax - atuner.springmin) * (atuner.wd / 100)) + 1;
    tuneVals.spf = ((atuner.springmax - atuner.springmin) * ((100 - atuner.wd) / 100)) + 1;

    tuneVals.shf = ((atuner.shockmax- atuner.shockmin) * (atuner.wd / 100)) + 1;
    tuneVals.shb = ((atuner.shockmax - atuner.shockmin) * ((100 - atuner.wd) / 100)) + 1;

    return tuneVals;
};