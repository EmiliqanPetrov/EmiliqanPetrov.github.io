// Suzdavame promenlivi
let myX, myY, posoka, broiOtskachaniq, points, lives;
let paddleY;
//posoka 0 - nagore i nalqvo
//posoka 1 - nadolu i nalqvo
//posoka 2 - nadolu i nadqsno
//posoka 3 - nagore i nadqsno
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 750;
    myY = 550;
    paddleY = 0;
    posoka = 0;
    broiOtskachaniq = 0;
    points = 0;
    lives = 10;
}
function update() {
    //Kodut tuk se povtarq nad 100 puti v secunda
    if(lives>0){
        paddleY = mouseY;
        if(paddleY + 150 > 600){
            paddleY = 450;
        }
        if(posoka==0){
            myX-= 3;
            myY-= 3;
        }
        if(posoka==1){
            myX-= 3;
            myY+= 3;
        }
        if(posoka==2){
            myX+= 3;
            myY+= 3;
        }
        if(posoka==3){
            myX+= 3;
            myY-= 3;
        }

        if(myY < 0){
            broiOtskachaniq++;
            console.log(broiOtskachaniq)
            if(posoka==0){
                posoka = 1;
            }else{
                posoka = 2;
            }
        }
        if(myX < 0){
            broiOtskachaniq++;
            console.log(broiOtskachaniq)
            if(posoka==1){
                posoka = 2;
            }else{
                posoka = 3;
            }
            if(paddleY <= myY + 25 && myY + 25 <= paddleY + 150){
                points++;
                console.log("points", points)
            }else{
                lives--;
                console.log("lives", lives)
            }
        }
        if(myY > 550){
            broiOtskachaniq++;
            console.log(broiOtskachaniq)
            if(posoka==2){
                posoka = 3;
            }else{
                posoka = 0
            }
        }
        if(myX > 750){
            broiOtskachaniq++;
            console.log(broiOtskachaniq)
            if(posoka==3){
                posoka = 0;
            }else{
                posoka = 1;
            }
        }
    }
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    if(lives>0){
        drawImage(backStars, 0, 0, 800, 600);
        drawImage(ballOrTree, myX, myY, 50, 50);
        drawImage(paddle, 0, paddleY, 30, 150);
        drawImage(paddleGhost, 680, 0, 110, 30);
        drawImage(powerupGreen, 685, 1, lives*10, 28)
    }else{
        drawImage(backHills, 0, 0, 800, 600)
    }
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}

