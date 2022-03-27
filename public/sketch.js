//client side
//p5 sketch.js

//the client is talking by emitting

//many clients to one server

//sketch is made of 2 functions the setup and draw

const socket = io.connect('10.24.229.101:3000'); //in-out protocol is going to connect to a specific adress in our local network

function setup() {
    createCanvas(400,400); //like size in processing
    background("pink");
    socket.on('mouse', newDrawing); //listen to server
}

function newDrawing(data) {
    fill('blue');
    circle(data.x,data.y,30); //use the variable in data object
} 

function mouseDragged() { //do this every time the mouse is dragged
    fill('white');
    circle(mouseX,mouseY, 40); //draw the circle and emit the values to the server, we still need to draw it

    let data = { //equals object, lets you encapsulate many things
        x: mouseX, //for each of the variable we assign data aka mousex and y
        y: mouseY
    }

    socket.emit('mouse', data); //send that we wanna do data to the server
}

function draw() {

}


