import React from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
export default function ProfileDropdown() {
  return (
    <div className="fixed right-8 p-6 top-28 bg-white cursor-pointer w-[270px] drop-shadow-lg">
      <p className="font-bold">Zara Larsson</p>
      <p className="text-[12px] pt-1 pb-1">senioradmin@gmail.com</p>
      <hr />
      <div>
        <div className="flex justify-start gap-3 p-2 hover:bg-blue-500 hover:text-white  ">
          <div>
            <PersonOutlineOutlinedIcon />
          </div>
          <div>
            <p className="pt-1 text-[15px]">Account</p>
          </div>
        </div>
      </div>

      <div className="flex justify-start gap-3 p-2 hover:bg-blue-500  hover:text-white">
        <div>
          <ExitToAppOutlinedIcon />
        </div>
        <div>
          <p className="pt-1 text-[15px] ">Signout</p>
        </div>
      </div>
    </div>
  );
}
