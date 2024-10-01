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
        fixedNavbar && "sticky top-0 w-full"
      } flex items-center justify-between border-b border-slate-300 px-10 py-3.5 backdrop-blur-md`}
    >
      <Link href={staticRoutes?.home} className="text-2xl font-semibold">
        CodeVicky
      </Link>
      <ul className="flex items-center gap-x-4 capitalize">
        {navList?.map((item, index) => {
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
      {navCTAButton && (
        <Link
          target={navCTAButton?.target}
          className={`hidden rounded-md bg-black px-5 py-2 capitalize text-white md:block ${
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
