import { atom, useRecoilValue } from "recoil";

export const sidebarState = atom({
  key: "sidebar",
  default: {
    open: 0,
  },
});
