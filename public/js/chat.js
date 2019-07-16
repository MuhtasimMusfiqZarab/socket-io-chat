//we can call io() function to connect
const socket=io();

//listening from server-----------recive events from server
socket.on("countUpdated",(value)=>{
    console.log(`The count has been updated ${value}`);
})


//select the button here
document.querySelector("#increment").addEventListener('click',()=>{
    console.log("Clicked");
    //sending from client to server
    socket.emit('increment');
})
