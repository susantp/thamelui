import React, { useState } from "react";
import Link from "next/link";
import GroupAddIcon from "@mui/icons-material/GroupAddOutlined";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import HelpIcon from "@mui/icons-material/HelpOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircleOutlined";
import CloseIcon from "@mui/icons-material/Close";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { useRecoilValue } from "recoil";
import { sidebarState } from "../store/atoms";

export default function Navbar() {
  const [display, setDisplay] = useState(false);
  const onDisplay = () => {
    setDisplay(!display);
  };
  const hideDisplay = () => {
    setDisplay(false);
  };
  const { open } = useRecoilValue(sidebarState);
  // const contentMargin = open
  //   ? "flex flex-row basis-1/2 gap-x-8 items-center text-sm cursor-pointer"
  //   : "flex flex-row basis-1/2 gap-x-8 items-center text-sm cursor-pointer";
  return (
    <nav className="flex flex-row justify-between p-4 h-20 drop-shadow-md sticky top-0  bg-white dark:bg-black mb-4">
      <div className="gap-x-8 items-center text-sm cursor-pointer">
        <SearchSharpIcon className="w-5 h-5 absolute ml-3 mt-4 pointer-events-none dark:text-white " />
        <input
          type="text"
          name="search"
          placeholder="Search or type keyword"
          autoComplete="off"
          aria-label="Search..."
          className="w-full pr-3 pl-10 py-4 font-normal dark:bg-black placeholder-[#b2b2b4] text-[#B2b2b4]"
        />
      </div>

      <div
        className={`flex flex-row gap-x-8 items-center text-sm cursor-pointer`}
      >
        <div className="flex justify-evenly align-middle bg-[#e4f2fd] p-2 rounded-full w-24">
          <span className="bg-white rounded-full">
            <LightModeOutlinedIcon />
          </span>
          <span>
            <NightlightOutlinedIcon />
          </span>
        </div>

        <div>
          {/* <NotificationsIcon className="cursor-pointer" onClick={onDisplay} /> */}
          <img className="w-8" src="./notification.png" alt="" />
        </div>
        <div>
          {/* <p className="font-bold text-[16px]">Zara Larsson</p> */}
          <img src="./profileimage.png" alt="" />
        </div>
      </div>
    </nav>
  );
}
