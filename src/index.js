//node path module to serve up the public directory
const path= require('path');

const express= require('express');

// create express app
const app= express();

//port and public directory path
const port= process.env.PORT || 3000;
const publicDirectoryPath= path.join(__dirname,'../public'); //dont have this directory yet

// use express static middleware to seve up what is in public Directory
app.use(express.static(publicDirectoryPath));

//start the server up
app.listen(port,()=>{
    console.log(`Server is up on port ${port}!`);
})