


const socket = io(); 
socket.on('connect', ()=>{
    console.log('Connecté au serveur via Socket.IO');

    // Exemple d'envoi de message
    socket.emit('message', 'Hello depuis le frontend !');
});

// Écoute des messages du serveur
socket.on('message', (msg) => {
    console.log('Message reçu du serveur :', msg);
});
