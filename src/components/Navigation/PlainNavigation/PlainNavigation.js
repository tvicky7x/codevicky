import staticRoutes from "@/utilities/staticRoutes";
import Link from "next/link";
import React from "react";

function PlainNavigation({
  navList = [{ link: "", para: "", target: "_self", disable: true }],
  navCTAButton = { link: "", para: "", target: "_self", disable: true },
  fixedNavbar = false,
}) {
  return (
    <nav
      className={`${
        fixedNavbar && "fixed top-0 w-full"
      } backdrop-blur-md flex items-center justify-between px-20 py-3.5 border-b border-slate-300 `}
    >
      <Link href={staticRoutes?.home} className="font-semibold text-2xl">
        CodeVicky
      </Link>
      <ul className="flex items-center capitalize gap-x-4">
        {navList?.map((item, index) => {
          return (
            <li key={index}>
              <Link
                href={staticRoutes[`${item?.link}`] || item?.link}
                target={item?.target}
                className={`font-medium ${
                  item?.disable && "pointer-events-none"
                }`}
              >
                {item?.para}
              </Link>
            </li>
          );
        })}
      </ul>
      {navCTAButton && (
        <Link
          target={navCTAButton?.target}
          className={`bg-black text-white rounded-md px-5 py-2 capitalize ${
            navCTAButton?.disable && "pointer-events-none"
          }`}
          href={staticRoutes[`${navCTAButton?.link}`] || navCTAButton?.link}
        >
          {navCTAButton?.para}
        </Link>
      )}
    </nav>
  );
}

export default PlainNavigation;
