// include the thermal library from adafruit for working with the thermal printer
#include "Adafruit_Thermal.h"
#include "letters.h"
#include "numbers.h"

// definint pins for communication with printer
#define TX_PIN 1
#define RX_PIN 0 
// defining size of the image being printed
#define IMAGE_WIDTH 384
#define IMAGE_HEIGHT 384
// defining the number of bytes per row of the image being printed
#define BYTES_PER_ROW IMAGE_WIDTH/8
// define the number of bits per row of text
#define TEXT_WIDTH 28
// define number of rows in text data
#define TEXT_HEIGHT 14
// define numebr of bytes per row of the text data 
#define TEXT_BYTES_PER_ROW 4

// initialize the text buffer to store the bitmap data corresponding to the text coordinates
uint8_t textBuffer[TEXT_HEIGHT][TEXT_BYTES_PER_ROW];

// instantiate the adafruit thermal library printer object with the serial1 of the arduino nano 33 IOT
Adafruit_Thermal printer(&Serial1);
// initailize the memory for storing the bitmap of the image we are trying to print
uint8_t imageBuffer[IMAGE_HEIGHT][BYTES_PER_ROW];

// define variable integer to stor the current row of the image at which the processing is and assign it value of 0 (start)
int currentRow = 0;
// define the boolean variable to understand if we are recieving image data or not and assign it value of false
boolean receivingData = false;

// define variable for storing an integer representing the pin for the button input 
int buttonPin = 5;
// define the variable for storing integer representing the state of the button and assign it a value of 0 to begin with
int buttonState = 0;
// define the variable for storing integer representing the value to make the button input send serial data only once per interaction (latch for serial) and assign value of 0
int c = 0;

// define the variable for debounce of the button input
unsigned long lastDebounceTime = 0;  // Add at the top with other variables
unsigned long debounceDelay = 50;    // 50ms debounce time
int lastButtonState = LOW;  

// define setup function 
// setup runs automatically as first function call after variables above are defined
void setup() {
  // start both serial communication lines on arduino with baud rate of 115200 which matches that of the thermal printer
  Serial.begin(115200);
  Serial1.begin(115200);

  // start the printer serial communication through adafruit thermal object
  printer.begin();
  // set default setting on adafruit thermal object using the setDefault method
  printer.setDefault();

  // set line height using built in method
  printer.setLineHeight(7);
  // set printDensity (most dense for highest resolution)
  printer.setPrintDensity(15, 4);
  // set the cofnigurations for heating temperature and time of heating each part (again set for highest resolution)
  printer.setHeatConfig(11, 150, 60);
  // set time for moving between different lines
  printer.setTimes(30000, 2100);

  // define the buttonpin as input for later use an button
  pinMode(buttonPin, INPUT);
}

// define printImage method that is called once all the image data has been gathered and is ready to print
void printImage() {
  // no longer recieving data update method
  receivingData = false;
  // if printer asleep wake it
  printer.wake();
  // reset just in case
  printer.setPrintDensity(15, 4);
  printer.setHeatConfig(11, 150, 60);
  printer.setTimes(30000, 2100);
  printer.normal();
  printer.setDefault();
  // fed rows to make sure that the top of the image is not truncated (troubleshooted to get this value with minimal excess white printed above image)
  printer.feedRows(5);
  // print the bitmap using built in funciton on the adafruit thermal printer object
  printer.printBitmap(IMAGE_WIDTH, currentRow, &imageBuffer[0][0]);
  // fed 3 more rows to mae sure the image clears the point at which one tears away image
  printer.feed(3);
  // put printer back to sleep mode
  printer.sleep();
  // reset the current row back to 0 since have finished processing this image and await next image data 
  currentRow = 0;
  // reset hte image buffer
  memset(imageBuffer, 0, sizeof(imageBuffer));  // Clear image buffer
  // reset the text buffer
  memset(textBuffer, 0, sizeof(textBuffer));    // Clear text buffer
  // send serial message to javascript to show the placement screen (where people are told where to put their sticker on grid)
  Serial.println("D");
}

void loop() {
  // hadnshake to make sure only reading when serial data is available
  if (Serial.available() > 0) {
    // read in the serial communication as cmd (command)
    uint8_t cmd = Serial.read();

    // while not recieving data
    if (!receivingData) {
       // Text bitmap coming signal
      if (cmd == 'T') { 
         // reset text buffer
        memset(textBuffer, 0, sizeof(textBuffer)); 
        // reset the row index
        int row = 0;
        // as long as the amount of row data has not exceeded that of the height of the image
        while (row < TEXT_HEIGHT) {
          if (Serial.available() >= TEXT_BYTES_PER_ROW) {
            for (int i = 0; i < TEXT_BYTES_PER_ROW; i++) {
              // read in and assign serial data to the text image buffer in correct data location (index = i)
              textBuffer[row][i] = Serial.read();
            }
            row++;
          }
        }
      } else if (cmd == 'X') { // starting to recieve bitmap
        // switch to recieving data mode
        receivingData = true;
        // reset the current row before beginning to recieve them
        currentRow = 0;
        // clear the image buffer for incoming bytes of row image data
        memset(imageBuffer, 0, sizeof(imageBuffer));
      }
    }
    else {
      // if recieving bitmap mode and not above image Height (would cause error) 
      if (receivingData && currentRow < IMAGE_HEIGHT) {
        // the first serial read that lead to this point in the conditional statement fork is part of the image data
        imageBuffer[currentRow][0] = cmd;

          // start at 1 since we have already placed the first byte at positon 0 (was cmd)
          int bytesRead = 1;
          unsigned long startTime = millis();
          while (bytesRead < BYTES_PER_ROW && (millis() - startTime) < 1000) {
            // while there is still data being sent
            if (Serial.available()) {
              // place the data coming in through serial into the imageBuffer at the corresponding row and byte locaiton
              imageBuffer[currentRow][bytesRead] = Serial.read();
              // since we are in the same row every time this codnitional statement runs we will jsut be incrementing the bytesRead variable that acts as an index of where we are in the row
              bytesRead++;
            }
          }
        
        // if we have read all of the bytes in the row
        if (bytesRead == BYTES_PER_ROW) {
            // If in first 14 rows overlay text in top-right corner
            if (currentRow < TEXT_HEIGHT) {
              // Calculate the starting byte position for text overlay (right-most position)
              int startBytePos = BYTES_PER_ROW - TEXT_BYTES_PER_ROW;
              
              // Replace the image data with text data in the top-right corner
              for (int i = 0; i < TEXT_BYTES_PER_ROW; i++) {
                imageBuffer[currentRow][startBytePos + i] = textBuffer[currentRow][i];
              }
            }
            // print the confirmation serial message so that next row can be read in succesfully (handshake protocol for row read)
            Serial.println("C");
            
            // increment row index
            currentRow++;

            // if we have exhausted all the rows we needed save then print the final image
            if (currentRow == IMAGE_HEIGHT) {
              printImage();
            }
            // delay to ensure that the serial communication goes smoothly
            delay(2);
        }
      }
    }
  }

  // read in the value of the button at teh pin defined in teh buttonPin variable
  buttonState = digitalRead(buttonPin);

  // debounce logic
  if (buttonState != lastButtonState) {
      lastDebounceTime = millis();
  }

  if ((millis() - lastDebounceTime) > debounceDelay) {
      // if the button is completing circuit then make it send a signal of 1 thrugh serial
      if (buttonState == HIGH) {
          // latch makes it so that it will not send multiple values after first time sent
          if (c == 0) {
              Serial.println("1");
              c = 1;
          }
      // if the button is not completing the circuit then make ti send a signal of 0 (this is only sent if the signal was 1 before becoming 0)
      } else {
          if (c == 1) {
              Serial.println("0");
              c = 0;
          }
      }
  }

  // debounce logic to ensure no double clicks 
  lastButtonState = buttonState;
}
