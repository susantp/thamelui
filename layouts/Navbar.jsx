import React, { useState } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { useRecoilValue } from "recoil";
import { sidebarState } from "../store/atoms";

export default function Navbar() {
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
        {displayProfile ? (
          <div className="fixed right-8 p-6 top-28 bg-white cursor-pointer w-[270px] drop-shadow-lg">
            <p className="font-bold">Zara Larsson</p>
            <p className="text-[12px] pt-1 pb-1">Senior Admin</p>
            <hr />
            <div>
              <div className="flex justify-start gap-3 p-2 hover:bg-blue-500 hover:text-white  ">
                <div>
                  <PersonOutlineOutlinedIcon />
                </div>
                <div>
                  <p className="pt-1 text-[16px]">Account</p>
                </div>
              </div>
            </div>

            <div className="flex justify-start gap-3 p-2 hover:bg-blue-500  hover:text-white">
              <div>
                <ExitToAppOutlinedIcon />
              </div>
              <div>
                <p className="pt-1 text-[16px] ">Signout</p>
              </div>
            </div>
          </div>
        ) : null}

        {/* for notification display  */}

        {displayNotification ? (
          <div className="fixed right-48 p-6 top-28 bg-white cursor-pointer w-[400px] drop-shadow-lg">
            <h6 className="mb-4 font-bold">Notifications</h6>
            <hr />
            <div className="flex flex-row align-middle justify-between pt-5 pb-5 ">
              <div>
                <img src="./profileimage.png" alt="" />
              </div>
              <div>
                <p className="pt-1 font-bold text-[14px] ">
                  Lorem ipsum dolor sit amet consectetur
                </p>
                <p className="text-[13px] pt-1 ">2022/01/01 2:23 PM</p>
              </div>
            </div>
            <hr />
            <div className="flex flex-row align-middle justify-between pt-5 pb-5 ">
              <div>
                <img src="./profileimage.png" alt="" />
              </div>
              <div>
                <p className="pt-1 font-bold text-[14px] ">
                  Lorem ipsum dolor sit amet consectetur
                </p>
                <p className="text-[13px] pt-1 ">2022/01/01 2:23 PM</p>
              </div>
            </div>
            <hr />
            <div className="flex flex-row align-middle justify-between pt-5 pb-5 ">
              <div>
                <img src="./profileimage.png" alt="" />
              </div>
              <div>
                <p className="pt-1 font-bold text-[14px] ">
                  Lorem ipsum dolor sit amet consectetur
                </p>
                <p className="text-[13px] pt-1 ">2022/01/01 2:23 PM</p>
              </div>
            </div>
            <hr />
          </div>
        ) : null}
      </nav>
    </>
  );
}
