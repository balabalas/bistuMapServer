
(function(){

    var socket = io.connect('http://dmdgeeker.com:7887')
      , times = 0;

    socket.on('id', function (index) {
        console.log(index);
        socket.emit('update', "Hello, this is web. " + index);

        setInterval(function(){
            times++;
            socket.emit('update', "ID: " + index + " has invoked " + times + " times.");
        }, 2000);

        socket.on('callback', function(cb){
            console.log(cb);
        });
    });

})();


