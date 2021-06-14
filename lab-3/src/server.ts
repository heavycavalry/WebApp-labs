import * as http from 'http'
import * as websocket from 'ws'

const server = http.createServer();

const socket = new websocket.Server({server});
socket.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
      console.log('received: %s', message);
      socket.clients.forEach(client => client.send(message));
    });
  });

  server.listen(8080);