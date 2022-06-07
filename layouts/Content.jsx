import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";

import { sidebarState } from "../store/atoms";

export default function Content({ children }) {
  const { open } = useRecoilValue(sidebarState);
  const contentPadding = open
    ? "container ml-64 pt-16 mr-64"
    : "container ml-24 pt-16";

  return (
    <>
      <div className={contentPadding}>{children}</div>
    </>
  );
}
