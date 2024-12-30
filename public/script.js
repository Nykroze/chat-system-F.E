//appel

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
    
    const messageText=messageInput.value.trim();
    if(messageText && userName){
        socket.emit('message', {text:messageText,pseudo:userName});
        messageInput.value='';
    }
    else{
        alert(' entrer votre nom avant d\'envoyez un message ')
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
        socket.emit('setPseudo', userName)
        console.log(`nom saisi :"${userName}"`);
    }
    else{
        alert('veuillez entrer votre  nom');
    }
})

//message de bienvenue
socket.on('newUser', (name)=>{
        const li =document.createElement('li')
        li.textContent=`${name} a rejonint le chat.`;
        messageList.appendChild(li);
    
});
//message aurevoir
socket.on('userLeft', (pseudo)=>{
    const li = document.createElement('li');
    li.textContent=`${pseudo} a quitté le chat...`;
    messageList.appendChild(li);

});



/*





//liste des utilisateur en ligne  a revoir ou a prévoir 


socket.on('usersList', (usersList)=>{
    const userListContainer =document.getElementById('userList');
    userListContainer.innerHTML='';
    usersList.forcEach((user)=>{
        const li =document.createElement('li');
        li.textContent=user;
        if(user===currentUser){
            
        li.classList.add('current-user');
    }
    userListContainer.appendChildl(li);
});
});

*/








