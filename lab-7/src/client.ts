const socket = new WebSocket("ws://localhost:3001");

socket.onopen = function(e) {
    socket.send("Hello!");
};

socket.onmessage = function(event) {
    const listOfMessages = document.getElementById('listOfMessages');
    const listItem = document.createElement('li');
    listItem.textContent = event.data
    listOfMessages?.appendChild(listItem);
}

document.getElementById('send').addEventListener('click', () => {socket.send((<HTMLInputElement>document.getElementById("messageInput")).value)});