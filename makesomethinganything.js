function setup() { 
//the double hashes mean a comment - ignored by the computer
createCanvas(1500, 1500); 
//this is the size of the canvas pixel count 
//in horizontal vertical directions that allow you to draw
// try changing the 1500s and see what happens

 textSize(30);}

var i = 0;
function draw() {
 fill(0, 0, 0);
  text("The percent of college athletes that go pro, represented by the purple dots", 100, 50);
 // title
 i = i+1;
 if (i % 98 === 2){ //telling the code that each 98 pink dots there should be one purple
   console.log("test");
//an if statement that says if the mouse is pressed it will fill grey
   fill(208, 91, 255); // try changing one of these to any number between 0 and 255
 }else {  
// otherwise if the mouse isn't pressed it will fill teal (my favorite)  
   fill(255, 0, 170);
// you can set the color you want (R, G, B) http://www.rapidtables.com/web/color/RGB_Color.htm
 }
 ellipse(mouseX, mouseY, 80, 80);
//This makes an ellipse (wherever your mouse is horizontal, vertical, 80 pixels tall, 80 pixels wide)
//try changing the 80s and see what happens
}
