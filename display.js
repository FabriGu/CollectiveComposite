// const gridContainer = document.getElementById("gridContainer");
const col = GRID_SIZE;
const row = GRID_SIZE;

// gridContainer.style.width = `${col * 50}px`;
// gridContainer.style.height = `${row * 50}px`;



//------------------------------------------------
// let c = 0;
// for (let i = 0; i < row; i++) {
//     for (let j = 0; j < col; j++) {
//         let tile = document.createElement("div");
//         tile.classList.add("tile");
//         tile.id = `${c}`;
//         c++;
//         // tile.src = "";
//         gridContainer.appendChild(tile);

//         // add border to tiles without having them expand on their size
//         tile.style.border = "1px solid black";
//         // tile.style.width = "100px";
//         // tile.style.height = "100px";
//         tile.style.display = "inline-block";
//     }
// } 
// ------------------------------------------------
let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "123456789";
let gridContainer = document.getElementById("gridContainer"); // Assuming you have a container with this ID

// Create a container for the grid with coordinates
let gridWithCoords = document.createElement("div");
// add id to gridWithCoords
gridWithCoords.id = "gridWithCoords";
gridWithCoords.style.display = "grid";
gridWithCoords.style.gridTemplateColumns = `repeat(${col + 1}, auto)`; // +1 for the coordinate column
gridWithCoords.style.gridTemplateRows = `repeat(${row + 1}, auto)`; // +1 for the coordinate row

// Add top x-axis coordinate labels
for (let i = 0; i <= col; i++) {
    let coord = document.createElement("div");
    coord.classList.add("coord");
    if (i > 0) {
        coord.textContent = letters[i - 1];
    }
    gridWithCoords.appendChild(coord);
}

// Add left y-axis coordinate labels and grid tiles
let c = 0;
for (let i = 0; i < row; i++) {
    // Add y-axis coordinate label
    let coord = document.createElement("div");
    coord.classList.add("coord");
    // coord.style.textAlign = "center";
    coord.classList.add("coordNum");
    coord.textContent = numbers[i];
    gridWithCoords.appendChild(coord);

    // Add grid tiles
    for (let j = 0; j < col; j++) {
        let tile = document.createElement("div");
        tile.classList.add("tile");
        tile.id = `${c}`;
        c++;
        gridWithCoords.appendChild(tile);

        // Add border to tiles without having them expand on their size
        tile.style.border = "1px solid white";
        // tile.style.width = "100px";
        // tile.style.height = "100px";
        tile.style.display = "inline-block";
        
    }
}

// Append the grid with coordinates to the container
gridContainer.appendChild(gridWithCoords);

//---=---------
const wrapper = document.getElementById("contentWrapper");
const title = document.querySelector("h1");
const squareTimer = document.querySelector(".squareTimer");
const timerText = document.querySelector(".timerText");
const processingScreen = document.querySelector("#processing");
const placementScreen = document.querySelector("#placementScreen");

// create flag for different pages
let experiencing = false;

let timer;
// let scale = 1;
let count;
let duration = 8;
let buttonInput = 0; // Initialize buttonInput

let timerOn = false;


// Watch for changes in buttonInput
function updateTimerState(value) {
    buttonInput = value;
    console.log(buttonInput);
    if (buttonInput == 1 && !timerOn && !experiencing) {
        experiencing = true;
        startTimer();
    } else if (buttonInput == 0 && timerOn) {
        experiencing = false;
        smoothReset();
    }
}

// Function to start the timer
function startTimer() {
    if (!timerOn) {
        timerOn = true;
        count = duration;
        squareTimer.classList.remove('invisible');
        squareTimer.classList.add('visible');


        // startSize = 200;
        timerText.textContent = count;

        clearInterval(timer);
        timer = setInterval(() => {
            count--;
            timerText.textContent = count;
            // timerText.style.fontSize = `${(count/duration)*startSize}px`;

            
            if (count < 0) {
                stopTimer();
            }

        }, 1000);
    }
}

// Function to stop the timer
function stopTimer() {
    clearInterval(timer);
    timerOn = false;
    flashScreen();
    squareTimer.classList.remove('visible');
    squareTimer.classList.add('invisible');
    
}


function smoothReset() {
    clearInterval(timer);
    timerOn = false;
    
    // Fade out timer text
    timerText.style.transition = 'opacity 0.2s';
    timerText.style.opacity = '0';
    
    // Fade out overlay
    squareTimer.style.transition = 'opacity 0.2s';
    squareTimer.classList.remove('visible');
    squareTimer.classList.add('invisible');
    
    // Reset after animations complete
    setTimeout(() => {
        count = duration;
        // timerText.textContent = duration;
        // timerText.style.fontSize = '200px';
        timerText.style.opacity = '1';
        squareTimer.style.transition = 'opacity 1s ease-in-out';
    }, 400);
}

// The flashScreen function remains the same
function flashScreen() {
    timerText.textContent = "";
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "white";
    overlay.style.zIndex = "9999";
    overlay.style.opacity = "1";
    overlay.style.transition = "opacity 1s";

    document.body.appendChild(overlay);

    setTimeout(() => {
        overlay.style.opacity = "0";
    }, 100)

    overlay.addEventListener("transitionend", () => {
        document.body.removeChild(overlay);
        count = duration;
    });
    processingScreen.classList.remove('invisible');
    processingScreen.classList.add('visible');

    sampleNextBox();  
}

function placementShow() {
    processingScreen.classList.remove("visible");
    processingScreen.classList.add('invisible');

    placementScreen.classList.remove('invisible');
    placementScreen.classList.add('visible');
    console.log("doing placement show");


    // make gridScreen visible
    // wrapper.classList.add("visible");
    setTimeout (() => {
        placementScreen.classList.remove('visible');
        placementScreen.classList.add('invisible');
        // wrapper.classList.add("visible");
        experiencing = false;
    }, 20000);

}