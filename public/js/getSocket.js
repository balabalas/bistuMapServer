
(function(){

    var socket = io.connect('http://bistumap.dmdgeeker.com');

    socket.on('news', function (data) {
        console.log(data);
        socket.emit('callback', { my: 'Hello, everyone. this is allen.' });
    });

})();


