"use client";
import CharacterSpritContainerSimple from "@/components/GameComponents/2DGameComponents/CharacterSpriteContainerSimple/CharacterSpritContainerSimple";
import React from "react";

function CharacterSpritesPage() {
  return (
    <div className="grid h-screen grid-flow-row grid-rows-12">
      <div className="row-span-8 flex items-center justify-center">
        <CharacterSpritContainerSimple />
      </div>
      <div className="row-span-4">Scroll</div>
    </div>
  );
}

export default CharacterSpritesPage;
