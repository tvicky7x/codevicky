"use client";
import CharacterSpritContainerSimple from "@/components/GameComponents/2DGameComponents/CharacterSpriteContainerSimple/CharacterSpritContainerSimple";
import CharacterSpriteScrollContainerSimple from "@/components/GameComponents/2DGameComponents/CharacterSpriteScrollContainerSimple/CharacterSpriteScrollContainerSimple";
import characterSpriteList from "@/utilities/characterSpriteList.json";
import React, { useState } from "react";

function CharacterSpritesPage() {
  const [spriteObject, setSpriteObject] = useState(characterSpriteList[0]);

  // Handle Onclick change sprite function
  function handleOnClickSpriteObject(spriteObject) {
    setSpriteObject(spriteObject);
  }

  return (
    <div className="flex h-screen flex-col">
      <div className="flex h-full items-center justify-center">
        <CharacterSpritContainerSimple spriteObject={spriteObject} />
      </div>
      <div className="">
        <CharacterSpriteScrollContainerSimple
          handleOnClickSpriteObject={handleOnClickSpriteObject}
          characterSpriteList={characterSpriteList}
        />
      </div>
    </div>
  );
}

export default CharacterSpritesPage;
