import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";

import { sidebarState } from "../store/atoms";

export default function Content({ children }) {
  const { open } = useRecoilValue(sidebarState);
  // const contentPadding = open
  //   ? "container mx-auto ml-24 pt-32 "
  //   : "container ml-24 pt-32";

  return (

      <div className="2xl:container xl:container sm:pl-24 sm:pr-2 mx-auto mx-auto pt-32">{children}</div>

  );
}
