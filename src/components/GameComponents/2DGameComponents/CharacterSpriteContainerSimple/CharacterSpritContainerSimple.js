import React, { useState } from "react";
import CharacterSprite from "../CharacterSprite/CharacterSprite";

const spritObject = {
  name: "Blue Knight",
  spriteDetail: {
    spritImageUrl:
      "/gameAssets/2dAssets/tinySwordsAssets/Factions/Knights/Troops/Warrior/Blue/Warrior_Blue.png",
    spritImageWidth: 1152,
    spritImageHeight: 1536,
    spritWidthDivide: 6,
    spritHeightDivide: 8,
    frameSpeed: 5,
    spriteMap: [
      {
        id: "idle",
        actionName: "idle",
        spritAnimationPosition: 0,
      },
      { id: "run", actionName: "run", spritAnimationPosition: 1 },
      {
        id: "swordAttack1",
        actionName: "sword attack 1",
        spritAnimationPosition: 2,
      },
      {
        id: "swordAttack2",
        actionName: "sword attack 2",
        spritAnimationPosition: 3,
      },
      {
        id: "swordAttack3",
        actionName: "sword attack 3",
        spritAnimationPosition: 4,
      },
      {
        id: "swordAttack4",
        actionName: "sword attack 4",
        spritAnimationPosition: 5,
      },
      {
        id: "swordAttack5",
        actionName: "sword attack 5",
        spritAnimationPosition: 6,
      },
      {
        id: "swordAttack6",
        actionName: "sword attack 6",
        spritAnimationPosition: 7,
      },
    ],
  },
};

function CharacterSpritContainerSimple({}) {
  const [currentSpritAction, setCurrentSpritAction] = useState(
    spritObject?.spriteDetail?.spriteMap[0],
  );

  //   Onchange Select Sprite Action
  function selectOnChangeHandler(selectedValue) {
    setCurrentSpritAction(() => {
      return spritObject?.spriteDetail?.spriteMap?.filter(
        (item) => item.id === selectedValue,
      )[0];
    });
  }

  return (
    <div className="mx-auto flex max-w-sm flex-col items-center space-y-4 rounded-lg bg-black p-6 shadow-lg">
      <div className="rounded-md bg-white">
        <CharacterSprite
          {...spritObject?.spriteDetail}
          spritAnimationPosition={currentSpritAction?.spritAnimationPosition}
        />
      </div>
      <div className="text-center text-white">
        <h2 className="text-xl font-medium">{spritObject?.name}</h2>
      </div>
      <div className="flex w-full flex-col items-center gap-y-4">
        <select
          value={currentSpritAction?.id}
          onChange={(e) => selectOnChangeHandler(e.target.value)}
          className="w-full rounded-lg bg-black p-2 capitalize text-white ring-[1.5px] ring-white/30 focus:outline-none focus:ring-2 focus:ring-white"
        >
          {spritObject?.spriteDetail?.spriteMap?.map((item, index) => (
            <option
              key={index}
              value={item?.id}
              className="bg-black capitalize text-white"
            >
              {item?.actionName}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CharacterSpritContainerSimple;
