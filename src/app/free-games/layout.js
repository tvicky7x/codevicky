import PlainNavigation from "@/components/Navigation/PlainNavigation/PlainNavigation";
import getComponentText from "@/utilities/commonFunction";
import React from "react";

function layout({ children }) {
  const plainNavigationContent = getComponentText(
    "navigation.plainNavigation.game"
  );

  return (
    <div>
      <PlainNavigation
        navList={plainNavigationContent?.navList}
        navCTAButton={plainNavigationContent?.navCTAButton}
      />
      {children}
    </div>
  );
}

export default layout;
