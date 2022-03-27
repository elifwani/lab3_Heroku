//server side

//server is listening

//1 server to many clients

//socket.io is communication protocol, lays out rules for communication

const express = require('express');
const app = express(); //express is a package to link thiings on the web
const server = app.listen(3000); //listen in port number 3000

app.use(express.static("public")); //says to use static files

let msg = "Hello World!";
console.log(msg);

const socket = require('socket.io');
const io = socket(server); //what do we want to use to communicate -> the server

io.sockets.on('connection', newConnection); //when connection happens, in the sockets argument inside io, we're gonna run the method on(2 arguments, event name  and callback() function are premade u can find on sockets.io)

//with newSocket, it sends the message to all the clients except for the one that sent the message

function newConnection(newSocket) { //different from our socket
    console.log("New connection! @", newSocket.id); // person connected is the id

    newSocket.on('mouse', mouseMessage); //this is how the server listens aka event-listener

    function mouseMessage(data) { //the data we give when we are dragging the mouse
        console.log(data);
        newSocket.broadcast.emit('mouse', data); //sends to all the clients but not the one that sent it to you
        //io.socket.emit('mouse',data) for global emit aka to all including the one that sent the message
    }
}