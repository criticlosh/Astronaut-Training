function preload(){
bg = loadImage("iss.png")
sleep = loadAnimation("sleep.png")
brush = loadAnimation("brush.png")
gym = loadAnimation("gym12.png", "gym11.png", "gym2.png", "gym1.png")
eat = loadAnimation("eat1.png", "eat2.png")
bath = loadAnimation("bath1.png", "bath2.png")
move = loadAnimation("move.png", "move1.png")

}






function setup() {
  createCanvas(800,400);
  astronaut = createSprite(300, 230)
astronaut.addAnimation("sleep",sleep)
astronaut.scale = 0.1;
}


function draw() {
  background(bg);  
  drawSprites();
if (keyDown(UP_ARROW)){
astronaut.addAnimation("brushing", brush)
astronaut.changeAnimation("brushing")
astronaut.y = 350;
astronaut.velocityX = 0;
astronaut.velocityY = 0;
}


if (keyDown(DOWN_ARROW)){
  astronaut.addAnimation("gyming", gym)
  astronaut.changeAnimation("gyming")
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
  }
  if (keyDown(LEFT_ARROW)){
    astronaut.addAnimation("eating", eat)
    astronaut.changeAnimation("eating")
    astronaut.x = 150
    astronaut.y = 350;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
    }

    if (keyDown(RIGHT_ARROW)){
      astronaut.addAnimation("bathing", bath)
      astronaut.changeAnimation("bathing")
      astronaut.x = 300;
      astronaut.velocityX = 0;
      astronaut.velocityY = 0;
      }

      if (keyDown("m")){
        astronaut.addAnimation("moving", move)
        astronaut.changeAnimation("moving")
        astronaut.velocityX = 1;
        astronaut.velocityY = 1;
        }

textSize(20)
fill("white")
text("instruction", 20, 35)
textSize(15)
text("UP_ARROW = Brushing", 20, 55)
text("DOWN_ARROW = Gyming", 20, 70)
text("LEFT_ARROW = Eating", 20, 85)
text("RIGHT_ARROW = Bathing", 20, 100)
text("Mkey = moving", 20, 115)

edges = createEdgeSprites();
astronaut.bounceOff(edges)
}

