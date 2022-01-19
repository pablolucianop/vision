let capture;
let aa =0
let posterLevels =5
function setup() {


  
  createCanvas(320, 540);
  button = createButton('guardar');
  button.mousePressed(guardar);
  button.position(0, 600);

  button = createButton('click me');
  button.mousePressed(changeBG);
  button.position(0, 0);
  
  button = createButton('+');
  button.position(130, 0);
  button.mousePressed(plusPosterLevels);
  
  button = createButton('-');
  button.position(250, 0);
  button.mousePressed(minusPosterLevels);

  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();
  
  function changeBG() {
    if(aa===0)
      {aa=1000;}else{aa=0;}
    } 
  function plusPosterLevels() {
    posterLevels ++
  }  
  function guardar() {
     saveFrames('out', 'png', 1, 1);
  } 
  function minusPosterLevels() {
    posterLevels --
  }  
}

function draw() {
  image(capture, 0, 0, 320, 240);
  background(255);
  push();
  translate(width,0);
  scale(-1, 1);

    image(capture, aa,0, 320, 240);
  
  filter(GRAY);
  filter(POSTERIZE, posterLevels)
  image(capture, 0,240, 320, 240);
  pop();
 
  img = loadImage('assets/moonwalk.jpg'); // Cargar la imagen




}