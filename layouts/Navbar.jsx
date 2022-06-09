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
  const contentMargin = open
    ? "flex flex-row justify-end gap-x-8 basis-2/4 items-center text-sm cursor-pointer"
    : "flex flex-row justify-end gap-x-8 basis-2/4 items-center text-sm cursor-pointer";
  return (
    <>
      <nav className="flex flex-row justify-between flex-wrap p-4 w-full h-20 bg-white fixed my-6 top-0 drop-shadow-md container ">
        <div className="basis-1/3 flex flex-row  justify-start flex-wrap">
          <SearchSharpIcon className="w-5 h-5 absolute ml-3 mt-4 pointer-events-none" />
          <input
            type="text"
            name="search"
            placeholder="Search or type keyword"
            autoComplete="off"
            aria-label="Search..."
            className="w-full pr-3 pl-10 py-1 font-normal placeholder-[#b2b2b4] text-[#B2b2b4]"
          />
        </div>

        <div className={contentMargin}>
          <div className=" flex justify-evenly align-middle bg-[#e4f2fd] p-2 rounded-full w-24">
            <span className="bg-white rounded-full">
              <LightModeOutlinedIcon />
            </span>
            <span>
              <NightlightOutlinedIcon />
            </span>
          </div>

          <div>
            <NotificationsIcon className="cursor-pointer" onClick={onDisplay} />
          </div>
          <div>
            <p className="font-bold text-[16px]">Zara Larsson</p>
          </div>
        </div>
      </nav>
      <div
        style={{ display: display ? "block" : "none" }}
        className="fixed right-0 top-16 w-96 h-screen  bg-white p-6 text-black shadow-2xl "
      >
        <span>
          <CloseIcon
            className="cursor-pointer absolute right-4"
            onClick={hideDisplay}
          />
        </span>
        <div className="flex flex-col justify-center gap-y-5 mt-10">
          <AccountCircleIcon />
          <span>Developer NITV</span>
        </div>
      </div>
    </>
  );
}
