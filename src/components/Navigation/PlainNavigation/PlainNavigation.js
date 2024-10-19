import MainLayout from "@/components/MainLayout/MainLayout";
import getComponentText from "@/utilities/commonFunction";
import staticRoutes from "@/utilities/staticRoutes";
import Link from "next/link";
import React from "react";

function PlainNavigation({ fixedNavbar = false }) {
  const content = getComponentText("navigation.plainNavigation");
  return (
    <MainLayout outerClass={"border-b border-slate-300 bg-white"}>
      <nav
        className={`${
          fixedNavbar && "fixed top-0 w-full"
        } flex items-center justify-between py-3.5 backdrop-blur-md`}
      >
        <Link href={staticRoutes?.home} className="text-2xl font-semibold">
          CodeVicky
        </Link>
        <ul className="flex items-center gap-x-4 capitalize">
          {content?.navList?.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  href={staticRoutes[`${item?.link}`] || item?.link}
                  target={item?.target}
                  className={`text-lg font-medium ${
                    item?.disable && "pointer-events-none"
                  }`}
                >
                  {item?.para}
                </Link>
              </li>
            );
          })}
        </ul>
        {content?.navCTAButton && (
          <Link
            target={content?.navCTAButton?.target}
            className={`hidden rounded-md bg-black px-5 py-2 capitalize text-white md:block ${
              content?.navCTAButton?.disable && "pointer-events-none"
            }`}
            href={
              staticRoutes[`${content?.navCTAButton?.link}`] ||
              content?.navCTAButton?.link
            }
          >
            {content?.navCTAButton?.para}
          </Link>
        )}
      </nav>
    </MainLayout>
  );
}

export default PlainNavigation;
