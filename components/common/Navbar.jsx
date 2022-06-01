import React, { useState } from "react";
import Link from "next/link";
import GroupAddIcon from "@mui/icons-material/GroupAddOutlined";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import HelpIcon from "@mui/icons-material/HelpOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircleOutlined";
import CloseIcon from "@mui/icons-material/Close";
export default function Navbar() {
  const [display, setDisplay] = useState(false);
  const onDisplay = () => {
    setDisplay(!display);
  };
  const hideDisplay = () => {
    setDisplay(false);
  };
  return (
    <>
      <nav className=" flex flex-row justify-between flex-wrap p-4 w-full h-16 bg-neutral-200 fixed top-0">
        <div className="basis-2/4 flex flex-row justify-evenly flex-wrap  gap-y-3 items-center">
          <div>
            <img
              src="http://www.newitventure.com/wp-content/uploads/2018/08/logo-new1.png"
              alt=""
              className="w-[100px]"
            />
          </div>
          <div>
            <form action="" className="w-full max-w-md">
              <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
                <input
                  type="text"
                  name="search"
                  placeholder="Search..."
                  autocomplete="off"
                  aria-label="Search..."
                  className="w-full pr-3 pl-10 py-1 font-normal placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
                />
              </div>
            </form>
          </div>
        </div>

        {/* style={{"align-items":"center"}} */}
        <div className="flex flex-row justify-between basis-1/3 items-center">
          <div className="text-1xl font-normal ">This is test organization</div>
          <div className="text-1xl font-normal ">New IT Venture</div>
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
