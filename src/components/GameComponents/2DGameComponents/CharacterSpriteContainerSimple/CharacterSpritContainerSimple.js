import React, { useEffect, useState } from "react";
import CharacterSprite from "../CharacterSprite/CharacterSprite";

// const spriteObject = {
//   name: "Knight",
//   spriteDetail: {
//     spriteImageBaseUrl:
//       "/gameAssets/2dAssets/tinySwordsAssets/Factions/Knights/Troops/Warrior",
//     spriteImageWidth: 1152,
//     spriteImageHeight: 1536,
//     maxSpriteImageWidthDivide: 6,
//     spriteWidthDivide: 6,
//     spriteHeightDivide: 8,
//     frameSpeed: 5,
//     spriteVariation: [
//       { variationName: "Blue", spriteImageUrl: "/Blue/Warrior_Blue.png" },
//       { variationName: "Red", spriteImageUrl: "/Red/Warrior_Red.png" },
//       {
//         variationName: "Purple",
//         spriteImageUrl: "/Purple/Warrior_Purple.png",
//       },
//       {
//         variationName: "Yellow",
//         spriteImageUrl: "/Yellow/Warrior_Yellow.png",
//       },
//     ],
//     spriteMap: [
//       {
//         actionName: "idle",
//         spriteAnimationPosition: 0,
//       },
//       { actionName: "run", spriteAnimationPosition: 1 },
//       {
//         actionName: "sword attack 1",
//         spriteAnimationPosition: 2,
//       },
//       {
//         actionName: "sword attack 2",
//         spriteAnimationPosition: 3,
//       },
//       {
//         actionName: "sword attack 3",
//         spriteAnimationPosition: 4,
//       },
//       {
//         actionName: "sword attack 4",
//         spriteAnimationPosition: 5,
//       },
//       {
//         actionName: "sword attack 5",
//         spriteAnimationPosition: 6,
//       },
//       {
//         actionName: "sword attack 6",
//         spriteAnimationPosition: 7,
//       },
//     ],
//   },
// };

function CharacterSpritContainerSimple({ spriteObject }) {
  const [currentActionPosition, setCurrentActionPosition] = useState(0);
  const [currentVariationPosition, setCurrentVariationPosition] = useState(0);

  //   Onchange Select Sprite Action
  function selectOnChangeHandler(selectedValue, key) {
    if (key === "actions") {
      console.log(selectedValue);
      setCurrentActionPosition(selectedValue);
    } else if (key === "variations") {
      setCurrentVariationPosition(selectedValue);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white">
        <CharacterSprite
          {...spriteObject?.spriteDetail}
          variationPosition={currentVariationPosition}
          actionPosition={currentActionPosition}
          testProp="bow"
        />
      </div>
      <div className="flex flex-col items-center gap-y-3">
        <div className="text-center text-black">
          <h2 className="text-2xl font-medium capitalize">
            {spriteObject?.name}
          </h2>
        </div>
        <div className="flex w-48 flex-col items-center gap-y-3">
          <select
            value={currentVariationPosition}
            onChange={(e) =>
              selectOnChangeHandler(e.target.value, "variations")
            }
            className="w-full rounded-md bg-slate-200 p-2 capitalize text-black focus:outline-none"
          >
            {spriteObject?.spriteDetail?.spriteVariation?.map((item, index) => (
              <option key={index} value={index} className="capitalize">
                {item?.variationName}
              </option>
            ))}
          </select>
          <select
            value={currentActionPosition}
            onChange={(e) => selectOnChangeHandler(e.target.value, "actions")}
            className="w-full rounded-md bg-slate-200 p-2 capitalize text-black focus:outline-none"
          >
            {spriteObject?.spriteDetail?.spriteMap?.map((item, index) => (
              <option key={index} value={index} className="capitalize">
                {item?.actionName}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default CharacterSpritContainerSimple;
