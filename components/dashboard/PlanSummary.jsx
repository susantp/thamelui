import React from "react";

export default function PlanList() {
  return (
    <div className="p-8 overflow-hidden rounded bg-white border-gray-200 ">
      <h6 className="text-[19px] font-bold">Plan Summary</h6>
      <table class="min-w-full bg-white my-3">
        <thead className=" bg-[#FAFAFA] text-black">
          <tr>
            <th class="w-1/3 text-left text-[13px] py-3 px-4 uppercase font-semibold text-sm">
              Plan Name
            </th>
            <th class="w-1/3 text-left text-[13px] py-3 px-4 uppercase font-semibold text-sm">
              Quantity
            </th>
            <th class="text-left text-[13px]  py-3 px-4 uppercase font-semibold text-sm">
              Amount
            </th>
          </tr>
        </thead>
        <tbody class="text-gray-700 ">
          <tr>
            <td class="w-1/3 text-left  py-3 px-4">Lian</td>
            <td class="w-1/3 text-left py-3 px-4">Smith</td>
            <td class="text-left text-[16px]  py-3 px-4">
              <a class="hover:text-blue-500" href="tel:622322662">
                622322662
              </a>
            </td>
          </tr>
          <tr className=" bg-[#FAFAFA]">
            <td class="w-1/3 text-left py-3 px-4">Emma</td>
            <td class="w-1/3 text-left py-3 px-4">Johnson</td>
            <td class="text-left py-3 px-4">
              <a class="hover:text-blue-500" href="tel:622322662">
                622322662
              </a>
            </td>
          </tr>
          <tr>
            <td class="w-1/3 text-left py-3 px-4">Oliver</td>
            <td class="w-1/3 text-left py-3 px-4">Williams</td>
            <td class="text-left py-3 px-4">
              <a class="hover:text-blue-500" href="tel:622322662">
                622322662
              </a>
            </td>
          </tr>
          <tr className=" bg-[#FAFAFA]">
            <td class="w-1/3 text-left py-3 px-4">Isabella</td>
            <td class="w-1/3 text-left py-3 px-4">Brown</td>
            <td class="text-left py-3 px-4">
              <a class="hover:text-blue-500" href="tel:622322662">
                622322662
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
