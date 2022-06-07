import React, { useState } from "react";
import Link from "next/link";
import GroupAddIcon from "@mui/icons-material/GroupAddOutlined";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import HelpIcon from "@mui/icons-material/HelpOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircleOutlined";
import CloseIcon from "@mui/icons-material/Close";
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
    ? "flex flex-row justify-center gap-x-8 basis-2/4 items-center text-sm cursor-pointer"
    : "flex flex-row justify-end gap-x-8 basis-2/4 items-center text-sm cursor-pointer";
  return (
    <>
      <nav className="flex flex-row justify-evenly flex-wrap p-4 w-screen h-16 bg-neutral-200 fixed top-0">
        <div className="basis-1/3 flex flex-row  justify-start flex-wrap  gap-y-3 items-center">
          <input
            type="text"
            name="search"
            placeholder="Search..."
            autoComplete="off"
            aria-label="Search..."
            className="w-full pr-3 pl-10 py-1 font-normal placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
          />
        </div>

        {/* style={{"align-items":"center"}} */}
        <div className={contentMargin}>
          <div className=" font-normal ">This is test organization</div>
          <div className="font-normal ">New IT Venture</div>
          <div>
            <GroupAddIcon className="cursor-pointer" onClick={onDisplay} />
          </div>
          <div>
            <NotificationsIcon className="cursor-pointer" onClick={onDisplay} />
          </div>
          <div>
            <SettingsIcon className="cursor-pointer" onClick={onDisplay} />
          </div>
          <div>
            <HelpIcon className="cursor-pointer" onClick={onDisplay} />
          </div>
          <div>
            <AccountCircleIcon className="cursor-pointer" onClick={onDisplay} />
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
