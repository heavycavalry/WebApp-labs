/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/client.ts ***!
  \***********************/
const socket = new WebSocket("ws://localhost:8080");
socket.onopen = function (e) {
    socket.send("Hello!");
};
socket.onmessage = function (event) {
    const listOfMessages = document.getElementById('listOfMessages');
    const listItem = document.createElement('li');
    listItem.textContent = event.data;
    listOfMessages?.appendChild(listItem);
};
document.getElementById('send').addEventListener('click', () => { socket.send(document.getElementById("messageInput").value); });

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYWItNy8uL3NyYy9jbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSw0REFBNEQsRUFBRSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNvY2tldCA9IG5ldyBXZWJTb2NrZXQoXCJ3czovL2xvY2FsaG9zdDo4MDgwXCIpO1xyXG5zb2NrZXQub25vcGVuID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIHNvY2tldC5zZW5kKFwiSGVsbG8hXCIpO1xyXG59O1xyXG5zb2NrZXQub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBjb25zdCBsaXN0T2ZNZXNzYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0T2ZNZXNzYWdlcycpO1xyXG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSBldmVudC5kYXRhO1xyXG4gICAgbGlzdE9mTWVzc2FnZXM/LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcclxufTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbmQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgc29ja2V0LnNlbmQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlSW5wdXRcIikudmFsdWUpOyB9KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==