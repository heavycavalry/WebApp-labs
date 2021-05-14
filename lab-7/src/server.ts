import * as http from 'http';
import * as websocket from 'ws';

const server = http.createServer();
const socket = new websocket.Server({server});

socket.on('connection', (ws) => {
    ws.on('message', (msg) => {
    console.log('received: ' + msg);
    ws.send(msg);
    });
    ws.send('connected');
    console.log("new connection");
});


function broadcast(message:string): void {
    socket.clients.forEach(client => {
        client.send(message)
    })
}

server.listen(8080);