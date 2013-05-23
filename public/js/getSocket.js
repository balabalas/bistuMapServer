
(function(){

    var socket = io.connect('http://localhost:7887');

    socket.on('news', function (data) {
        console.log(data);
        socket.emit('callback', { my: 'Hello, everyone. this is allen.' });
    });

})();


