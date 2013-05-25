
(function(){

    var socket = io.connect('http://dmdgeeker.com:7887');

    socket.on('id', function (index) {
        console.log(index);
        socket.emit('update', "Hello, this is web. " + index);
        socket.on('callback', function(cb){
            console.log(cb);
        });
    });

})();


