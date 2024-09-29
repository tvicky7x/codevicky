import getComponentText from "@/utilities/commonFunction";
import staticRoutes from "@/utilities/staticRoutes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function TwoDGamesPage() {
  const content = getComponentText("free-games.2d-games");
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url(/gameAssets/2dAssets/HeadingBackgroundAssets/bg5.jpg)",
        }}
        className="flex h-[500px] items-center justify-center bg-cover bg-center"
      >
        <h1 className="text-shadow-md text-center text-8xl font-bold uppercase text-white">
          {content.heading}
        </h1>
      </div>
      <div className="mt-14 px-10">
        <ul className="grid grid-flow-col grid-cols-3">
          {content["2d-gameList"].map((item, index) => {
            return (
              <li key={index}>
                <Link href={staticRoutes[`${item?.link}`]}>
                  <div className="flex items-center gap-x-3 rounded-md border-2 border-black p-3 shadow-lg">
                    <Image
                      width={100}
                      height={100}
                      loading="lazy"
                      src={item?.imageUrl}
                      className="aspect-auto rounded-md"
                    />
                    <div className="pe-5">
                      <h3 className="text-2xl font-medium capitalize">
                        {item?.head}
                      </h3>
                      <p className="mt-2 text-slate-500">{item?.para}</p>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TwoDGamesPage;
