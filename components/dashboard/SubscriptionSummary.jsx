import React from "react";

export default function SubscriptionList({ subscriptions }) {
  // console.log(subscriptions);
  const SubscriptionsTable = ({ subdata }) => {
    return (
      <tr>
        <td className="w-1/3 text-left py-3 px-4">{subdata.date}</td>
        <td className="w-1/3 text-left py-3 px-4">{subdata.signUps}</td>
        <td className="text-left py-3 px-4">{subdata.activation}</td>
        <td className="w-1/3 text-center py-3 px-4">{subdata.cancellations}</td>
        <td className="w-1/3 text-center py-3 px-4">{subdata.customers}</td>
      </tr>
    );
  };
  return (
    <div className="p-8 overflow-hidden rounded bg-white border-gray-200 ">
      <h6 className="text-[18px] font-bold">Subscriptions Summary</h6>
      <table className="min-w-full bg-white my-3">
        <thead className=" bg-[#FAFAFA] text-black text-[13px]">
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
          {subscriptions.map((subdata, index) => {
            return <SubscriptionsTable key={index} subdata={subdata} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
