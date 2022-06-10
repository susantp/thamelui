import React from "react";

export default function SignupStatics() {
  return (
    <div className="bg-white w-full p-5">
      <p className="font-bold"> Signups</p>
      <div className="flex flex-row justify-around ">
        <div className="text-center">
          <p className="pt-4 text-[14px] text-[#4c4c4c] font-bold ">Today</p>
          <p className="pt-4 text-[43px] font-bold ">31</p>
        </div>
        <div className="text-center">
          <p className="pt-4 text-[14px] text-[#4c4c4c] font-bold  ">
            Yesterday
          </p>
          <p className="pt-4 text-[43px] font-bold ">20</p>
        </div>
        <div className="text-center">
          <p className="pt-4 text-[14px] text-[#4c4c4c] font-bold  ">
            This Month
          </p>
          <p className="pt-4 text-[43px] font-bold ">7</p>
        </div>
      </div>
    </div>
  );
}
