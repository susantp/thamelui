import React, { useState } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useRecoilValue } from "recoil";
import { sidebarState } from "../store/atoms";

export default function Navbar() {
  const [displayProfile, setDisplayProfile] = useState(false);
  const onDisplay = () => {
    setDisplayProfile(!display);
    alert("hello");
  };
  const hideDisplay = () => {
    setDisplay(false);
  };
  const { open } = useRecoilValue(sidebarState);
  // const contentMargin = open
  //   ? "flex flex-row basis-1/2 gap-x-8 items-center text-sm cursor-pointer"
  //   : "flex flex-row basis-1/2 gap-x-8 items-center text-sm cursor-pointer";
  return (
    <>
    <nav className="flex flex-row justify-between p-4 h-20  sticky top-0  bg-white dark:bg-black mb-4">
      <div className=" flex justify-between gap-x-8 items-center text-sm cursor-pointer">
        <div>
          <MenuOutlinedIcon style={{ fontSize: 40 }} />
        </div>

        <div>
          {/* <SearchSharpIcon className="w-5 h-5 absolute  ml-3 mt-4 pointer-events-none dark:text-white " /> */}
          <input
            type="text"
            name="search"
            placeholder="Search or type keyword"
            autoComplete="off"
            aria-label="Search..."
            className="w-full pr-3 pl-10 py-4 font-normal rounded-3xl bg-[#f8f8fa] text-[#afafb0]  dark:bg-black placeholder-[#b2b2b4] "
          />
        </div>
      </div>

      <div
        className={`flex flex-row gap-x-8 items-center text-sm cursor-pointer`}
      >
        <div>
          <LightModeOutlinedIcon style={{ fontSize: 30 }} />
        </div>

        <div>
          <img className="w-8" src="./notification.png" alt="" />
        </div>

        <div>
          <span>
            <img
              onClick={onDisplay}
              className="w-12"
              src="./profileimage.png"
              alt=""
            />
          </span>
        </div>
        <div>
          <SettingsOutlinedIcon style={{ fontSize: 30 }} />
        </div>
      </div>
    </nav>

    {/* {
      displayProfile && return (

      ) */}
    }

</>

  );
}
