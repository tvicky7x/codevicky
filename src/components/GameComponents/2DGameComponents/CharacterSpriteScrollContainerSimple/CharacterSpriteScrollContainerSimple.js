import React from "react";
import CharacterSprite from "../CharacterSprite/CharacterSprite";

function CharacterSpriteScrollContainerSimple({
  characterSpriteList,
  handleOnClickSpriteObject,
}) {
  return (
    <div className="border-t border-slate-200 bg-slate-200 px-10 py-5">
      <div className="overflow-x-scroll py-5">
        <div className="flex items-center gap-x-5">
          {characterSpriteList?.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => handleOnClickSpriteObject(item)}
                className="shrink-0 rounded-md bg-white shadow-md"
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
    </div>
  );
}

export default CharacterSpriteScrollContainerSimple;
