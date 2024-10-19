import getComponentText from "@/utilities/commonFunction";
import React from "react";

export default function Home() {
  const plainNavigationContent = getComponentText(
    "navigation.plainNavigation.home",
  );

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div>
          <h1 className="text-6xl font-medium">CodeVicky</h1>
        </div>
      </div>
    </>
  );
}
