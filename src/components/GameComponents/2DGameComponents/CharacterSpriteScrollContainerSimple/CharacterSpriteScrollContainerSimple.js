import React from "react";
import CharacterSprite from "../CharacterSprite/CharacterSprite";

function CharacterSpriteScrollContainerSimple({
  characterSpriteList,
  handleOnClickSpriteObject,
}) {
  return (
    <div className="flex h-full flex-col justify-center border-t border-slate-200 bg-slate-200 px-10">
      <div className="flex items-center gap-x-5">
        {characterSpriteList?.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => handleOnClickSpriteObject(item)}
              className="rounded-md bg-white shadow-md"
            >
              <CharacterSprite
                {...item?.spriteDetail}
                spriteAnimationPosition={0}
                spriteWidthDivide={
                  item?.spriteDetail?.spriteMap[0]?.spriteWidthDivide
                }
                spriteImageUrl={
                  item?.spriteDetail?.spriteVariation[0]?.spriteImageUrl
                }
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CharacterSpriteScrollContainerSimple;
