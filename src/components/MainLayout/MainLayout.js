import React from "react";

function MainLayout({ children }) {
  return (
    <div className="px-10">
      <div>{children}</div>
    </div>
  );
}

export default MainLayout;
