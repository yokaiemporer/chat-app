var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
   from:'taran rishit',
   text:'yup its me'
  });
});


socket.on('newEmail', function (email) {
  console.log('New email', email);
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});
socket.on('newMessage',function(message){
  console.log('newMessage',message);
  });