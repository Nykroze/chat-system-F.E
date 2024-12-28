

const socket = io(); 
const messageForm= document.getElementById('message-form');
const messageInput=document.getElementById('message-input');
const messageList= document.getElementById('message');
let userName;

 
socket.on('connect', ()=>{
    console.log('Connecté au serveur via Socket.IO');



  // Exemple d'envoi de message
  //  socket.emit('message', 'Hello depuis le frontend !');


});




//fonction interactif

messageForm.addEventListener('submit',(e)=>{
     e.preventDefault();

     const messageText=message.value.trim();
     if(messageText){
        socket.emit('message', {text:messageText,pseudo:userName});
        messageInput.value='';
     }
});


// recption du message depuis le back-end

socket.on('message',(data)=>{
    
    const li= document.createElement('li');
    
        li.textContent=`${data.pseudo} :${data.text}`;
        li.className=data.pseudo===userName ? 'monMessage':'autreMessage';  
    
    
    messageList.appendChild(li);
});

// la partie design de ma page
//############################


// recuperation des valeurs popup user et mise en place 

const popupUser= document.getElementById('user');
const nameInput= document.querySelector('.inputPopup');
const btnUser= document.querySelector('.btnPopup');

btnUser.addEventListener('click',()=>{
    const name=nameInput.value.trim();

    if(name){
        userName=name;
        popupUser.classList.add('remove');
        console.log(`nom saisi ${userName}`);
    }
    else{
        alert('entre ton nom');
    }
})














