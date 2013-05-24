
(function(){

    var socket = io.connect('http://localhost:7887');

    socket.on('id', function (data) {
        console.log(data);
        socket.emit('callback', { my: 'Hello, everyone. this is allen.' });
    });

})();


