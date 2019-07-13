//node path module to serve up the public directory
const path= require('path');

//get http core module
const http= require('http'); 

const express= require('express');

// create express app
const app= express();
//we dont need to write this one as express library does this behind the scene anyways
// we write this because we need to configure this one
const server= http.createServer(app); // we will use server.listen is we write this line of code

//port and public directory path
const port= process.env.PORT || 3000;
const publicDirectoryPath= path.join(__dirname,'../public'); //dont have this directory yet

// use express static middleware to seve up what is in public Directory
app.use(express.static(publicDirectoryPath));

//start the server up
server.listen(port,()=>{
    console.log(`Server is up on port ${port}!`);
})