#include "Adafruit_Thermal.h"
#include "letters.h"
#include "numbers.h"

#define TX_PIN 1
#define RX_PIN 0 
#define IMAGE_WIDTH 384
#define IMAGE_HEIGHT 384
#define BYTES_PER_ROW IMAGE_WIDTH/8
#define TEXT_WIDTH 28
#define TEXT_HEIGHT 14
#define TEXT_BYTES_PER_ROW 4

uint8_t textBuffer[TEXT_HEIGHT][TEXT_BYTES_PER_ROW];

Adafruit_Thermal printer(&Serial1);
uint8_t imageBuffer[IMAGE_HEIGHT][BYTES_PER_ROW];
int currentRow = 0;
boolean receivingData = false;

int buttonPin = 5;
int buttonState = 0;
int c = 0;
unsigned long lastDebounceTime = 0;  // Add at the top with other variables
unsigned long debounceDelay = 50;    // 50ms debounce time
int lastButtonState = LOW;  

void setup() {
  Serial.begin(115200);
  Serial1.begin(115200);

  printer.begin();
  printer.setDefault();

  printer.setLineHeight(7);

  printer.setPrintDensity(15, 4);
  printer.setHeatConfig(11, 150, 60);
  printer.setTimes(30000, 2100);

  pinMode(buttonPin, INPUT);
  // Serial.flush();
  // Serial1.flush();
  // printer.flush();
}

void loop() {
  // Serial.println("W");
  if (Serial.available() > 0) {
    uint8_t cmd = Serial.read();
    // Serial.println("recieving");
    // delay(10);
    // Serial.println(cmd);
    if (!receivingData) {
       if (cmd == 'T') {  // Text bitmap coming
        memset(textBuffer, 0, sizeof(textBuffer));    // Clear text buffer
        int row = 0;
        while (row < TEXT_HEIGHT) {
          if (Serial.available() >= TEXT_BYTES_PER_ROW) {
            for (int i = 0; i < TEXT_BYTES_PER_ROW; i++) {
              textBuffer[row][i] = Serial.read();
            }
            row++;
          }
        }
      } else if (cmd == 'F') {  // End of text bitmap
        // Do nothing here now, as we'll use the text when receiving image data
        Serial.println("Text received");
      } else if (cmd == 'X') {
        receivingData = true;
        currentRow = 0;
        memset(imageBuffer, 0, sizeof(imageBuffer));
        Serial.println("Starting to recieve bitmap");
      }
    }
    else {
      // if (cmd == 'Y') {

      //   receivingData = false;
      //   Serial.println("begining print");
      //   Serial.println("W");
      //   printer.wake();
      //   printer.setPrintDensity(15, 4);
      //   printer.setHeatConfig(11, 150, 60);
      //   printer.setTimes(30000, 2100);
      //   printer.normal();
      //   printer.setDefault();
      //   printer.feedRows(5);
      //   printer.printBitmap(IMAGE_WIDTH, currentRow, &imageBuffer[0][0]);

      //   // printer.normal();
      //   // printer.setDefault();
      //   printer.feed(3);
      //   printer.sleep();
      //     Serial.flush();
      //   Serial1.flush();
      //   printer.flush();
      //   // Serial.flush();
      //   currentRow = 0;
      //   memset(imageBuffer, 0, sizeof(imageBuffer));  // Clear image buffer
      //   memset(textBuffer, 0, sizeof(textBuffer));    // Clear text buffer
      //   receivingData = false;
      //   Serial.println("printing");
      //   delay(100);
      //   Serial.println("D");
      // }
      // else 
      if (receivingData && currentRow < IMAGE_HEIGHT) {

        if (currentRow == (IMAGE_HEIGHT-1)) {
          Serial.println("D");
          printImage();
        } 
        // if (currentRow >= IMAGE_HEIGHT) {
        //   receivingData = false;
        //   currentRow = 0;
        //   Serial.println("Error: Buffer overflow");
        //   return;
        // }
        // Serial.println(cmd);
        Serial.print("current ROw:");
        Serial.println(currentRow);
        // Serial.println()

        imageBuffer[currentRow][0] = cmd;
        
        int bytesRead = 1;
        unsigned long startTime = millis();
        while (bytesRead < BYTES_PER_ROW && (millis() - startTime) < 1000) {
          if (Serial.available()) {
            imageBuffer[currentRow][bytesRead] = Serial.read();
            bytesRead++;
          }
        }
        
        if (bytesRead == BYTES_PER_ROW) {
          // If in first 14 rows, overlay text in top-right corner
          if (currentRow < TEXT_HEIGHT) {
            // Calculate the starting byte position for text overlay (right-most position)
            int startBytePos = BYTES_PER_ROW - TEXT_BYTES_PER_ROW;
            
            // Replace the image data with text data in the top-right corner
            for (int i = 0; i < TEXT_BYTES_PER_ROW; i++) {
              imageBuffer[currentRow][startBytePos + i] = textBuffer[currentRow][i];
            }
          }
          
          // delay(1);
        }
        
        currentRow++;
        
      }
    }
    
  }

  buttonState = digitalRead(buttonPin);

  if (buttonState != lastButtonState) {
      lastDebounceTime = millis();
  }

  if ((millis() - lastDebounceTime) > debounceDelay) {
      if (buttonState == HIGH) {
          if (c == 0) {
              Serial.println("1");
              c = 1;
          }
      } else {
          if (c == 1) {
              Serial.println("0");
              c = 0;
          }
      }
  }

  lastButtonState = buttonState;
}

void printImage() {
  
  receivingData = false;
  
    // Serial.println("begining print");
    // Serial.println("W");
    
    printer.wake();
    printer.setPrintDensity(15, 4);
    printer.setHeatConfig(11, 150, 60);
    printer.setTimes(30000, 2100);
    printer.normal();
    printer.setDefault();
    printer.feedRows(5);
    printer.printBitmap(IMAGE_WIDTH, currentRow, &imageBuffer[0][0]);

    // printer.normal();
    // printer.setDefault();
    printer.feed(3);
    printer.sleep();
    //   Serial.flush();
    // Serial1.flush();
    // printer.flush();
    // Serial.flush();
    currentRow = 0;
    memset(imageBuffer, 0, sizeof(imageBuffer));  // Clear image buffer
    memset(textBuffer, 0, sizeof(textBuffer));    // Clear text buffer
    // receivingData = false;
    Serial.println("printing");
    delay(100);
    
}