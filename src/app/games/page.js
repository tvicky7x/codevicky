import GridListLayout from "@/components/MainLayout/GridListLayout";
import getComponentText from "@/utilities/commonFunction";
import React from "react";

function page() {
  const content = getComponentText("games");
  return (
    <div>
      <GridListLayout gridList={content?.gridList} />
    </div>
  );
}

export default page;
