canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1Width = 120;
car1Height = 70;
car1Image = "Car1.png";
car1X = 10;
car1Y = 10;

car2Width = 120;
car2Height = 70;
car2Image = "Car2.png";
car2X = 10;
car2Y = 100;

bg = "Racing.jpg";



function add() {
    bgImgTag = new Image();
    bgImgTag.onload = uploadBg;
    bgImgTag.src = bg;

    car1ImgTag = new Image();
    car1ImgTag.onload = uploadCar1;
    car1ImgTag.src = car1Image;

    car2ImgTag = new Image();
    car2ImgTag.onload = uploadCar2;
    car2ImgTag.src = car2Image;
}

function uploadBg() {
    ctx.drawImage(bgImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1() {
    ctx.drawImage(car1ImgTag, car1X, car1Y, car1Width, car1Height);
}

function uploadCar2() {
    ctx.drawImage(car2ImgTag, car2X, car2Y, car2Width, car2Height);
}


window.addEventListener("keydown", myKeydown);

function myKeydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == "38") {
        car1Up();
        console.log("Up Arrow Key");
    }

    if (keyPressed == "40") {
        car1Down();
        console.log("Down Arrow Key");
    }

    if (keyPressed == "37") {
        car1Left();
        console.log("Left Arrow Key");
    }

    if (keyPressed == "39") {
        car1Right();
        console.log("Right Arrow Key");
    }

    if (keyPressed == "87") {
        car2Up();
        console.log("Key W");
    }

    if (keyPressed == "83") {
        car2Down();
        console.log("Key S");
    }

    if (keyPressed == "68") {
        car2Right();
        console.log("Key D");

    }

    if (keyPressed == "65") {
        car2Left();
        console.log("Key A");
    }
}