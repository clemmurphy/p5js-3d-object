function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
}

function preload() {
  dogModel = loadModel('dog.obj')
}

function draw() {
  background(51)
  noStroke()

  ambientLight(50)
  let locX = mouseX - windowWidth / 2
  let locY = mouseY - windowHeight / 2
  pointLight(255, 255, 255, locX, locY, 255)
  let dirX = (mouseX / windowWidth - 0.5) * 2
  let dirY = (mouseY / windowHeight - 0.5) * 2
  directionalLight(0, 255, 255, -dirX, -dirY, -1)

  push()
  rotateY(frameCount * 0.01)
  specularMaterial(100, 100, 255, 255)
  shininess(255)
  translate(0, 120)
  rotateX(-55)
  rotateZ(0)
  scale(4)
  model(dogModel)
  pop()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  setup()
}
