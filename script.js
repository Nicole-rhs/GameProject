function player(){
    this.x = w/2;
    this.y = 0;
    this.gravity = 0.5;
    this.lift = -15;
    this.velocity = 0;
    
    this.show = function(){
        ellipse(this.x,this.y,50);
        fill(222,0,0);
    }
    this.up = function(){
        //Change origional velocity by opposing gravity
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
        //Air resistance
        this.velocity *= 0.92;
        //Stop jumper from leaving screen
        if (this.x <= 0){
            this.x = 0;
        }
        if (this.x >= w){
            this.x = w;
        }
        if (this.y <= 0){
            this.y = 0;
        }
        if (this.y >= h){
            this.y = h;
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
        fill(222,0,0);
        this.x = this.x -= 5.5;
        if (this.x <= 0){
            this.l = random(30,200);
            this.w = random(30,100);
            this.x = w + 50;
            this.y = random(50,h-10);
        }
    }
}

function blockB(){
    this.x = w + 555;
    this.y = h/2 - 90;
    this.l = 80;
    this.w = 50;

    this.show = function(){
        rect(this.x, this.y, this.l, this.w);
        fill(222,0,0);
        this.x = this.x -= 5.3;
        if (this.x <= 0){
            this.l = random(30,200);
            this.w = random(30,100);
            this.x = w + random(20,70);
            this.y = random(80,h-30);
        }
    }
}

function blockC(){
    this.x = w + 222;
    this.y = h/2 - 123;
    this.l = 60;
    this.w = 20;

    this.show = function(){
        rect(this.x, this.y, this.l, this.w);
        fill(0,222,0);
        this.x = this.x -= 5;
        if (this.x <= 0){
            this.l = random(30,200);
            this.w = random(30,100);
            this.x = w + random(80,w/2);
            this.y = random(h/2,h-20);
        }
    }
}