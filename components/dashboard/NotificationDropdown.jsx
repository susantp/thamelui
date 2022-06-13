import React from "react";

export default function NotificationDropdown() {
  return (
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
  );
}
