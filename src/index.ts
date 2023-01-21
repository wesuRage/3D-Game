const express = require('express')
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {path: '/socket.io'});

app.use(express.static(__dirname + '/../public/'))
http.listen(3333, () => {
    console.log('\nApp running at http://localhost:3333');
})

let clients: Array<any> = [];

io.on('connection', (socket: any) => {

    const players = {
        id: socket.id,
        color: Math.random() * 0xffffff,
        position: 0
    }

    clients.push(players);
    socket.emit('player', players)

    console.log(clients);

    socket.on('disconnect', (reason: any) => {
        clients.splice(clients.indexOf(players), 1);
        
        console.log(clients);
    });
});

