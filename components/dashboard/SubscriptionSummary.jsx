import React from "react";

export default function SubscriptionList() {
  return (
    <div className="p-8 overflow-hidden rounded bg-white border-gray-200 ">
      <h6 className="text-[18px] font-bold">Subscriptions Summary</h6>
      <table className="min-w-full bg-white my-3">
        <thead classname=" bg-[#FAFAFA] text-black text-[13px]">
          <tr>
            <th className="w-1/4 text-left  text-[13px] py-3 px-4 uppercase font-semibold text-sm">
              Date
            </th>
            <th className="w-1/4 text-left  text-[13px] py-3 px-4 uppercase font-semibold text-sm">
              Singups
            </th>
            <th className=" text-left py-3  text-[13px] px-4 uppercase font-semibold text-sm">
              Activation
            </th>
            <th className="text-center py-3  text-[13px] px-4 uppercase font-semibold text-sm">
              Cancellations
            </th>
            <th className="text-left py-3  text-[13px] px-4 uppercase font-semibold text-sm">
              Customers
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr>
            <td className="w-1/3 text-left py-3 px-4">Lian</td>
            <td className="w-1/3 text-left py-3 px-4">Smith</td>
            <td className="text-left py-3 px-4">
              <a className="hover:text-blue-500" href="tel:622322662">
                622322662
              </a>
            </td>
            <td className="w-1/3 text-center py-3 px-4">0</td>
            <td className="w-1/3 text-center py-3 px-4">0</td>
          </tr>
          <tr classname=" bg-[#FAFAFA]">
            <td className="w-1/3 text-left py-3 px-4">Emma</td>
            <td className="w-1/3 text-left py-3 px-4">Johnson</td>
            <td className="text-left py-3 px-4">
              <a className="hover:text-blue-500" href="tel:622322662">
                622322662
              </a>
            </td>
            <td className="text-center py-3 px-4">0</td>
            <td className="text-center py-3 px-4">0</td>
          </tr>
          <tr>
            <td className="w-1/3 text-left py-3 px-4">Oliver</td>
            <td className="w-1/3 text-left py-3 px-4">Williams</td>
            <td className="text-left py-3 px-4">
              <a className="hover:text-blue-500" href="tel:622322662">
                622322662
              </a>
            </td>
            <td className="text-center py-3 px-4">0</td>
            <td className="text-center py-3 px-4">0</td>
          </tr>
          <tr classname=" bg-[#FAFAFA]">
            <td className="w-1/3 text-left py-3 px-4">Isabella</td>
            <td className="w-1/3 text-left py-3 px-4">Brown</td>
            <td className="text-left py-3 px-4">
              <a className="hover:text-blue-500" href="tel:622322662">
                622322662
              </a>
            </td>
            <td className=" text-center py-3 px-4">0</td>
            <td className="text-center py-3 px-4">0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
