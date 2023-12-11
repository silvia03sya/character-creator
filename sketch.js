let page = 'title';

let controlX; 
let controlY;
let imageStay;

let titleArray = [];
let imageArray = [];
let selections = [1, 5, 13, 17, 18, 36];

let bases;
let eyes;
let eyebrows;
let eyecolors;
let mouths;
let hairs;

function preload() {
  titleArray[0] = loadImage('titleAssets/title.png');
  titleArray[1] = loadImage('titleAssets/complete.png');
  
  imageArray[0] = loadImage('imageAssets/base1.png');
  imageArray[1] = loadImage('imageAssets/base2.png');
  imageArray[2] = loadImage('imageAssets/base3.png');
  imageArray[3] = loadImage('imageAssets/base4.png');
  imageArray[4] = loadImage('imageAssets/base5.png');
  imageArray[5] = loadImage('imageAssets/eye1.png');
  imageArray[6] = loadImage('imageAssets/eye2.png');
  imageArray[7] = loadImage('imageAssets/eye3.png');
  imageArray[8] = loadImage('imageAssets/eye4.png');
  imageArray[9] = loadImage('imageAssets/eyebrow1.png');
  imageArray[10] = loadImage('imageAssets/eyebrow2.png');
  imageArray[11] = loadImage('imageAssets/eyebrow3.png');
  imageArray[12] = loadImage('imageAssets/eyebrow4.png');
  imageArray[13] = loadImage('imageAssets/eyebrow5.png');
  imageArray[14] = loadImage('imageAssets/eyecolor1.png');
  imageArray[15] = loadImage('imageAssets/eyecolor2.png');
  imageArray[16] = loadImage('imageAssets/eyecolor3.png');
  imageArray[17] = loadImage('imageAssets/eyecolor4.png');
  imageArray[18] = loadImage('imageAssets/mouth1.png');
  imageArray[19] = loadImage('imageAssets/mouth2.png');
  imageArray[20] = loadImage('imageAssets/mouth3.png');
  imageArray[21] = loadImage('imageAssets/mouth4.png');
  imageArray[22] = loadImage('imageAssets/hair1.png');
  imageArray[23] = loadImage('imageAssets/hair2.png');
  imageArray[24] = loadImage('imageAssets/hair3.png');
  imageArray[25] = loadImage('imageAssets/hair4.png');
  imageArray[26] = loadImage('imageAssets/hair5.png');
  imageArray[27] = loadImage('imageAssets/hair6.png');
  imageArray[28] = loadImage('imageAssets/hair7.png');
  imageArray[29] = loadImage('imageAssets/hair8.png');
  imageArray[30] = loadImage('imageAssets/hair9.png');
  imageArray[31] = loadImage('imageAssets/hair10.png');
  imageArray[32] = loadImage('imageAssets/hair11.png');
  imageArray[33] = loadImage('imageAssets/hair12.png');
  imageArray[34] = loadImage('imageAssets/hair13.png');
  imageArray[35] = loadImage('imageAssets/hair14.png');
  imageArray[36] = loadImage('imageAssets/hairblank.png');
}

function setup() {
  var canvas = createCanvas(1200, 900);
  canvas.parent('characterCreator');
  
  textAlign(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);
  
  strokeWeight(5);
  stroke(92, 56, 46);
  
  bases = new Button(0, width*0.085, height*0.1, 0.05, 0.08, 'base', imageArray);
  eyes = new Button(5, width*0.085, height*0.24, 0.05, 0.22, 'eye', imageArray);
  eyebrows = new Button(9, width*0.085, height*0.36, 0.05, 0.33, 'eyebrow', imageArray);
  eyecolors = new Button(14, width*0.085, height*0.46, 0.05, 0.43, 'eyecolor', imageArray);
  mouths = new Button(18, width*0.085, height*0.56, 0.05, 0.53, 'mouth', imageArray);
  hairs = new Button(22, width*0.085, height*0.7, 0.05, 0.66, 'hair', imageArray);
  
  complete = new Button(1, width*0.085, height*0.87, 0.05, 0.85, 'final', titleArray)
  
  //reset button
  var resetButton = createButton('Reset');
  resetButton.mousePressed(resetPressed);
  resetButton.parent('reset');
  
  //base buttons
  base1 = createButton('');
  base1.parent('characterCreator');
  base1.mousePressed(base1select);
  base1.position(width*0.2, height*0.81);
  base1.size(width*0.1, height*0.15);
  base1.style('background-color', color(247, 194, 148));
  
  base2 = createButton('');
  base2.parent('characterCreator');
  base2.mousePressed(base2select);
  base2.position(width*0.35, height*0.81);
  base2.size(width*0.1, height*0.15);
  base2.style('background-color', color(221, 158, 114));
  
  base3 = createButton('');
  base3.parent('characterCreator');
  base3.mousePressed(base3select);
  base3.position(width*0.5, height*0.81);
  base3.size(width*0.1, height*0.15);
  base3.style('background-color', color(161, 101, 64));
  
  base4 = createButton('');
  base4.parent('characterCreator');
  base4.mousePressed(base4select);
  base4.position(width*0.65, height*0.81);
  base4.size(width*0.1, height*0.15);
  base4.style('background-color', color(109, 64, 36));
  
  base5 = createButton('');
  base5.parent('characterCreator');
  base5.mousePressed(base5select);
  base5.position(width*0.8, height*0.81);
  base5.size(width*0.1, height*0.15);
  base5.style('background-color', color(68, 36, 16));
  
  
  //eye buttons
  eye1 = createButton('1');
  eye1.parent('characterCreator');
  eye1.mousePressed(eye1select);
  eye1.position(width*0.2, height*0.81);
  eye1.size(width*0.1, height*0.15);
  eye1.style('background-color', color(255, 217, 199));
  
  eye2 = createButton('2');
  eye2.parent('characterCreator');
  eye2.mousePressed(eye2select);
  eye2.position(width*0.4, height*0.81);
  eye2.size(width*0.1, height*0.15);
  eye2.style('background-color', color(255, 217, 199));
  
  eye3 = createButton('3');
  eye3.parent('characterCreator');
  eye3.mousePressed(eye3select);
  eye3.position(width*0.6, height*0.81);
  eye3.size(width*0.1, height*0.15);
  eye3.style('background-color', color(255, 217, 199));
  
  eye4 = createButton('4');
  eye4.parent('characterCreator');
  eye4.mousePressed(eye4select);
  eye4.position(width*0.8, height*0.81);
  eye4.size(width*0.1, height*0.15);
  eye4.style('background-color', color(255, 217, 199));
  
  
  //eyebrow buttons
  eyebrow1 = createButton('1');
  eyebrow1.parent('characterCreator');
  eyebrow1.mousePressed(eyebrow1select);
  eyebrow1.position(width*0.2, height*0.81);
  eyebrow1.size(width*0.1, height*0.15);
  eyebrow1.style('background-color', color(255, 217, 199));
  
  eyebrow2 = createButton('2');
  eyebrow2.parent('characterCreator');
  eyebrow2.mousePressed(eyebrow2select);
  eyebrow2.position(width*0.35, height*0.81);
  eyebrow2.size(width*0.1, height*0.15);
  eyebrow2.style('background-color', color(255, 217, 199));
  
  eyebrow3 = createButton('3');
  eyebrow3.parent('characterCreator');
  eyebrow3.mousePressed(eyebrow3select);
  eyebrow3.position(width*0.5, height*0.81);
  eyebrow3.size(width*0.1, height*0.15);
  eyebrow3.style('background-color', color(255, 217, 199));
  
  eyebrow4 = createButton('4');
  eyebrow4.parent('characterCreator');
  eyebrow4.mousePressed(eyebrow4select);
  eyebrow4.position(width*0.65, height*0.81);
  eyebrow4.size(width*0.1, height*0.15);
  eyebrow4.style('background-color', color(255, 217, 199));
  
  eyebrow5 = createButton('5');
  eyebrow5.parent('characterCreator');
  eyebrow5.mousePressed(eyebrow5select);
  eyebrow5.position(width*0.8, height*0.81);
  eyebrow5.size(width*0.1, height*0.15);
  eyebrow5.style('background-color', color(255, 217, 199));
  
  
  //eyecolor buttons
  eyecolor1 = createButton('');
  eyecolor1.parent('characterCreator');
  eyecolor1.mousePressed(eyecolor1select);
  eyecolor1.position(width*0.2, height*0.81);
  eyecolor1.size(width*0.1, height*0.15);
  eyecolor1.style('background-color', color(84, 184, 57));
  
  eyecolor2 = createButton('');
  eyecolor2.parent('characterCreator');
  eyecolor2.mousePressed(eyecolor2select);
  eyecolor2.position(width*0.4, height*0.81);
  eyecolor2.size(width*0.1, height*0.15);
  eyecolor2.style('background-color', color(110, 182, 255));
  
  eyecolor3 = createButton('');
  eyecolor3.parent('characterCreator');
  eyecolor3.mousePressed(eyecolor3select);
  eyecolor3.position(width*0.6, height*0.81);
  eyecolor3.size(width*0.1, height*0.15);
  eyecolor3.style('background-color', color(230, 177, 94));
  
  eyecolor4 = createButton('');
  eyecolor4.parent('characterCreator');
  eyecolor4.mousePressed(eyecolor4select);
  eyecolor4.position(width*0.8, height*0.81);
  eyecolor4.size(width*0.1, height*0.15);
  eyecolor4.style('background-color', color(85, 55, 33));
  
  
  //mouth buttons
  mouth1 = createButton('1');
  mouth1.parent('characterCreator');
  mouth1.mousePressed(mouth1select);
  mouth1.position(width*0.2, height*0.81);
  mouth1.size(width*0.1, height*0.15);
  mouth1.style('background-color', color(255, 217, 199));
  
  mouth2 = createButton('2');
  mouth2.parent('characterCreator');
  mouth2.mousePressed(mouth2select);
  mouth2.position(width*0.4, height*0.81);
  mouth2.size(width*0.1, height*0.15);
  mouth2.style('background-color', color(255, 217, 199));
  
  mouth3 = createButton('3');
  mouth3.parent('characterCreator');
  mouth3.mousePressed(mouth3select);
  mouth3.position(width*0.6, height*0.81);
  mouth3.size(width*0.1, height*0.15);
  mouth3.style('background-color', color(255, 217, 199));
  
  mouth4 = createButton('4');
  mouth4.parent('characterCreator');
  mouth4.mousePressed(mouth4select);
  mouth4.position(width*0.8, height*0.81);
  mouth4.size(width*0.1, height*0.15);
  mouth4.style('background-color', color(255, 217, 199));
  
  
  //hair buttons
  hairForward = createButton('>');
  hairForward.parent('characterCreator');
  hairForward.mousePressed(hairCycleForward);
  hairForward.position(width*0.64, height*0.81);
  hairForward.size(width*0.1, height*0.15);
  hairForward.style('background-color', color(255, 217, 199));
  
  hairBackward = createButton('<');
  hairBackward.parent('characterCreator');
  hairBackward.mousePressed(hairCycleBackward);
  hairBackward.position(width*0.44, height*0.81);
  hairBackward.size(width*0.1, height*0.15);
  hairBackward.style('background-color', color(255, 217, 199));
  
  goBack = createButton('RETURN');
  goBack.parent('characterCreator');
  goBack.mousePressed(returnButton);
  goBack.position(width*0.035, height*0.45);
  goBack.size(width*0.1, height*0.15);
  goBack.style('background-color', color(255, 217, 199));
  
  saveImage = createButton('SAVE');
  saveImage.parent('characterCreator');
  saveImage.mousePressed(saveImageButton);
  saveImage.position(width*0.865, height*0.45);
  saveImage.size(width*0.1, height*0.15);
  saveImage.style('background-color', color(255, 217, 199));
}

function draw() {
  switch(page) {
    case 'title':
      titleScreen();
      break;
    case 'main':
      mainScreen();
      break;
    case 'base':
      baseScreen();
      break;
    case 'eye':
      eyeScreen();
      break;
    case 'eyebrow':
      eyebrowScreen();
      break;
    case 'eyecolor':
      eyecolorScreen();
      break;
    case 'mouth':
      mouthScreen();
      break;
    case 'hair':
      hairScreen();
      break;
    case 'final':
      finalScreen();
      break;
    case 'save':
      saveScreen();
      break;
  }
  
  if (page === 'base') {
    base1.show();
    base2.show();
    base3.show();
    base4.show();
    base5.show();
  } else {
    base1.hide();
    base2.hide();
    base3.hide();
    base4.hide();
    base5.hide();
  }
  
  if (page === 'eye') {
    eye1.show();
    eye2.show();
    eye3.show();
    eye4.show();
  } else {
    eye1.hide();
    eye2.hide();
    eye3.hide();
    eye4.hide();
  }
  
  if (page === 'eyebrow') {
    eyebrow1.show();
    eyebrow2.show();
    eyebrow3.show();
    eyebrow4.show();
    eyebrow5.show();
  } else {
    eyebrow1.hide();
    eyebrow2.hide();
    eyebrow3.hide();
    eyebrow4.hide();
    eyebrow5.hide();
  }
  
  if (page === 'eyecolor') {
    eyecolor1.show();
    eyecolor2.show();
    eyecolor3.show();
    eyecolor4.show();
  } else {
    eyecolor1.hide();
    eyecolor2.hide();
    eyecolor3.hide();
    eyecolor4.hide();
  }
  
  if (page === 'mouth') {
    mouth1.show();
    mouth2.show();
    mouth3.show();
    mouth4.show();
  } else {
    mouth1.hide();
    mouth2.hide();
    mouth3.hide();
    mouth4.hide();
  }
  
  if (page === 'hair') {
    hairForward.show();
    hairBackward.show();
  } else {
    hairForward.hide();
    hairBackward.hide();
  }
  
  if (page === 'final') {
    goBack.show();
    saveImage.show();
  } else {
    goBack.hide();
    saveImage.hide();
  }
}

function titleScreen() {
  controlX = mouseX;
  controlY = mouseY;
  
  background(242, 176, 157);
  fill(105, 57, 43);
  textSize(160);
  image(titleArray[0], width*0.5, height*0.35, width*1.2, height*0.55);
  
  textSize(50);
  text('START', width*0.5, height*0.75);
  
  if(controlY > height*0.7 && controlY < height*0.76 && controlX > width*0.435 && controlX < width*0.565) {
    fill(255, 243, 237);
    rect(width*0.5, height*0.73, width*0.14, height*0.07);
    fill(105, 57, 43);
    text('START', width*0.5, height*0.75);
    
    if (mouseIsPressed === true) {
      switch (page) {
      case 'title':
        page = 'main';
        break;
      }
    }
  }
}

function mainScreen() {
  background(242, 176, 157);
  fill(255, 243, 237);
  rect(width*0.58, height*0.4, width*0.8, height*0.75, 10);
  
  bases.display();
  eyes.display();
  eyebrows.display();
  eyecolors.display();
  mouths.display();
  hairs.display();
  complete.display();
  
  image(imageArray[selections[0]], width*0.58, height*0.374, width*0.52, height*0.8);
  image(imageArray[selections[1]], width*0.58, height*0.374, width*0.52, height*0.8);
  image(imageArray[selections[2]], width*0.58, height*0.374, width*0.52, height*0.8);
  image(imageArray[selections[3]], width*0.58, height*0.374, width*0.52, height*0.8);
  image(imageArray[selections[4]], width*0.58, height*0.374, width*0.52, height*0.8);
  image(imageArray[selections[5]], width*0.58, height*0.374, width*0.52, height*0.8);
}

function baseScreen() {
  background(242, 176, 157);
  fill(255, 243, 237);
  rect(width*0.58, height*0.4, width*0.8, height*0.75, 10);
  
  bases.display();
  eyes.display();
  eyebrows.display();
  eyecolors.display();
  mouths.display();
  hairs.display();
  complete.display();
  
  image(imageArray[selections[0]], width*0.58, height*0.374, width*0.52, height*0.8);
  image(imageArray[selections[1]], width*0.58, height*0.374, width*0.52, height*0.8);
  image(imageArray[selections[2]], width*0.58, height*0.374, width*0.52, height*0.8);
  image(imageArray[selections[3]], width*0.58, height*0.374, width*0.52, height*0.8);
  image(imageArray[selections[4]], width*0.58, height*0.374, width*0.52, height*0.8);
  image(imageArray[selections[5]], width*0.58, height*0.374, width*0.52, height*0.8);
}

function eyeScreen() {
  background(242, 176, 157);
  fill(255, 243, 237);
  rect(width*0.58, height*0.4, width*0.8, height*0.75, 10);
  
  bases.display();
  eyes.display();
  eyebrows.display();
  eyecolors.display();
  mouths.display();
  hairs.display();
  complete.display();
  
  image(imageArray[selections[0]], width*0.58, height*0.374, width*0.52, height*0.8);
  image(imageArray[selections[1]], width*0.58, height*0.374, width*0.52, height*0.8);
  image(imageArray[selections[2]], width*0.58, height*0.374, width*0.52, height*0.8);
  image(imageArray[selections[3]], width*0.58, height*0.374, width*0.52, height*0.8);
  image(imageArray[selections[4]], width*0.58, height*0.374, width*0.52, height*0.8);
  image(imageArray[selections[5]], width*0.58, height*0.374, width*0.52, height*0.8);
}

function eyebrowScreen() {
  background(242, 176, 157);
  fill(255, 243, 237);
  rect(width*0.58, height*0.4, width*0.8, height*0.75, 10);
  
  bases.display();
  eyes.display();
  eyebrows.display();
  eyecolors.display();
  mouths.display();
  hairs.display();
  complete.display();
  
  image(imageArray[selections[0]], width*0.58, height*0.374, width*0.52, height*0.8);
  image(imageArray[selections[1]], width*0.58, height*0.374, width*0.52, height*0.8);
  image(imageArray[selections[2]], width*0.58, height*0.374, width*0.52, height*0.8);
  image(imageArray[selections[3]], width*0.58, height*0.374, width*0.52, height*0.8);
  image(imageArray[selections[4]], width*0.58, height*0.374, width*0.52, height*0.8);
  image(imageArray[selections[5]], width*0.58, height*0.374, width*0.52, height*0.8);
}

function eyecolorScreen() {
  background(242, 176, 157);
  fill(255, 243, 237);
  rect(width*0.58, height*0.4, width*0.8, height*0.75, 10);
  
  bases.display();
  eyes.display();
  eyebrows.display();
  eyecolors.display();
  mouths.display();
  hairs.display();
  complete.display();
  
  image(imageArray[selections[0]], width*0.58, height*0.374, width*0.52, height*0.8);
  image(imageArray[selections[1]], width*0.58, height*0.374, width*0.52, height*0.8);
  image(imageArray[selections[2]], width*0.58, height*0.374, width*0.52, height*0.8);
  image(imageArray[selections[3]], width*0.58, height*0.374, width*0.52, height*0.8);
  image(imageArray[selections[4]], width*0.58, height*0.374, width*0.52, height*0.8);
  image(imageArray[selections[5]], width*0.58, height*0.374, width*0.52, height*0.8);
}

function mouthScreen() {
  background(242, 176, 157);
  fill(255, 243, 237);
  rect(width*0.58, height*0.4, width*0.8, height*0.75, 10);
  
  bases.display();
  eyes.display();
  eyebrows.display();
  eyecolors.display();
  mouths.display();
  hairs.display();
  complete.display();
  
  image(imageArray[selections[0]], width*0.58, height*0.374, width*0.52, height*0.8);
  image(imageArray[selections[1]], width*0.58, height*0.374, width*0.52, height*0.8);
  image(imageArray[selections[2]], width*0.58, height*0.374, width*0.52, height*0.8);
  image(imageArray[selections[3]], width*0.58, height*0.374, width*0.52, height*0.8);
  image(imageArray[selections[4]], width*0.58, height*0.374, width*0.52, height*0.8);
  image(imageArray[selections[5]], width*0.58, height*0.374, width*0.52, height*0.8);
}

function hairScreen() {
  background(242, 176, 157);
  fill(255, 243, 237);
  rect(width*0.58, height*0.4, width*0.8, height*0.75, 10);
  
  bases.display();
  eyes.display();
  eyebrows.display();
  eyecolors.display();
  mouths.display();
  hairs.display();
  complete.display();
  
  image(imageArray[selections[0]], width*0.58, height*0.374, width*0.52, height*0.8);
  image(imageArray[selections[1]], width*0.58, height*0.374, width*0.52, height*0.8);
  image(imageArray[selections[2]], width*0.58, height*0.374, width*0.52, height*0.8);
  image(imageArray[selections[3]], width*0.58, height*0.374, width*0.52, height*0.8);
  image(imageArray[selections[4]], width*0.58, height*0.374, width*0.52, height*0.8);
  image(imageArray[selections[5]], width*0.58, height*0.374, width*0.52, height*0.8);
}

function finalScreen() {
  background(242, 176, 157);
  fill(255, 243, 237);
  
  rect(width*0.5, height*0.5, width*0.65, height*0.99);
  
  image(imageArray[selections[0]], width*0.5, height*0.482, width*0.65, height*1.02);
  image(imageArray[selections[1]], width*0.5, height*0.482, width*0.65, height*1.02);
  image(imageArray[selections[2]], width*0.5, height*0.482, width*0.65, height*1.02);
  image(imageArray[selections[3]], width*0.5, height*0.482, width*0.65, height*1.02);
  image(imageArray[selections[4]], width*0.5, height*0.482, width*0.65, height*1.02);
  image(imageArray[selections[5]], width*0.5, height*0.482, width*0.65, height*1.02);
}

function saveScreen() {
  background(255, 243, 237);
  
  image(imageArray[selections[0]], width*0.5, height*0.482, width*0.65, height*1.02);
  image(imageArray[selections[1]], width*0.5, height*0.482, width*0.65, height*1.02);
  image(imageArray[selections[2]], width*0.5, height*0.482, width*0.65, height*1.02);
  image(imageArray[selections[3]], width*0.5, height*0.482, width*0.65, height*1.02);
  image(imageArray[selections[4]], width*0.5, height*0.482, width*0.65, height*1.02);
  image(imageArray[selections[5]], width*0.5, height*0.482, width*0.65, height*1.02);
  
  saveCanvas('myCharacter');
}

class Button {
  constructor(num, xPos, yPos, xBorder, yBorder, screen, arrayType) {
    this.num = num;
    this.xPos = xPos;
    this.yPos = yPos;
    this.xBorder = xBorder;
    this.yBorder = yBorder;
    this.screen = screen;
    this.arrayType = arrayType;
  }
  display() {
    controlX = mouseX;
    controlY = mouseY;
    
    image(this.arrayType[this.num], this.xPos, this.yPos, height*0.1, height*0.11);
    
    if(controlX > width*(this.xBorder) && controlX < width*(this.xBorder + 0.07) && controlY > height*(this.yBorder) && controlY < height*(this.yBorder + 0.07)) {
      fill(255, 255, 255, 70);
      rect(this.xPos, this.yPos, width*0.075, height*0.11, 4);
      image(this.arrayType[this.num], this.xPos, this.yPos, height*0.1, height*0.11);
      
       if (mouseIsPressed === true) {
         switch(page) {
         case page:
           page = this.screen;
           break;
         }
       }
    }
  }
}

function base1select() {
  selections[0] = 0;
}
function base2select() {
  selections[0] = 1;
}
function base3select() {
  selections[0] = 2;
}
function base4select() {
  selections[0] = 3;
}
function base5select() {
  selections[0] = 4;
}

function eye1select() {
  selections[1] = 5;
}
function eye2select() {
  selections[1] = 6;
}
function eye3select() {
  selections[1] = 7;
}
function eye4select() {
  selections[1] = 8;
}

function eyebrow1select() {
  selections[2] = 9;
}
function eyebrow2select() {
  selections[2] = 10;
}
function eyebrow3select() {
  selections[2] = 11;
}
function eyebrow4select() {
  selections[2] = 12;
}
function eyebrow5select() {
  selections[2] = 13;
}

function eyecolor1select() {
  selections[3] = 14;
}
function eyecolor2select() {
  selections[3] = 15;
}
function eyecolor3select() {
  selections[3] = 16;
}
function eyecolor4select() {
  selections[3] = 17;
}

function mouth1select() {
  selections[4] = 18;
}
function mouth2select() {
  selections[4] = 19;
}
function mouth3select() {
  selections[4] = 20;
}
function mouth4select() {
  selections[4] = 21;
}

function hairCycleForward() {
  if (selections[5] === 36) {
    selections[5] = 22;
  } else {
    selections[5]++;
  }
}
function hairCycleBackward() {
  if (selections[5] === 22) {
    selections[5] = 36;
  } else {
    selections[5]--;
  }
}

function returnButton() {
  switch(page) {
    case 'final':
      page = 'main';
      break;
  }
}
function saveImageButton() {
  switch(page) {
    case 'final':
      page = 'save';
      break;
  }
}

function resetPressed() {
  switch(page) {
    case page:
      page = 'title';
      break;
  }
  //1, 5, 13, 17, 18, 36
  selections[0] = 1;
  selections[1] = 5;
  selections[2] = 13;
  selections[3] = 17;
  selections[4] = 18;
  selections[5] = 36;
}