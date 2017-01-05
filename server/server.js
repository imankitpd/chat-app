const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
// var io = require('socket.io').listen(server);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected.');

    socket.emit('newMessage', {
        from: 'abc',
        text: 'See you then',
        createdAt: 1234
    })

    socket.emit('newEmail', {
        from: 'ankit@example.com',
        text: 'Hey. Whats going on.',
        createdAt: 123
    });

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
    })

    socket.on('createEmail', (newEmail) => {
        console.log('createEmail', newEmail);
    })

    socket.on('disconnect', () => {
    console.log('User was disconnected');
    });
});



server.listen(port, () => {
    console.log(`Listening at Port ${port}`);
});