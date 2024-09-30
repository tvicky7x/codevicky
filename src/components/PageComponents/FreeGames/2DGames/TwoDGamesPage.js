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
        className="flex h-[300px] items-center justify-center bg-cover bg-center md:h-[500px]"
      >
        <h1 className="text-shadow-md text-center text-4xl font-bold uppercase text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          {content.heading}
        </h1>
      </div>
      <div className="mt-10 px-4 md:mt-14 md:px-10">
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content["2d-gameList"].map((item, index) => {
            return (
              <li key={index}>
                <Link href={staticRoutes[`${item?.link}`]}>
                  <div className="flex flex-col items-center gap-x-3 rounded-md border-2 border-black p-3 shadow-lg sm:flex-row">
                    <Image
                      width={100}
                      height={100}
                      loading="lazy"
                      src={item?.imageUrl}
                      className="aspect-auto rounded-md"
                    />
                    <div className="mt-4 text-center sm:mt-0 sm:pe-5 sm:text-left">
                      <h3 className="text-lg font-medium capitalize md:text-xl lg:text-2xl">
                        {item?.head}
                      </h3>
                      <p className="mt-2 text-sm text-slate-500 md:text-base">
                        {item?.para}
                      </p>
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
