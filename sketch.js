let capture;
let aa =0
let posterLevels =5
let heigthCamera = 240
let lengtCamera = 240* 1.333
let mobile = false


let switchFlag = false;
let switchBtn;
var options = {
     video: {
         facingMode: "environment"
     }
   };


function switchCamera()
{
  switchFlag = !switchFlag;
  if(switchFlag==true)
  {
   capture.remove();
   options = {
     video: {
        
         facingMode: "environment"
     }
   };

  }
  else
  {
   capture.remove();
   options = {
     video: {
        
         facingMode: {
          exact: "user"
        }
     }
   };
    
  }
  capture = createCapture(options);
    scale(-1, 1);
  
}

function setup() {


  
  createCanvas(320, 700);
  button = createButton('prop');
  button.mousePressed(prop);
  button.position(0, heigthCamera*2+ 60);

  button = createButton('guardar');
  button.mousePressed(guardar);
  button.position(0, heigthCamera*2);

  button = createButton('click me');
  button.mousePressed(changeBG);
  button.position(0, 0);
  
  switchBtn = createButton('Switch Camera');
  switchBtn.position(19, 19);
  switchBtn.mousePressed(switchCamera);

  button = createButton('+');
  button.position(130, 0);
  button.mousePressed(plusPosterLevels);
  
  button = createButton('-');
  button.position(250, 0);
  button.mousePressed(minusPosterLevels);

  capture = createCapture(options);
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
     saveFrames('out', 'jpg', 1, 1);
  } 

  function prop() {
    mobile = !mobile
    console.log('mobile', mobile)
  } 
  function minusPosterLevels() {
    posterLevels --
  }  
}

function draw() {

let temp;

if(mobile){

lengtCamera = 240
heigthCamera = lengtCamera* 1.333
}else{
heigthCamera = 240
lengtCamera = heigthCamera* 1.333
}

let aaa=  image(capture, 0, 0, lengtCamera, heigthCamera);
 
  background(100);
  push();
  translate(width,0);
  scale(-1, 1);

    image(capture, aa,0, lengtCamera, heigthCamera);
  
  filter(GRAY);
  filter(POSTERIZE, posterLevels)
  image(capture, 0,heigthCamera, lengtCamera, heigthCamera);
  pop();
 




}