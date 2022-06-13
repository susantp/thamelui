import React from "react";

export default function PlanList() {
  return (
    <div className="p-8 overflow-hidden rounded bg-white border-gray-200 ">
      <h6 className="text-[19px] font-bold">Plan Summary</h6>
      <table className="min-w-full bg-white my-3">
        <thead className=" bg-[#FAFAFA] text-black">
          <tr>
            <th className="w-1/3 text-left text-[13px] py-3 px-4 uppercase font-semibold text-sm">
              Plan Name
            </th>
            <th className="w-1/3 text-left text-[13px] py-3 px-4 uppercase font-semibold text-sm">
              Quantity
            </th>
            <th className="text-left text-[13px]  py-3 px-4 uppercase font-semibold text-sm">
              Amount
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700 ">
          <tr>
            <td className="w-1/3 text-left  py-3 px-4">Lian</td>
            <td className="w-1/3 text-left py-3 px-4">Smith</td>
            <td className="text-left text-[16px]  py-3 px-4">
              <a className="hover:text-blue-500" href="tel:622322662">
                622322662
              </a>
            </td>
          </tr>
          <tr className=" bg-[#FAFAFA]">
            <td className="w-1/3 text-left py-3 px-4">Emma</td>
            <td className="w-1/3 text-left py-3 px-4">Johnson</td>
            <td className="text-left py-3 px-4">
              <a className="hover:text-blue-500" href="tel:622322662">
                622322662
              </a>
            </td>
          </tr>
          <tr>
            <td className="w-1/3 text-left py-3 px-4">Oliver</td>
            <td className="w-1/3 text-left py-3 px-4">Williams</td>
            <td className="text-left py-3 px-4">
              <a className="hover:text-blue-500" href="tel:622322662">
                622322662
              </a>
            </td>
          </tr>
          <tr className=" bg-[#FAFAFA]">
            <td className="w-1/3 text-left py-3 px-4">Isabella</td>
            <td className="w-1/3 text-left py-3 px-4">Brown</td>
            <td className="text-left py-3 px-4">
              <a className="hover:text-blue-500" href="tel:622322662">
                622322662
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
