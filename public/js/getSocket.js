
(function(){

    var socket = io.connect('http://dmdgeeker.com:7887');

    socket.on('id', function (data) {
        console.log(data);
        socket.emit('update', "Hello, this is web.");
    });

})();


