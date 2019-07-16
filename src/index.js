//node path module to serve up the public directory
const path= require('path');

//get http core module
const http= require('http'); 

const express= require('express');

//adding socket.io 
//we are getting a function back as we call out library
const socketio= require('socket.io');

// create express app
const app= express();
//we dont need to write this one as express library does this behind the scene anyways
// we write this because we need to configure this one
const server= http.createServer(app); // we will use server.listen is we write this line of code

//create new instance of socket.io to configure web-socket to work with out server
//socket io is expectd to call with raw http server
const io= socketio(server);

//port and public directory path
const port= process.env.PORT || 3000;
const publicDirectoryPath= path.join(__dirname,'../public'); //dont have this directory yet

// use express static middleware to seve up what is in public Directory
app.use(express.static(publicDirectoryPath));

//print message to the terminal when the client connects
//we are listening for a given event to occur(connection)
//connection is going to fire when socket.io server gets a new connection from client

//sending message from server to client
let count=100;

//socket is an object , contains information about the new connection
//we use method on socket to communicate with the specific client
io.on('connection',(socket)=>{
    console.log('new web socket connection is estublished');
    //code to send data to the newly connection
    //we call method on client ----sending event to client-- sending information to client
    socket.emit('countUpdated',count);


    //listening from client
    socket.on("increment",()=>{
        count++;
        //sending the new count value
        //socket.emit('countUpdated',count); //here we are only emiting to the specific connection , we want to emit for every connection

        //io.emit emits for every single connection connected as client
        io.emit("countUpdated",count);

    })

})
//start the server up
server.listen(port,()=>{
    console.log(`Server is up on port ${port}!`);
})