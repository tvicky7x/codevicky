"use client";
import React, { useEffect } from "react";

function CharacterSprite({ canvasWidth = 450, canvasHeight = 450 }) {
  // Sprit maker functions
  function characterSpriteMaker() {
    const canvas = document.getElementById("character-sprite-maker");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    /**@type {CanvasRenderingContext2D} */
    const ctx = canvas.getContext("2d");
    let i = 0;

    function animate() {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.fillRect(i, 50, 100, 100);
      requestAnimationFrame(animate);
      i = i + 1 > canvasWidth ? 0 : i + 1;
    }

    animate();
  }

  useEffect(() => {
    characterSpriteMaker();
  }, []);

  return (
    <canvas
      style={{ width: canvasWidth, height: canvasHeight }}
      className="border-2"
      id="character-sprite-maker"
    ></canvas>
  );
}

export default CharacterSprite;
