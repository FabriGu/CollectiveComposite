const LETTER_BITMAPS = [
    // A (14x14)
    [
      
      0b00001111110000,
      0b00011111111000,
      0b00111111111100,
      0b01110000011110,
      0b01110000011110,
      0b01110000011110,
      0b01111111111110,
      0b01111111111110,
      0b01110000011110,
      0b01110000011110,
      0b01110000011110,
      0b01110000011110,
      0b01110000011110,
      0b00000000000000
      
    ],
   
    // B
    [
      
      0b01111111111000,
      0b01111111111100,
      0b01110000011110,
      0b01110000011110,
      0b01110000011110,
      0b01111111111100,
      0b01111111111000,
      0b01111111111100,
      0b01110000011110,
      0b01110000011110,
      0b01110000011110,
      0b01111111111100,
      0b01111111111000,
      0b00000000000000
      
    ],
   
    // C 
    [
      
      0b00011111111000,
      0b00111111111100,
      0b01110000011110,
      0b01110000000000,
      0b01110000000000,
      0b01110000000000,
      0b01110000000000,
      0b01110000000000,
      0b01110000000000,
      0b01110000000000,
      0b01110000011110,
      0b00111111111100,
      0b00011111111000,
      0b00000000000000
    ],
   
    // D
    [
      
      0b01111111110000,
      0b01111111111000,
      0b01110000111100,
      0b01110000011110,
      0b01110000011110,
      0b01110000011110,
      0b01110000011110,
      0b01110000011110,
      0b01110000011110,
      0b01110000011110,
      0b01110000111100,
      0b01111111111000,
      0b01111111110000,
      0b00000000000000
    ],
   
    // E
    [
      
      0b01111111111110,
      0b01111111111110,
      0b01110000000000,
      0b01110000000000,
      0b01110000000000,
      0b01111111111110,
      0b01111111111110,
      0b01110000000000,
      0b01110000000000,
      0b01110000000000,
      0b01110000000000,
      0b01111111111110,
      0b01111111111110,
      0b00000000000000
    ],
   
    // F
    [
      
      0b01111111111110,
      0b01111111111110,
      0b01110000000000,
      0b01110000000000,
      0b01110000000000,
      0b01111111111000,
      0b01111111111000,
      0b01110000000000,
      0b01110000000000,
      0b01110000000000,
      0b01110000000000,
      0b01110000000000,
      0b01110000000000,
      0b00000000000000
    ],
   
    // G
    [
      
      0b00011111111000,
      0b00111111111100,
      0b01110000011110,
      0b01110000000000,
      0b01110000000000,
      0b01110011111110,
      0b01110011111110,
      0b01110000011110,
      0b01110000011110,
      0b01110000011110,
      0b01110000011110,
      0b00111111111100,
      0b00011111111000,
      0b00000000000000
    ]
   ];
   
   const NUMBER_BITMAPS = [
    // 1
    [
      
      0b00001111000000,
      0b00011111000000,
      0b00111111000000,
      0b00001111000000,
      0b00001111000000,
      0b00001111000000,
      0b00001111000000,
      0b00001111000000,
      0b00001111000000,
      0b00001111000000,
      0b00001111000000,
      0b00111111110000,
      0b00111111110000,
      0b00000000000000
    ],
   
    // 2 
    [
      
      0b00111111110000,
      0b01111111111000,
      0b01110000111100,
      0b00000000111100,
      0b00000001111000,
      0b00000011110000,
      0b00001111100000,
      0b00011111000000,
      0b00111100000000,
      0b01111000000000,
      0b01110000000000,
      0b01111111111100,
      0b01111111111100,
      0b00000000000000
    ],
   
    // 3
    [
      
      0b00111111110000,
      0b01111111111000,
      0b01100000111100,
      0b00000000111100,
      0b00000000111100,
      0b00001111111000,
      0b00001111111000,
      0b00000000111100,
      0b00000000111100,
      0b00000000111100,
      0b01100000111100,
      0b01111111111000,
      0b00111111110000,
      0b00000000000000
    ],
   
    // 4
    [
      
      0b00000011111000,
      0b00000111111000,
      0b00001111111000,
      0b00011101111000,
      0b00111001111000,
      0b01110001111000,
      0b01111111111110,
      0b01111111111110,
      0b00000001111000,
      0b00000001111000,
      0b00000001111000,
      0b00000001111000,
      0b00000001111000,
      0b00000000000000
    ],
   
    // 5
    [
      
      0b01111111111100,
      0b01111111111100,
      0b01110000000000,
      0b01110000000000,
      0b01110000000000,
      0b01111111110000,
      0b01111111111000,
      0b00000000111100,
      0b00000000111100,
      0b00000000111100,
      0b01100000111100,
      0b01111111111000,
      0b00111111110000,
      0b00000000000000
    ],
   
    // 6
    [
      
      0b00111111110000,
      0b01111111111000,
      0b01110000111100,
      0b01110000000000,
      0b01110000000000,
      0b01111111110000,
      0b01111111111000,
      0b01110000111100,
      0b01110000111100,
      0b01110000111100,
      0b01110000111100,
      0b01111111111000,
      0b00111111110000,
      0b00000000000000
    ],
   
    // 7
    [
      
      0b01111111111100,
      0b01111111111100,
      0b00000000111100,
      0b00000001111000,
      0b00000011110000,
      0b00000111100000,
      0b00001111000000,
      0b00011110000000,
      0b00011110000000,
      0b00011110000000,
      0b00011110000000,
      0b00011110000000,
      0b00011110000000,
      0b00000000000000
    ]
   ];

const askForPort = true; // Set to false after first connection 
const serial = new p5.WebSerial(); // set up new serial object

// Grid configuration
const GRID_SIZE = 7; // define the grid size (defines an equal width and height grid)
let boxWidth, boxHeight;
// let boxWidth = 368/ GRID_SIZE;
// let boxHeight = 368/ GRID_SIZE;
let gridSequence = [];
let currentBoxIndex = 0;
let sampledImage = null;

let isProcessing = false;

// ml.5
let faceMesh;
let video;
let faces = [];
let options = { maxFaces: 1, refineLandmarks: false, flipHorizontal: false };
let sampleButton;
let portButton;

let leftEyeKeypoint = 33;
let rightEyeKeypoint = 263;

// global size variables 
const PRINTER_IMAGE_WIDTH = 384;  // Desired width in pixels
const PRINTER_IMAGE_HEIGHT = 384; // Desired height in pixels

// CLAUDE: Update BYTES_PER_ROW calculation based on new width
const BYTES_PER_ROW = PRINTER_IMAGE_HEIGHT / 8; // Number of bytes needed for each row

// mae inString a global variable so can be updated by serialEvent and then accessed to confirm rows
let inString= null;

function preload() {
  faceMesh = ml5.faceMesh(options);
}

function setup() {
  let canvasX = 640;
  let canvasY = 480;
  createCanvas(canvasX, canvasY);

  // very important to set pixel density to 1 to avoid scaling issues with image
  pixelDensity(1);
  
  // Setup WebSerial
  if (!navigator.serial) {
    alert("WebSerial is not supported. Try Chrome.");
  }
  
  if (askForPort) {
    makePortButton();
  } else {
    serial.getPorts();
  }
  
  serial.on("portavailable", openPort);
  serial.on("data", serialEvent);
  
  // Setup face tracking
  video = createCapture(VIDEO);
  video.size(canvasX, canvasY);
  video.hide();
  faceMesh.detectStart(video, gotFaces);
  
  // Create sampling button
  sampleButton = createButton('Sample Grid Box');
  sampleButton.position(10, height + 10);
  sampleButton.mousePressed(() => {
    if (!isProcessing) {
      sampleNextBox();
    } else {
      console.log("Still processing previous sample");
    }
  });
  sampleButton.addClass("sampleBtn");
  
  // Generate random sequence
  gridSequence = generateRandomSequence(GRID_SIZE * GRID_SIZE);
}

function draw() {
  image(video, 0, 0, width, height);
  
  // Draw face tracking and grid
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i];
      drawFaceGrid(face); 
      // BELOW FOR MESH
    // for (let j = 0; j < face.keypoints.length; j++) {
    //   let keypoint = face.keypoints[j];
    //   fill(0, 255, 0);
    //   noStroke();
    //   ellipse(keypoint.x, keypoint.y, 5);
    // }
    // keypointLE = face.keypoints[leftEyeKeypoint];
    //   fill(255, 0, 0);
    //   noStroke();
    //   ellipse(keypointLE.x, keypointLE.y, 5);
    //   keypointRE = face.keypoints[rightEyeKeypoint];
    //   fill(255, 0, 0);
    //   noStroke();
    //   ellipse(keypointRE.x, keypointRE.y, 5);
  }
}

function drawFaceGrid(face) {
  // Get eye positions
  let leftEye = face.keypoints[leftEyeKeypoint];  
  let rightEye = face.keypoints[rightEyeKeypoint];
  
  // Calculate eye distance for scaling
  let eyeDistance = dist(leftEye.x, leftEye.y, rightEye.x, rightEye.y);
  
  // Calculate grid size based on eye distance
  let gridWidth = eyeDistance * 2;  // Grid is 3x eye distance wide
  let gridHeight = eyeDistance * 2.5;  // And 3.5x eye distance tall
  
  // Calculate grid position (centered on face)
  let centerX = (leftEye.x + rightEye.x) / 2;
  let centerY = (leftEye.y + rightEye.y) / 2;
  let minX = centerX - (gridWidth / 2);
  let minY = centerY - (gridHeight / 2);
  
  // Calculate box dimensions
  boxWidth = gridWidth / GRID_SIZE;
  boxHeight = gridHeight / GRID_SIZE;
  
  // Draw grid
  stroke(255);
  noFill();
  for (let i = 0; i <= GRID_SIZE; i++) {
    let x = minX + (i * boxWidth);
    line(x, minY, x, minY + gridHeight);
  }
  for (let i = 0; i <= GRID_SIZE; i++) {
    let y = minY + (i * boxHeight);
    line(minX, y, minX + gridWidth, y);
  }
  
  // Number boxes
  textSize(eyeDistance / 12);
  fill(255);
  for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
      let x = minX + (j * boxWidth);
      let y = minY + (i * boxHeight);
      text(i * GRID_SIZE + j, x + 2, y + 8);
    }
  }
}

function generateRandomSequence(length) {
  let seq = Array.from({length}, (_, i) => i);
  for (let i = seq.length - 1; i > 0; i--) {
    let j = floor(random(i + 1));
    [seq[i], seq[j]] = [seq[j], seq[i]];
  }
  return seq;
}

function serialEvent() {
    inString = serial.readStringUntil("\n");
  if (inString) {
    console.log("Received:", inString);
    inString = inString.trim();  // Remove whitespace/newlines
    if (inString == "D") {
      console.log("done");
      // placementShow;
      setTimeout(placementShow, 50);

    }else if(inString == "W"){
      console.log("gettingsomething");
    }
    let value = parseInt(inString);
    if (!isNaN(value)) {
      updateTimerState(value);
    }

  }
}

function openPort() {
  serial.open();
  if (portButton) portButton.hide();
}

function makePortButton() {
  portButton = createButton("choose port");
  portButton.position(10, 10);
  portButton.mousePressed(() => serial.requestPort());
  portButton.addClass("portBtn");
}

function gotFaces(results) {
  faces = results;
}

async function sampleNextBox() {
  // Prevent multiple simultaneous calls
  if (isProcessing) {
    console.log("Already processing or no faces detected");
    return;
  }
  isProcessing = true;
//   console.log(faces.length);
  if (faces.length === 0) return;

  const placementPreviewContainer =  document.querySelector("#previewContainer");
  
  let face = faces[0];
  let leftEye = face.keypoints[leftEyeKeypoint];
  let rightEye = face.keypoints[rightEyeKeypoint];
  let eyeDistance = dist(leftEye.x, leftEye.y, rightEye.x, rightEye.y);
  let gridWidth = eyeDistance * 2;
  let gridHeight = eyeDistance * 2.5;
  let centerX = (leftEye.x + rightEye.x) / 2;
  let centerY = (leftEye.y + rightEye.y) / 2;
  let minX = centerX - (gridWidth / 2);
  let minY = centerY - (gridHeight / 2);

  // Calculate box dimensions
  boxWidth = gridWidth / GRID_SIZE;
  boxHeight = gridHeight / GRID_SIZE;
  
  let boxIndex = gridSequence[currentBoxIndex++];
  console.log("Box Index: " + boxIndex);
  console.log(getGridCoordinate(GRID_SIZE, boxIndex))
  
  let row = floor(boxIndex / GRID_SIZE);
  let col = boxIndex % GRID_SIZE;
  
  // Sample the box
  let x = minX + (col * boxWidth);
  let y = minY + (row * boxHeight);

  // Create image at 320px width (40 bytes per row)
  sampledImage = createGraphics(PRINTER_IMAGE_WIDTH, PRINTER_IMAGE_HEIGHT);
  sampledImage.copy(video, x, y, boxWidth, boxHeight, 0, 0, PRINTER_IMAGE_WIDTH, PRINTER_IMAGE_HEIGHT);
  
  let packagedRows = packagePrinterData(sampledImage);
  
  // Create printer preview
  let printerPreview = simulatePrinterOutput(sampledImage);
//   sampledImage = printerPreview;

  // display previewDiv canvas to img
  let img = document.createElement('img');
  img.src = printerPreview.elt.toDataURL();

  // Set the size of the img to match the size of the tile div
  img.style.width = '100%';
  img.style.height = '100%';
//   img.style.transform = 'rotate(-90deg)';
  placementPreviewContainer.innerHTML = '';
  placementPreviewContainer.appendChild(img);

  // place child in correct position on tile of gridContainer
  // append the image to the inside of teh tile div but at the correct position
  const tiles = document.querySelectorAll('.tile');
  // go through all tiles and reset background color
  for (let tile of tiles) {
    tile.style.backgroundColor = "rgba(0,0,0,1)";
}

  if (tiles[boxIndex]) {
    // tiles[boxIndex].appendChild(img);
    tiles[boxIndex].style.backgroundColor = "rgba(45,45,242,1)"
  }
  // 
//   console.log("SENDING ");
  sendCoordinateBitmap(getGridCoordinate(GRID_SIZE, boxIndex));
  // small delay
    await new Promise(resolve => setTimeout(resolve, 1000));    

  try {
    // let c = 0;
    serial.write('X'); // Send start signal once
    console.log(packagedRows.length);

    // Send all rows sequentially
    // let dataIndex = 0;

    for (let i = 0; i < packagedRows.length; i++) {
        serial.write(packagedRows[i]);
        console.log("console log row i: " + i);

        // Wait for confirmation of this row
        let confirmed = false;
        const startTime = Date.now();

        while (!confirmed && (Date.now() - startTime) < 2000) {  // 2 second timeout
            await new Promise(resolve => setTimeout(resolve, 10));  // Small delay
            
            // let inString = serial.readStringUntil("\n");
            if (inString) {
                console.log("rowConfirmIndex:", inString);
                // let inString = serial.readStringUntil("\n");
                // console.log(inString);
              
                // let rowNum = parseInt(inString.trim());
                if (inString == 'C') {
                    confirmed = true;
                }
            }
        }

        if (!confirmed) {
            console.log(`Failed to confirm row ${i}`);
            return;  // Stop if we miss a row
        }
        inString = null;
    }
    
    packagedRows = null;
    isProcessing = false;
  } finally {
    isProcessing = false;
  }

  // return the printer preview
  return printerPreview;
}


// ----------------------------------------- OLD CODE
function packagePrinterData(inputImage) {
    // Thresholds
    const THRESHOLD_VVVLIGHT_GREY = 600;
    const THRESHOLD_VVLIGHT_GREY = 500;
    const THRESHOLD_VLIGHT_GREY = 400;
    const THRESHOLD_LIGHT_GREY = 300;
    const THRESHOLD_DARK_GREY = 200;
    const THRESHOLD_BLACK = 100;

    let rotated = inputImage;
    // console.log(rotated.width, rotated.height);
    rotated.loadPixels();
 
    let packagedRows = [];
    
    // Process one row at a time
    for (let y = 0; y < rotated.height; y++) {
      let rowData = new Uint8Array(BYTES_PER_ROW);
      
      // Process each pixel in the row first for pattern detection
      let rowPixels = new Array(rotated.width).fill(0);
    //   console.log(rowPixels.length);
      
      for (let x = 0; x < rotated.width; x++) {
        let loc = (x + y * rotated.width) ;
        let r = rotated.pixels[(loc *4)];
        let g = rotated.pixels[(loc *4) + 1];
        let b = rotated.pixels[(loc *4) + 2];
        let rgb = Math.floor(r + g + b);
        
        // Look ahead and behind for pattern generation
        let next_loc = x < rotated.width - 1 ? loc + 1 : -1;
        let next_rgb = 0;
        let prev_loc = x > 0 ? loc - 1 : -1;
        let prev_rgb = 0;
        
        // Get surrounding pixel values
        if (next_loc > -1) {
          let nr = rotated.pixels[next_loc * 4];
          let ng = rotated.pixels[next_loc * 4 + 1];
          let nb = rotated.pixels[next_loc * 4 + 2];
          next_rgb = Math.floor(nr + ng + nb);
        }
        
        if (prev_loc > -1) {
          let pr = rotated.pixels[prev_loc * 4];
          let pg = rotated.pixels[prev_loc * 4 + 1];
          let pb = rotated.pixels[prev_loc * 4 + 2];
          prev_rgb = Math.floor(pr + pg + pb);
        }
        
        // Determine pixel value based on patterns and thresholds
        if (rgb < THRESHOLD_VVLIGHT_GREY &&
            ((prev_loc > -1 && prev_rgb < THRESHOLD_VVVLIGHT_GREY) ||
             (next_loc > -1 && next_rgb < THRESHOLD_VVVLIGHT_GREY)) &&
            ((loc % 6 === 0 && y % 6 === 0) || (loc % 6 === 3 && y % 6 === 3))) {
          rowPixels[x] = 1;
        }
        else if (rgb < THRESHOLD_VLIGHT_GREY &&
                 ((prev_loc > -1 && prev_rgb < THRESHOLD_VVLIGHT_GREY) ||
                  (next_loc > -1 && next_rgb < THRESHOLD_VVLIGHT_GREY)) &&
                 ((loc % 5 === 0 && y % 5 === 0) || (loc % 5 === 3 && y % 5 === 3))) {
          rowPixels[x] = 1;
        }
        else if (rgb < THRESHOLD_LIGHT_GREY &&
                 ((prev_loc > -1 && prev_rgb < THRESHOLD_VLIGHT_GREY) ||
                  (next_loc > -1 && next_rgb < THRESHOLD_VLIGHT_GREY)) &&
                 ((loc % 4 === 0 && y % 4 === 0) || (loc % 4 === 2 && y % 4 === 2))) {
          rowPixels[x] = 1;
        }
        else if (rgb < THRESHOLD_DARK_GREY) {
          rowPixels[x] = 1;
        }
      }
      
      // Convert row pixels to bytes
      for (let byteIndex = 0; byteIndex < BYTES_PER_ROW; byteIndex++) {
        let byte = 0;
        for (let bit = 0; bit < 8; bit++) {
          let x = byteIndex * 8 + bit;
          if (x < rotated.width && rowPixels[x] === 1) {
            byte |= (1 << (7 - bit));
          }
        }
        rowData[byteIndex] = byte;
      }

      packagedRows.push(rowData);
    //   console.log(packagedRows)
    }

    return packagedRows;
}

function simulatePrinterOutput(image) {
    // Thresholds
    const THRESHOLD_VVVLIGHT_GREY = 600;
    const THRESHOLD_VVLIGHT_GREY = 500;
    const THRESHOLD_VLIGHT_GREY = 400;
    const THRESHOLD_LIGHT_GREY = 300;
    const THRESHOLD_DARK_GREY = 200;
    const THRESHOLD_BLACK = 100;

    let rotated = image;
    // console.log(rotated.width, rotated.height);
    rotated.loadPixels();
    // Create a separate graphics buffer for the dithered preview
    let ditheredPreview = createGraphics(PRINTER_IMAGE_HEIGHT, PRINTER_IMAGE_WIDTH);
    // ditheredPreview.background(255);
    ditheredPreview.loadPixels();

    // Process one row at a time
    // console.log(rotated.height);
    // console.log(rotated.width)
    for (let y = 0; y < rotated.height; y++) {    
    // Process each pixel in the row first for pattern detection
    let rowPixels = new Array(rotated.width).fill(0);
      console.log("Pixels length: " + rotated.pixels.length);
    
    for (let x = 0; x < rotated.width; x++) {
        let loc = (x + y * rotated.width);
        let r = rotated.pixels[loc * 4];
        let g = rotated.pixels[loc * 4 + 1];
        let b = rotated.pixels[loc * 4 + 2];
        let rgb = Math.floor(r + g + b);
        
        // Look ahead and behind for pattern generation
        let next_loc = x < rotated.width - 1 ? loc + 1 : -1;
        let next_rgb = 0;
        let prev_loc = x > 0 ? loc - 1 : -1;
        let prev_rgb = 0;
        
        // Get surrounding pixel values
        if (next_loc > -1) {
        let nr = rotated.pixels[next_loc * 4 ];
        let ng = rotated.pixels[next_loc * 4  + 1];
        let nb = rotated.pixels[next_loc * 4 + 2];
        next_rgb = Math.floor(nr + ng + nb);
        }
        
        if (prev_loc > -1) {
        let pr = rotated.pixels[prev_loc * 4 ];
        let pg = rotated.pixels[prev_loc  * 4 + 1];
        let pb = rotated.pixels[prev_loc  * 4 + 2];
        prev_rgb = Math.floor(pr + pg + pb);
        }
        
        //for display image
        let previewLoc = loc * 4;
        
        // Determine pixel value based on patterns and thresholds
        if (rgb < THRESHOLD_VVLIGHT_GREY &&
            ((prev_loc > -1 && prev_rgb < THRESHOLD_VVVLIGHT_GREY) ||
            (next_loc > -1 && next_rgb < THRESHOLD_VVVLIGHT_GREY)) &&
            ((loc % 6 === 0 && y % 6 === 0) || (loc % 6 === 3 && y % 6 === 3))) {
        rowPixels[x] = 1;
        }
        else if (rgb < THRESHOLD_VLIGHT_GREY &&
                ((prev_loc > -1 && prev_rgb < THRESHOLD_VVLIGHT_GREY) ||
                (next_loc > -1 && next_rgb < THRESHOLD_VVLIGHT_GREY)) &&
                ((loc % 5 === 0 && y % 5 === 0) || (loc % 5 === 3 && y % 5 === 3))) {
        rowPixels[x] = 1;
        }
        else if (rgb < THRESHOLD_LIGHT_GREY &&
                ((prev_loc > -1 && prev_rgb < THRESHOLD_VLIGHT_GREY) ||
                (next_loc > -1 && next_rgb < THRESHOLD_VLIGHT_GREY)) &&
                ((loc % 4 === 0 && y % 4 === 0) || (loc % 4 === 2 && y % 4 === 2))) {
        rowPixels[x] = 1;
        }
        else if (rgb < THRESHOLD_DARK_GREY) {
        rowPixels[x] = 1;
        }

        if (rowPixels[x] == 1) {
            // rowPixels[x] = 1;
            // Update dithered preview
            
            ditheredPreview.pixels[previewLoc] = 0;     // R
            ditheredPreview.pixels[previewLoc + 1] = 0; // G
            ditheredPreview.pixels[previewLoc + 2] = 0; // B
            ditheredPreview.pixels[previewLoc + 3] = 255; // A
        } else {
            // rowPixels[x] = 0;
            ditheredPreview.pixels[previewLoc] = 255;     // R
            ditheredPreview.pixels[previewLoc + 1] = 255; // G
            ditheredPreview.pixels[previewLoc + 2] = 255; // B
            ditheredPreview.pixels[previewLoc + 3] = 255; // A
        }
    }
    }

    // Update dithered preview
    ditheredPreview.updatePixels();
    return ditheredPreview;

}

// ------------------------------------------------OLD CODE

function getGridCoordinate(gridSize, boxNumber) {
    // Validate input
    if (boxNumber >= gridSize * gridSize || boxNumber < 0) {
        return "Invalid box number";
    }
    
    // Calculate row and column
    const row = Math.floor(boxNumber / gridSize);
    const col = boxNumber % gridSize;
    
    // Convert column number to letter (A, B, C, etc.)
    const columnLetter = String.fromCharCode(65 + col);
    
    // Row number is 1-based
    const rowNumber = row + 1;
    
    return `${columnLetter}${rowNumber}`;
}

// Add to your JavaScript code
function sendCoordinateBitmap(coordinate) {
    serial.write('T'); // Different command for text bitmap
    console.log("made it")
    // Create a small bitmap for the two characters
    const bitmap = createCoordinateBitmap(coordinate);

    // Send the bitmap data
    for (let row of bitmap) {
        serial.write(row);
    }
    console.log("sending")
    serial.write('F'); // End text bitmap command
}

function createCoordinateBitmap(coordinate) {
    const bitmap = [];
    const height = 14;
    const width = 28; // 14 + 14 for two characters

    // Each row needs 4 bytes to represent 28 pixels
    for (let i = 0; i < height; i++) {
        bitmap.push(new Uint8Array(4));
    }

    const char1 = LETTER_BITMAPS[coordinate.charCodeAt(0) - 65];
    const char2 = NUMBER_BITMAPS[parseInt(coordinate[1]) - 1];

    for (let y = 0; y < height; y++) {
        // Copy letter bits
        let byte = char1[y];
        for (let x = 0; x < 14; x++) {
        if (byte & (1 << (13-x))) {
            bitmap[y][Math.floor(x/8)] |= 1 << (7-(x%8));
        }
        }
        
        // Copy number bits
        byte = char2[y];
        for (let x = 0; x < 14; x++) {
        const newX = x + 14;
        if (byte & (1 << (13-x))) {
            bitmap[y][Math.floor(newX/8)] |= 1 << (7-(newX%8));
        }
        }
    }

    return bitmap;
}
  