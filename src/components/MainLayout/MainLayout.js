import React from "react";

function MainLayout({
  children,
  outerClass,
  innerClass,
  outerStyle,
  innerStyle,
}) {
  return (
    <div style={outerStyle} className={`px-10 ${outerClass} `}>
      <div
        style={innerStyle}
        className={`mx-auto max-w-[82rem] ${innerClass} `}
      >
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
