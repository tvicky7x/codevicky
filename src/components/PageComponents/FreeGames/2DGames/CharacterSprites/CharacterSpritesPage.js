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
    <div className="grid h-screen grid-flow-row grid-rows-12">
      <div className="row-span-8 flex items-center justify-center">
        <CharacterSpritContainerSimple spriteObject={spriteObject} />
      </div>
      <div className="row-span-4">
        <CharacterSpriteScrollContainerSimple
          handleOnClickSpriteObject={handleOnClickSpriteObject}
          characterSpriteList={characterSpriteList}
        />
      </div>
    </div>
  );
}

export default CharacterSpritesPage;
