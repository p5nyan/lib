// noprotect

function setup() {
  // Sprite.flushScreen = false;
  createCanvas(480, 360);
  start(100, 200);
}

async function draw() {
  await sleep(1);

  print(getDirection());
  say(getDirection());
}
