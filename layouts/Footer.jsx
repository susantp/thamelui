import React from "react";

export default function Footer() {
  return (
    <>
      <div className="mt-4 flex-col">
        <h6 className="font-bold">Call us Mon-Fri</h6>

        <div className="flex flex-col xl:flex-row  mt-4 gap-y-2  md:gap-x-8 xl:gap-x-12 ">
          <div className="flex justify-content-evenly ">
            <img className="w-6 h-5 " src="./japan.png" alt="" />
            <p className="font-bold ml-4 ">08000856099</p>
          </div>
          <div className="flex justify-content-evenly">
            <img className="w-6 h-5" src="./nepal.png" alt="" />
            <p className="font-bold ml-4 ">08000856099</p>
          </div>
          <div className="flex justify-content-evenly">
            <img className="w-6 h-5 " src="./india.png" alt="" />
            <p className="font-bold ml-4">08000856099</p>
          </div>
          <div className="flex justify-content-evenly">
            <img className="w-6" src="./singapour.png" alt="" />
            <p className="font-bold ml-4 ">08000856099</p>
          </div>
        </div>
      </div>
    </>
  );
}
