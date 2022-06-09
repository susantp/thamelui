import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";

import { sidebarState } from "../store/atoms";

export default function Content({ children }) {
  const { open } = useRecoilValue(sidebarState);
  const contentPadding = open
    ? "container ml-64 pt-32 "
    : "container ml-24 pt-32";

  return (
    <>
      <div className={contentPadding}>{children}</div>
    </>
  );
}
