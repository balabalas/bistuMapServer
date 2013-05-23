

exports.socketIO = function(socket){
    socket.emit('news', "Hello, Allen.");
    socket.on('callback', function(data){
        if(data && data.my) console.log(data.my);
        console.log("callback: " + data.toString());
    });
};







