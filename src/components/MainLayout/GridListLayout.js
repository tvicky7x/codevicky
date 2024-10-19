import React from "react";
import MainLayout from "./MainLayout";
import Link from "next/link";

function GridListLayout({ gridList }) {
  return (
    <MainLayout>
      <div className={`grid grid-flow-col grid-cols-5`}>
        {gridList?.map((item, index) => {
          return (
            <Link href={"/"} key={index}>
              {item?.head}
            </Link>
          );
        })}
      </div>
    </MainLayout>
  );
}

export default GridListLayout;
