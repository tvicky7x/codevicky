import PlainNavigation from "@/components/Navigation/PlainNavigation/PlainNavigation";
import getComponentText from "@/utilities/commonFunction";
import React from "react";

export default function Home() {
  const plainNavigationContent = getComponentText(
    "navigation.plainNavigation.home"
  );

  return (
    <>
      <PlainNavigation
        navList={plainNavigationContent?.navList}
        navCTAButton={plainNavigationContent?.navCTAButton}
        fixedNavbar={true}
      />
      <div className="h-screen flex items-center justify-center">
        <div>
          <h1 className="font-medium text-6xl">CodeVicky</h1>
        </div>
      </div>
    </>
  );
}
