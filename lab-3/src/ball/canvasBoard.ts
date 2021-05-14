import { start } from "repl";

export class CanvasBoard {
    canvas: HTMLCanvasElement;
    constructor() {
      this.canvas = <HTMLCanvasElement>document.createElement("canvas");
      this.canvas.id = "canvas";
      this.canvas.width = 500;
      this.canvas.height = 500;
      const div = document.getElementById('root');
      div.appendChild(this.canvas);
      this.start();
    }

    start() {
      const context = this.canvas.getContext("2d");
      window.addEventListener('deviceorientation', onDeviceMove)
      let startTime = Date.now();
      let time;
  
      const circle = {
          x: 50,
          y: 50,
          size: 30,
          dx: 1, //increment 
          dy: 1
      };
  
      const hole = {
          x: getRandomInt(50, 450),
          y: getRandomInt(50, 450),
          size: 40,
          dx: 0,
          dy: 0
      };
  
      function getRandomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min)) + min;
      }
  
      function onDeviceMove(ev) {
          console.log(ev.alpha, ev.beta, ev.gamma);
          stupidMove(ev.gamma, ev.beta)
      }
  
      function countSpeed(y) {
          y = ((y % 360) + 360) % 360
          let dy = 0.1
          if (y > 0 && y < 180) {
              dy = 2
          }
          if (y > 180 && y < 360) {
              dy = -2
          }
          return dy;
      }
  
      function stupidMove(x, y) {
          let dx = countSpeed(x);
          let dy = countSpeed(y);
          circle.dx = dx;
          circle.dy = dy;
      }
  
      function drawCircle() {
          context.beginPath();
          context.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
          context.fillStyle = '#DA5CD3';
          context.fill();
      }
  
      function drawHole() {
          context.beginPath();
          context.arc(hole.x, hole.y, hole.size, 0, Math.PI * 2);
          context.fillStyle = '#000000';
          context.fill();
      }

      let shouldRun = true
  
      function animate() {
          if (shouldRun) {
              context.clearRect(0, 0, 500, 500);
  
              circle.x += circle.dx;
              circle.y += circle.dy;
  
              if (circle.x + circle.size >= 500) {
                  circle.x = 500 - circle.size
              }
              if (circle.x - circle.size <= 0) {
                  circle.x = circle.size
              }
  
              if (circle.y + circle.size >= 500) {
                  circle.y = 500 - circle.size
              }
  
              if (circle.y - circle.size <= 0) {
                  circle.y = circle.size
              }
              }
              function ballInAHole() : void {
                if ((hole.x - circle.x) ** 2 + (hole.y - circle.y) ** 2 <= 450) {
                    time = Math.round((Date.now() - startTime) / 1000);
                    shouldRun = false;
                    alert(`You win !!! Your time: ${time} seconds`);
                    this.start();
                }
              }
              drawHole();
              drawCircle();
              requestAnimationFrame(animate);
              ballInAHole()
          }

      animate();
  }
}
