import React from "react";

export default function PlanList({ plans }) {
  const TableRow = ({ plan }) => {
    return (
      <tr>
        <td className="w-1/3 text-left  py-3 px-4">{plan.planName}</td>
        <td className="w-1/3 text-left py-3 px-4">{plan.quantity}</td>
        <td className="text-left text-[16px]  py-3 px-4">{plan.amount}</td>
      </tr>
    );
  };

  console.log(plans);
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
          {plans.map((plan, index) => {
            return <TableRow key={index} plan={plan} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
