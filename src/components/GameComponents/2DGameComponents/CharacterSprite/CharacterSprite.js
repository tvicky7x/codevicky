"use client";
import React, { useEffect, useRef } from "react";

function CharacterSprite({
  spriteImageUrl = "",
  spriteImageBaseUrl = "",
  spriteImageWidth = 0,
  spriteImageHeight = 0,
  maxSpriteImageWidthDivide = 0,
  // spriteWidthDivide = 0,
  spriteHeightDivide = 0,
  spriteAnimationPosition = 0,
  frameSpeed = 6,
  spriteMap = [],
  spriteVariation = [],
  actionPosition = 0,
  variationPosition = 0,
  testProp = "",
}) {
  // sprite Sizing Variable
  const individualSpriteWidth = spriteImageWidth / maxSpriteImageWidthDivide;
  const individualSpriteHeight = spriteImageHeight / spriteHeightDivide;

  // ref
  const canvasRef = useRef();

  // sprite maker functions
  function characterSpriteMaker() {
    const canvas = canvasRef.current;
    canvas.width = individualSpriteWidth;
    canvas.height = individualSpriteHeight;
    /**@type {CanvasRenderingContext2D} */
    const ctx = canvas.getContext("2d");

    // sprite Image
    const characterSpriteImage = new Image();
    characterSpriteImage.src =
      spriteImageBaseUrl +
      spriteVariation[`${variationPosition}`].spriteImageUrl;

    // Ensure image is loaded before drawing
    characterSpriteImage.onload = function () {
      // Incrementing Variable
      let frameX = 0;
      let frameIncrementSpeed = 0;

      function animate() {
        ctx.clearRect(0, 0, individualSpriteWidth, individualSpriteHeight);

        let position =
          Math.floor(frameIncrementSpeed / frameSpeed) %
          spriteMap[`${actionPosition}`].spriteWidthDivide;
        frameX = individualSpriteWidth * position;
        ctx.drawImage(
          characterSpriteImage,
          frameX,
          actionPosition * individualSpriteHeight,
          individualSpriteWidth,
          individualSpriteHeight,
          0,
          0,
          individualSpriteWidth,
          individualSpriteHeight,
        );
        frameIncrementSpeed++;
        requestAnimationFrame(animate);
      }
      animate(); // Start animation only after the image is loaded
    };

    // Handle image loading errors
    characterSpriteImage.onerror = function () {
      console.error("Failed to load sprite image:", characterSpriteImage.src);
    };
  }

  useEffect(() => {
    if (canvasRef.current) {
      characterSpriteMaker();
    }
  }, [
    spriteImageUrl,
    spriteImageBaseUrl,
    spriteImageWidth,
    spriteImageHeight,
    maxSpriteImageWidthDivide,
    spriteMap,
    spriteVariation,
    actionPosition,
    variationPosition,
    spriteHeightDivide,
    spriteAnimationPosition,
    frameSpeed,
  ]);

  return (
    <canvas
      style={{ width: individualSpriteWidth, height: individualSpriteHeight }}
      id="character-sprite-maker"
      ref={canvasRef}
    ></canvas>
  );
}

export default CharacterSprite;
