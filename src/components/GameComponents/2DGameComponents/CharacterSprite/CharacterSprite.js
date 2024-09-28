"use client";
import React, { useEffect } from "react";

function CharacterSprite({
  spritImageUrl = "",
  spritImageWidth = 0,
  spritImageHeight = 0,
  spritWidthDivide = 0,
  spritHeightDivide = 0,
  spritAnimationPosition = 0,
  frameSpeed = 6,
}) {
  // sprit Sizing Variable
  const individualSpritWidth = spritImageWidth / spritWidthDivide;
  const individualSpritHeight = spritImageHeight / spritHeightDivide;

  // Sprit maker functions
  function characterSpriteMaker() {
    const canvas = document.getElementById("character-sprite-maker");
    canvas.width = individualSpritWidth;
    canvas.height = individualSpritHeight;
    /**@type {CanvasRenderingContext2D} */
    const ctx = canvas.getContext("2d");

    // sprit Image
    const characterSpritImage = new Image();
    characterSpritImage.src = spritImageUrl;

    // Incrementing Variable
    let frameX = 0;
    let frameIncrementSpeed = 0;

    function animate() {
      ctx.clearRect(0, 0, individualSpritWidth, individualSpritHeight);
      // ctx.drawImage(image,sx,sy,sw,sh,dx,dy,dw,dh);

      let position =
        Math.floor(frameIncrementSpeed / frameSpeed) % spritWidthDivide;
      frameX = individualSpritWidth * position;
      ctx.drawImage(
        characterSpritImage,
        frameX,
        spritAnimationPosition * individualSpritHeight,
        individualSpritWidth,
        individualSpritHeight,
        0,
        0,
        individualSpritWidth,
        individualSpritHeight,
      );
      frameIncrementSpeed++;
      requestAnimationFrame(animate);
    }
    animate();
  }

  useEffect(() => {
    characterSpriteMaker();
  }, [
    spritImageUrl,
    spritImageWidth,
    spritImageHeight,
    spritWidthDivide,
    spritHeightDivide,
    spritAnimationPosition,
    frameSpeed,
  ]);

  return (
    <canvas
      style={{ width: individualSpritWidth, height: individualSpritHeight }}
      id="character-sprite-maker"
    ></canvas>
  );
}

export default CharacterSprite;
