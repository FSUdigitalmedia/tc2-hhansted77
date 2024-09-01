function setup() {
  //note: the set up down below is (x (width) ,y (height))
  createCanvas(600, 400);
}

//for the draw function, the order of drawn shapes occurs
//in order of descension
//so the sky first, then overlayed is the sun, etc.
//like layers of a canvas

function draw() {
  //the color code below is for sky blue using RGB
  background(135, 206, 235);
  // the below works as (x, y, size) so (550, 50) with a circle that is 
  //50 wide 50 high or 100 in size

  fill ("yellow");//yellow fill for the shape below
//default of fill function is white
  stroke ("orange");//creates  color outline of shape below

  strokeWeight(20);//thickens the outline

  circle (550, 50, 100);

  //vvv for grass outline below

  stroke (0);

  strokeWeight (1);

  fill ("green");

  rect(0, 200, 600, 200);
// the 0 is the x-coord, 200 is the y-coord, 600 is width, 
//200 is height

//i tried making a triangle but holy shit I don't know where 
//the proper coords would even be LOL it kept floating

textSize(75)

text("🌸", 100, 250);
text("🐛", mouseX, mouseY);
// the quotes hole the string of text, then its x, y

textSize(40)

text("🦅", 250, 80);

}

//future reference, add a : at the end of every statement but NOT after {}
