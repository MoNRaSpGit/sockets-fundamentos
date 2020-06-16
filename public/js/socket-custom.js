

var socket = io();

socket.on('connect', function(){

    console.log('Conectado al servidor');
});

// escuchar 
socket.on('disconnect', function(){

    console.log('Perdimos conexion con el servidor')

});
 
// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Ramon',
    mensaje: 'Hola wey'
}, function(resp){
    console.log('respuesta del servidor: ', resp);

});

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje){

    console.log('Servidor:', mensaje);
    
});


    