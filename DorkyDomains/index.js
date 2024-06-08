

let domains;
let current = -1;
let prevRand = 0;

function begin() {
    domains = document.querySelectorAll('.domain');
    let max = Math.floor(domains.length - 1);
    setInterval(cycleDivs, 1500);
}
function cycleDivs() {
    domains[prevRand].style.backgroundColor = "#4f84bd";
    let rnd = getRandomNumber(0, domains.length);
    domains[rnd].style.backgroundColor = "red";
    prevRand = rnd;
};

function getRandomNumber(min, max) {
    do {
        rnd = Math.floor(Math.random() * (max - min + 1)) + min;
    } while(rnd === prevRand)
    return rnd;
}
