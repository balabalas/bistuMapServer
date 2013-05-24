

exports.socketIO = function(socket){
    
    socket.on('update', function(data){
        console.log("callback: " + data.toString());
        socket.broadcast.emit('callback', "Hello, Allen.");
    });
};







