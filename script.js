function player(){
    this.x = w/2;
    this.y = 0;
    this.gravity = 0.5;
    this.lift = -15;
    this.velocity = 0;
    
    this.show = function(){
        ellipse(this.x,this.y,50,50);
        ellipseMode(CENTER);
        fill(222,0,0);
    }
    this.up = function(){
        this.velocity += this.lift;
    }
    this.left = function(){
        this.x -= 3;
    }
    this.right = function(){
        this.x += 3;
    }
    this.update = function(){
        this.velocity += this.gravity;
        this.y += this.velocity;
        this.velocity *= 0.92;

        //Stop jumper from leaving screen
        if (this.x <= 0){
            this.x = 0;
        }
        if (this.x >= w){
            this.x = w;
        }
        if (this.y <= 30){
            this.y = 30;
        }
        if (this.y >= h + 55){
            this.y = h+ 55;
            this.velocity = 0;
        }
    }
}

function blockA(){
    this.x = w + 20;
    this.y = h/2;
    this.l = 50;
    this.w = 50;

    this.show = function(){
        rect(this.x, this.y, this.l, this.w);
        rectMode(CENTER);
        fill(222,0,0);
        //Movement speed
        this.x = this.x -= 5.5;
        //To get a new, random size and location
        if (this.x <= 0){
            this.l = random(30,200);
            this.w = random(30,100);
            this.x = w + 50;
            this.y = random(10,h-10);
        }
    }
}

function blockB(){
    this.x = w + 111;
    this.y = h/2 - 90;
    this.l = 80;
    this.w = 50;

    this.show = function(){
        rect(this.x, this.y, this.l, this.w);
        rectMode(CENTER);
        fill(222,0,0);
        //Movement speed
        this.x = this.x -= 5.3;
        //To get a new, random size and location
        if (this.x <= 0){
            this.l = random(30,200);
            this.w = random(30,100);
            this.x = w + random(20,70);
            this.y = random(20,h/2);
        }
    }
}

function blockC(){
    this.x = 2*w + 222;
    this.y = h/2 - 123;
    this.l = 60;
    this.w = 20;

    this.show = function(){
        rect(this.x, this.y, this.l, this.w);
        rectMode(CENTER);
        fill(222,0,0);
        //Movement speed
        this.x = this.x -= 5.7;
        //To get a new, random size and location
        if (this.x <= 0){
            this.l = random(30,200);
            this.w = random(30,100);
            this.x = w + random(80,w/2);
            this.y = random(h/2,h-20);
        }
    }
}

function blockD(){
    this.x = 3*w + 333;
    this.y = h/2 - 200;
    this.l = 60;
    this.w = 20;

    this.show = function(){
        rect(this.x, this.y, this.l, this.w);
        rectMode(CENTER);
        fill(222,0,0);
        //Movement speed
        this.x = this.x -= 6;
        //To get a new, random size and location
        if (this.x <= 0){
            this.l = random(30,200);
            this.w = random(30,100);
            this.x = w + random(80,w/2);
            this.y = random(0,h-20);
        }
    }
}

function blockE(){
    this.x = 5*w + 555;
    this.y = h/2 + 123;
    this.l = 60;
    this.w = 20;

    this.show = function(){
        rect(this.x, this.y, this.l, this.w);
        rectMode(CENTER);
        fill(0,222,0);
        //Movement speed
        this.x = this.x -= 6.3;
        //To get a new, random size and location
        if (this.x <= 0){
            this.l = random(30,200);
            this.w = random(30,100);
            this.x = w + random(80,w/2);
            this.y = random(0,h-200);
        }
    }
}

function pointA(){
    this.x = w + 45;
    this.y = 35;

    this.show = function(){
        rect(this.x, this.y, 10, 10)
        rectMode(CENTER);
        fill(0,0,222);
        //Movement speed
        this.x = this.x -= 3.3;
        //To get new, random location
        if (this.x <= 0){
            this.x = w + random(w,2*w + 100);
            this.y = random(0,h-30);
        }
    }
}