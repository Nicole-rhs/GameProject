//To go to play.html and start game
function start() {
  location.href = "play.html";
}

//Player
function player() {
  this.x = w/2;
  this.y = 0;
  this.gravity = 0.5;
  this.lift = -15;
  this.velocity = 0;

  this.show = function () {
    rect(this.x, this.y, 40, 70);
    rectMode(CENTER);
    noStroke();
    noFill();
  }

  this.up = function () {
    this.velocity += this.lift;
  }
  this.left = function () {
    this.x -= 3;
  }
  this.right = function () {
    this.x += 3;
  }

  this.update = function () {
    this.velocity += this.gravity;
    this.y += this.velocity;
    this.velocity *= 0.92;

    //How to die in the game
    if (this.x <= -30) {
      this.x = -2 * w;
      noLoop();
      document.getElementById("end").style.display = "block";
    }
    if (this.x >= w) {
      this.x = w;
    }
    if (this.y <= -33) {
      this.y = -2*h;
      noLoop();
      document.getElementById("end").style.display = "block";
    }
    if (this.y >= h+30) {
      this.y = 3*h;
      noLoop();
      document.getElementById("end").style.display = "block";
    }
  }
}

//Easy way to find player
function finder(){
  this.x = w/2;
  this.y = 0;

  this.show = function () {
    rect(this.x, this.y, 50, 50);
    rectMode(CENTER);
    this.x = player.x;
    this.y = player.y - 150;
  }
}

//Obstacles * 7
function blockA() {
  this.x = w + 20;
  this.y = h/2;
  this.l = 160;
  this.w = 183;

  this.show = function () {
    rect(this.x, this.y, this.l, this.w);
    rectMode(CENTER);
    noStroke();
    noFill();
    //Movement speed
    this.x = this.x -= 5.5;
    //To get a new, random location
    if (this.x <= -35) {
      this.x = w + 50;
      this.y = random(h/4, h/2 + h/4);
    }
  }
}

function blockB() {
  this.x = w + 123;
  this.y = h/2 - 99;
  this.l = 70;
  this.w = 63;

  this.show = function () {
    rect(this.x, this.y, this.l, this.w);
    rectMode(CENTER);
    noStroke();
    noFill();
    //Movement speed
    this.x = this.x -= 5.3;
    //To get a new, random location
    if (this.x <= -35) {
      this.x = w + random(20, 70);
      this.y = random(20, h/2);
    }
  }
}

function blockC() {
  this.x = 2*w + 222;
  this.y = h/2 - 123;
  this.l = 111;
  this.w = 80;

  this.show = function () {
    rect(this.x, this.y, this.l, this.w);
    rectMode(CENTER);
    noStroke();
    noFill();
    //Movement speed
    this.x = this.x -= 5.7;
    //To get a new, random location
    if (this.x <= -35) {
      this.x = w + random(w/3, w/2);
      this.y = random(h/2, h-20);
    }
  }
}

function blockD() {
  this.x = 3*w + 333;
  this.y = h/2 - 200;
  this.l = 150;
  this.w = 150;

  this.show = function () {
    rect(this.x, this.y, this.l, this.w);
    rectMode(CENTER);
    noStroke();
    noFill();
    //Movement speed
    this.x = this.x -= 6;
    //To get a new, random location
    if (this.x <= -35) {
      this.x = w + random(30, w/2);
      this.y = random(5, h-20);
    }
  }
}

function blockE() {
  this.x = 5*w + 555;
  this.y = h/2 + 123;
  this.l = 185;
  this.w = 180;

  this.show = function () {
    rect(this.x, this.y, this.l, this.w);
    rectMode(CENTER);
    noStroke();
    noFill();
    //Movement speed
    this.x = this.x -= 5;
    //To get a new, random location
    if (this.x <= -35) {
      this.x = w + random(w/2, w);
      this.y = random(0, h-200);
    }
  }
}

function blockF() {
  this.x = 7*w + 777;
  this.y = h/2;
  this.l = 150;
  this.w = 150;

  this.show = function () {
    rect(this.x, this.y, this.l, this.w);
    rectMode(CENTER);
    noStroke();
    noFill();
    //Movement speed
    this.x = this.x -= 6.3;
    //To get a new, random location
    if (this.x <= -35) {
      this.x = w + random(10, 100);
      this.y = random(0, h/4);
    }
  }
}

function blockG() {
  this.x = 10*w;
  this.y = h/4;
  this.l = 200;
  this.w = 200;

  this.show = function () {
    rect(this.x, this.y, this.l, this.w);
    rectMode(CENTER);
    noStroke();
    noFill();
    //Movement speed
    this.x = this.x -= 6.5;
    //To get a new, random location
    if (this.x <= -35) {
      this.x = w + random(10, w/3);
      this.y = random(h/2 + h/4, h-20);
    }
  }
}

//Points * 3
function pointA() {
  this.x = w + 45;
  this.y = 35;

  this.show = function () {
    rect(this.x, this.y, 10, 10);
    rectMode(CENTER);
    noStroke();
    noFill();
    //Movement speed
    this.x = this.x -= 3.3;
    //To get new, random location
    if (this.x <= 0) {
      this.x = w + random(w, 2*w);
      this.y = random(0, h-10);
    }
  }
}

function pointB() {
  this.x = 2*w + 333;
  this.y = 135;

  this.show = function () {
    rect(this.x, this.y, 10, 10);
    rectMode(CENTER);
    noStroke();
    noFill();
    //Movement speed
    this.x = this.x -= 3.5;
    //To get new, random location
    if (this.x <= 0) {
      this.x = w + random(w, 3*w);
      this.y = random(0, h/2);
    }
  }
}

function pointC() {
  this.x = 4*w + 555;
  this.y = h/2 + 100;

  this.show = function () {
    rect(this.x, this.y, 10, 10);
    rectMode(CENTER);
    noStroke();
    noFill();
    //Movement speed
    this.x = this.x -= 3.5;
    //To get new, random location
    if (this.x <= 0) {
      this.x = w + random(2*w, 3*w);
      this.y = random(h/2, h-10);
    }
  }
}

//To replay/reload
function replay() {
  location.reload();
}
