import React from "react";

export default function Statistic({ statistics }) {
  return (
    <div className="bg-white p-4 ">
      <div className="flex gap-4">
        <div className="basis-1/2 ">
          <div className="bg-[#f1f2ff] text-left  p-4">
            <div className="bg-[#7a70ee]  my-3 w-12 rounded-md p-1 ">
              <img src="/wcustomers.png" />
            </div>
            <p className="py-0 font-bold text-[13px] text-[#5b5756]">
              Customers
            </p>
            <p className="text-[43px] font-bold">{statistics.totalCustomers}</p>
            <p className="pt-4 font-bold text-sm  text-[#8f8b83]">
              {statistics.newCustomers} new customers
            </p>
          </div>
        </div>
        <div className="basis-1/2">
          <div className="bg-[#fef4e2]  text-left p-4">
            <div className="bg-[#ff8421]  my-3 w-12 rounded-md p-1 ">
              <img src="/wsubscriptions.png" />
            </div>
            <p className="py-0 font-bold text-[13px] text-[#5b5756]">
              Subscriptions
            </p>
            <p className="text-[43px] font-bold">
              {statistics.totalSubscriptions}
            </p>
            <p className="pt-4 font-bold text-sm  text-[#8f8b83]">
              {statistics.newSubscriptions} new subscriptions
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-4">
        <div className="basis-1/2">
          <div className="bg-[#fde7e2]  text-left p-4">
            <div className="bg-[#fd552e] my-3 w-12 rounded-md p-1 ">
              <img src="/wproducts.png" />
            </div>
            <p className="py-0 font-bold text-[13px] text-[#5b5756]">
              Products
            </p>
            <p className="text-[43px] font-bold">{statistics.totalProducts}</p>
            <p className="pt-4 font-bold text-sm  text-[#8f8b83]">
              {statistics.newProducts} new prodcuts
            </p>
          </div>
        </div>
        <div className="basis-1/2">
          <div className="bg-[#d7f3ef]  text-left  p-4">
            <div className="bg-[#1ab6c4]  my-3 w-12 rounded-md p-1 ">
              <img src="/winvoice.png" />
            </div>
            <p className="py-0 font-bold text-[13px] text-[#5b5756] ">
              Unpaid Invoice
            </p>
            <p className="text-[43px] font-bold">{statistics.totalUnpaidInvoice}</p>
            <p className="pt-4 font-bold text-sm text-[#8f8b83] ">
              {statistics.newUnpaidInvoices} new unpaid invoice
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
