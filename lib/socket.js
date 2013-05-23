

exports.socketIO = function(socket){
    
    socket.on('update', function(data){
        console.log("callback: " + data.toString());
        socket.emit('callback', "Hello, Allen.");
    });
};







