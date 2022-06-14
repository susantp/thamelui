import React, { useState } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useRecoilValue } from "recoil";
import { useRecoilState } from "recoil";
import { sidebarState } from "../store/atoms";
import NotificationDropdown from "../components/dashboard/NotificationDropdown";
import ProfileDropdown from "../components/dashboard/ProfileDropdown";

export default function Navbar() {
  const [{ open }, setSidebar] = useRecoilState(sidebarState);
  const [displayProfile, setDisplayProfile] = useState(false);
  const [displayNotification, setDisplayNotification] = useState(false);
  const onDisplay = () => {
    setDisplayProfile(!displayProfile);
  };

  const onDisplayNotification = () => {
    setDisplayNotification(!displayNotification);
  };

  const hideDisplay = () => {
    setDisplayProfile(false);
    setDisplayNotification(false);
  };

  const handleClick = () => {
    setSidebar({ open: !open });
  };


  return (
    <>
      <nav className="flex flex-row justify-between p-4 h-20  sticky top-0  bg-white dark:bg-black mb-4">
        <div className=" flex justify-between gap-x-8 items-center text-sm cursor-pointer">
          <div>
            <MenuOutlinedIcon onClick={handleClick} style={{ fontSize: 40 }} />
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
            <img
              onClick={onDisplayNotification}
              className="w-8"
              src="./notification.png"
              alt=""
            />
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

        {/* for profile display */}
        {displayProfile ? <ProfileDropdown /> : null}

        {/* for notification display  */}

        {displayNotification ? <NotificationDropdown /> : null}
      </nav>
    </>
  );
}
