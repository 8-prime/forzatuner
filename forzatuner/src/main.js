
let tuner = new Object();

function confirmWd(){
    tuner.wd = document.getElementById("wd").value;
    localStorage.setItem('tuner', JSON.stringify(tuner));
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
};

function calculateValues(){
    let results = conversion(JSON.parse(localStorage.getItem('tuner') || {}));

    document.getElementById("arf").innerHTML = document.getElementById("arf").innerHTML + " " + results.arf;
    document.getElementById("arb").innerHTML = document.getElementById("arb").innerHTML + " " + results.arb;

    document.getElementById("spf").innerHTML = document.getElementById("spf").innerHTML + " " + results.spf;
    document.getElementById("spb").innerHTML = document.getElementById("spb").innerHTML + " " + results.spb;
    
    document.getElementById("shf").innerHTML = document.getElementById("shf").innerHTML + " " + results.shf;
    document.getElementById("shb").innerHTML = document.getElementById("shb").innerHTML + " " + results.shb;
};

function conversion(atuner){
    let tuneVals = new Object();

    tuneVals.arf = (+((atuner.armax - atuner.armin) * (atuner.wd / 100)) + +atuner.armin);
    tuneVals.arb = (+((atuner.armax - atuner.armin) * ((100 - atuner.wd) / 100)) + +atuner.armin);

    tuneVals.spf = (+((atuner.springmax - atuner.springmin) * (atuner.wd / 100)) + +atuner.springmin);
    tuneVals.spb = (+((atuner.springmax - atuner.springmin) * ((100 - atuner.wd) / 100)) + +atuner.springmin);

    tuneVals.shf = (+((atuner.shockmax- atuner.shockmin) * (atuner.wd / 100)) + +atuner.shockmin);
    tuneVals.shb = (+((atuner.shockmax - atuner.shockmin) * ((100 - atuner.wd) / 100)) + +atuner.shockmin);

    return tuneVals;
};