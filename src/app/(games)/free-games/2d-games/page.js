import staticRoutes from "@/utilities/staticRoutes";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <Link href={staticRoutes?.characterSprites}>Character Sprites</Link>
    </div>
  );
}

export default page;
