
// Add these variables at the top of your file with other global variables
let gif = null;
let frameCount = 0;
const TOTAL_FRAMES = 49; // Total number of frames before download

// Initialize the GIF creator
// function initGif() {
//   gif = new GIF({
//     workers: 2,
//     quality: 10,
//     width: GRID_SIZE * 384,  // Match your grid container width
//     height: GRID_SIZE * 384, // Match your grid container height
//     workerScript: './gifWorker/gif.worker.js'  // You'll need to host this file
//   });

//   // Set up the 'finished' handler
//   gif.on('finished', function(blob) {
//     // Create timestamp for unique filename
//     const timestamp = new Date().toISOString().replace(/[:]/g, '-');
    
//     // Create download link
//     const link = document.createElement('a');
//     link.href = URL.createObjectURL(blob);
//     link.download = `grid-animation-${timestamp}.gif`;
    
//     // Trigger download
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
    
//     // Reset for next sequence
//     frameCount = 0;
//     initGif(); // Reinitialize for next sequence
//   });
// }

function initGif() {
  gif = new GIF({
    workers: 2,
    quality: 10,
    width: GRID_SIZE * 50,  // Match the size of your grid tiles
    height: GRID_SIZE * 50, // Match the size of your grid tiles
    background: '#000000',  // Set black background
    workerScript: './gifWorker/gif.worker.js'  // You'll need to host this file
});

  gif.on('finished', function(blob) {
    const timestamp = new Date().toISOString().replace(/[:]/g, '-');
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `grid-animation-${timestamp}.gif`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    frameCount = 0;
    initGif();
  });
}


// Update your CSS for the grid container
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  #gridContainerGif {
    display: grid;
    width: ${GRID_SIZE * 50}px;
    height: ${GRID_SIZE * 50}px;
    background: black;
  }

  .tileGif {
    width: 50px;
    height: 50px;
    border: 1px solid white;
    background: transparent;
  }
`;
document.head.appendChild(styleSheet);




// // Function to add a frame to the GIF
// function addFrameToGif() {
//   // Get the entire grid container
//   const gifContainer = document.getElementById('gridContainerGif');
  
//   // Use html2canvas to capture the container
//   html2canvas(gifContainer).then(canvas => {
//     gif.addFrame(canvas, {delay: 500}); // 500ms delay between frames
//     frameCount++;
    
//     // Check if we've reached the total number of frames
//     if (frameCount >= TOTAL_FRAMES) {
//       gif.render(); // This will trigger the 'finished' handler
//     }
//   });
// }

// Update the frame capture function
function addFrameToGif() {
  const gifContainer = document.getElementById('gridContainerGif');
  
  html2canvas(gifContainer, {
    backgroundColor: null,  // Make background transparent
    scale: 1,              // Maintain scale
    width: GRID_SIZE * 50, // Set exact width
    height: GRID_SIZE * 50 // Set exact height
  }).then(canvas => {
    gif.addFrame(canvas, {
      delay: 500,
      copy: true
    });
    frameCount++;
    
    if (frameCount >= 2) { // Your test setting for 2 frames
      gif.render();
    }
  });
}



initGif(); // Initialize the GIF creator