function setup() {
    createCanvas(windowWidth, windowHeight)
}

function draw() {
    //background(0, 0, 0);
}

function windowResized() { 
    resizeCanvas(windowWidth, windowHeight);
}

function mouseMoved() {
    stroke(255);
    fill(0);
    //const size = random(10, 100);
    const size = Math.abs(Math.sin(frameCount * 0.01)) * 100;
    const red = Math.abs(Math.sin(frameCount * 0.)) * 100;
    ellipse(mouseX, mouseY, size, size);
    //rect(mouseX, mouseY, size, size);
}