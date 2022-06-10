import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";

import { sidebarState } from "../store/atoms";

export default function Content({ children }) {
  const { open } = useRecoilValue(sidebarState);
  const contentPadding = open
    ? "container ml-[17rem] pt-6 "
    : "container ml-48 pt-6";

  return (
    <div className={contentPadding}>
        {children}
    </div>
  );
}
