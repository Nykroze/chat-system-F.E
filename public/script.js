const socket = io(); 
const messageForm= document.getElementById('message-form');
const messageInput=document.getElementById('message-input');
const messageList= document.getElementById('message');

 
socket.on('connect', ()=>{
    console.log('Connecté au serveur via Socket.IO');



  // Exemple d'envoi de message
  //  socket.emit('message', 'Hello depuis le frontend !');


});




// Écoute des messages du serveur
socket.on('message', (msg) => {
    console.log('Message reçu du serveur :', msg);
});

//fonction interactif

messageForm.addEventListener('submit',(e)=>{
     e.preventDefault();
     const message= messageInput.value;
     if(message){
        socket.emit('message', message);
        messageInput.value='';
     }
});


// recption du message depuis le back-end

socket.on('message',(data)=>{
   
    const li= document.createElement('li');
    // ici je vais comparer celui qui envoie le message et celui qui le reçois
    if(data.id===socket.id){
        li.textContent=`moi: ${data.text}`;
        li.className='monMessage';  
    }
    else{
        li.textContent=`autre: ${data.text}`;
        li.className='autreMessage';  
    }

    messageList.appendChild(li);
});

// la partie design de ma page





