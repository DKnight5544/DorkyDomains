

let domains;
let current = -1;
let prevRand = 0;

function begin() {
    domains = document.querySelectorAll('.domain');
    let max = Math.floor(domains.length - 1);
    setInterval(colorizeRandomly, 1500);
    setInterval(setFontSizes, 1500);
}
function colorizeRandomly() {
    domains[prevRand].style.backgroundColor = "#4f84bd";
    let rnd = getRandomNumber(0, domains.length - 1);
    domains[rnd].style.backgroundColor = "red";
    prevRand = rnd;    
};


function getRandomNumber(min, max) {
    do {
        rnd = Math.floor(Math.random() * (max - min + 1)) + min;
    } while(rnd === prevRand)
    return rnd;
}

function setFontSizes(){
    for (let i = 0; i < domains.length; i++) {
        setFontSize(domains[i]);
    }
}


function setFontSize(container) {
    // Create a temporary span element to measure text size
    let tempDiv = document.createElement('div');
    tempDiv.innerHTML = container.innerHTML; // Use the innerHTML of the container
    tempDiv.className = container.className; // Adopt the class of the container

    // Initialize variables for binary search
    let minFontSize = 1; // Minimum font size
    let maxFontSize = 25; // Maximum font size, can be adjusted
    let currentFontSize;

    // Binary search to find the maximum font size
    while (minFontSize < maxFontSize - 1) {
        currentFontSize = (minFontSize + maxFontSize) / 2;
        tempDiv.style.fontSize = `${currentFontSize}px`;

        // Check if the current font size is too large
        if (tempDiv.scrollWidth > container.clientWidth || tempDiv.scrollHeight > container.clientHeight) {
            maxFontSize = currentFontSize - 1;
        } else {
            minFontSize = currentFontSize + 1;
        }
    }

    container.style.fontSize = tempDiv.style.fontSize;


}

