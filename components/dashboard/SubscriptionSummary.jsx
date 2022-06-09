import React from "react";

export default function SubscriptionList() {
  return (
    <div className="p-8 overflow-hidden rounded bg-white border-gray-200 ">
      <h6 className="text-[18px] font-bold">Subscriptions Summary</h6>
      <table class="min-w-full bg-white my-3">
        <thead className=" bg-[#FAFAFA] text-black text-[13px]">
          <tr>
            <th class="w-1/3 text-left  text-[13px] py-3 px-4 uppercase font-semibold text-sm">
              Name
            </th>
            <th class="w-1/3 text-left  text-[13px] py-3 px-4 uppercase font-semibold text-sm">
              Last name
            </th>
            <th class="text-left py-3  text-[13px] px-4 uppercase font-semibold text-sm">
              Phone
            </th>
          </tr>
        </thead>
        <tbody class="text-gray-700">
          <tr>
            <td class="w-1/3 text-left py-3 px-4">Lian</td>
            <td class="w-1/3 text-left py-3 px-4">Smith</td>
            <td class="text-left py-3 px-4">
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
