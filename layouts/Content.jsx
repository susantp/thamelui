import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";

import { sidebarState } from "../store/atoms";

export default function Content({ children }) {
  const { open } = useRecoilValue(sidebarState);
  const contentPadding = open
    ? " mr-8 md:ml-[17rem] xl:ml-[17rem]  pt-6 transition-all  duration-300 ease-in-out  "
    : "ml-28 mr-6 pt-6 transition-all  duration-300 ease-in-out ";

  return <div className={contentPadding}>{children}</div>;
}
