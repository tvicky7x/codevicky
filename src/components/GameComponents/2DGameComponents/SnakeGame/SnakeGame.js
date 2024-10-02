"use client";
import React, { useEffect, useRef } from "react";

const up = "UP";
const down = "DOWN";
const left = "LEFT";
const right = "RIGHT";
class SnakeGamePlay {
  constructor({ tileSize, rows, columns, position }) {
    this.tileSize = tileSize;
    this.rows = rows;
    this.columns = columns;
    this.canvasWidth = this.tileSize * this.columns;
    this.canvasHeight = this.tileSize * this.rows;
    this.keys = [];
    this.keyEventListener();
    this.position = position ?? { x: 0, y: 0 };
    this.destinationPosition = { x: this.position.x, y: this.position.y };
    this.distanceToTravel = { x: 0, y: 0 };
    this.speed = 2;
  }
  /**@type {CanvasRenderingContext2D} */
  buildGrid(ctx) {
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.columns; col++) {
        ctx.strokeRect(
          col * this.tileSize,
          row * this.tileSize,
          this.tileSize,
          this.tileSize,
        );
      }
    }
  }
  buildSnake(ctx) {
    ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    ctx.fillRect(
      this.position.x,
      this.position.y,
      this.tileSize,
      this.tileSize,
    );
  }
  keyEventListener() {
    window.addEventListener("keydown", (e) => {
      const keyValue = e.key;
      if (keyValue === "ArrowUp" || keyValue.toLowerCase() === "w") {
        this.keyPressed(up);
      } else if (keyValue === "ArrowDown" || keyValue.toLowerCase() === "s") {
        this.keyPressed(down);
      } else if (keyValue === "ArrowLeft" || keyValue.toLowerCase() === "a") {
        this.keyPressed(left);
      } else if (keyValue === "ArrowRight" || keyValue.toLowerCase() === "d") {
        this.keyPressed(right);
      }
    });
    window.addEventListener("keyup", (e) => {
      const keyValue = e.key;
      if (keyValue === "ArrowUp" || keyValue.toLowerCase() === "w") {
        this.keyReleased(up);
      } else if (keyValue === "ArrowDown" || keyValue.toLowerCase() === "s") {
        this.keyReleased(down);
      } else if (keyValue === "ArrowLeft" || keyValue.toLowerCase() === "a") {
        this.keyReleased(left);
      } else if (keyValue === "ArrowRight" || keyValue.toLowerCase() === "d") {
        this.keyReleased(right);
      }
    });
  }
  keyPressed(key) {
    if (this.keys.indexOf(key) === -1) {
      this.keys.unshift(key);
    }
  }
  keyReleased(key) {
    const index = this.keys.indexOf(key);
    if (index === -1) {
      return;
    }
    this.keys.splice(index, 1);
  }
  lastKey() {
    return this.keys[0];
  }
  update() {
    let nextX = this.destinationPosition.x;
    let nextY = this.destinationPosition.y;

    const distance = this.moveTowards(this.destinationPosition, this.speed);
    const arrived = distance <= this.speed;

    if (arrived) {
      if (this.lastKey() === up) {
        nextY -= this.tileSize;
      } else if (this.lastKey() === down) {
        nextY += this.tileSize;
      } else if (this.lastKey() === left) {
        nextX -= this.tileSize;
      } else if (this.lastKey() === right) {
        nextX += this.tileSize;
      }

      // Border checking conditions
      if (this.position.x >= this.canvasWidth) {
        this.position.x = 0;
        this.destinationPosition.x = 0;
      } else if (this.position.x < 0) {
        this.position.x = this.canvasWidth - this.tileSize;
        this.destinationPosition.x = this.canvasWidth - this.tileSize;
      } else if (this.position.y >= this.canvasHeight) {
        this.position.y = 0;
        this.destinationPosition.y = 0;
      } else if (this.position.y < 0) {
        this.position.y = this.canvasHeight - this.tileSize;
        this.destinationPosition.y = this.canvasHeight - this.tileSize;
      } else {
        this.destinationPosition.x = nextX;
        this.destinationPosition.y = nextY;
      }
    }
  }
  moveTowards(destinationPosition, speed) {
    this.distanceToTravel.x = destinationPosition.x - this.position.x;
    this.distanceToTravel.y = destinationPosition.y - this.position.y;
    let distance = Math.hypot(this.distanceToTravel.x, this.distanceToTravel.y);

    if (distance <= speed) {
      // if close enough, snap to position
      this.position.x = destinationPosition.x;
      this.position.y = destinationPosition.y;
    } else {
      // else take a step towards destination
      const stepX = this.distanceToTravel.x / distance;
      const stepY = this.distanceToTravel.y / distance;
      this.position.x += stepX * speed;
      this.position.y += stepY * speed;

      // remaining distance
      this.distanceToTravel.x = destinationPosition.x - this.position.x;
      this.distanceToTravel.y = destinationPosition.y - this.position.y;
      distance = Math.hypot(this.distanceToTravel.x, this.distanceToTravel.y);
    }
    return distance;
  }
}

// React Component ============= >>
function SnakeGame() {
  const snakeRef = useRef(null);

  // animate snake function
  function animateSnakeGame() {
    const canvas = snakeRef.current;
    // variables/
    const snakeGame = new SnakeGamePlay({
      tileSize: 32,
      columns: 15,
      rows: 20,
    });
    canvas.width = snakeGame.canvasWidth;
    canvas.height = snakeGame.canvasHeight;
    /**@type {CanvasRenderingContext2D} */
    const ctx = canvas.getContext("2d");

    // building snake
    snakeGame.position = {
      x: 1 * snakeGame.tileSize,
      y: 1 * snakeGame.tileSize,
    };

    function animate() {
      requestAnimationFrame(animate);
      snakeGame.update();
      snakeGame.buildSnake(ctx);
      snakeGame.buildGrid(ctx);
    }
    requestAnimationFrame(animate);
  }

  useEffect(() => {
    if (snakeRef.current) {
      animateSnakeGame();
    }
  }, []);

  return (
    <div>
      <canvas id="snake-game" className="" ref={snakeRef} />
    </div>
  );
}

export default SnakeGame;
