import Layout from "../layouts/Layout";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PlanList from "../components/dashboard/PlanList";
import { useRecoilValue } from "recoil";
import { themeState } from "../store/atoms";
import SubscriptionList from "../components/dashboard/SubscriptionList";

export default function Index() {
  return (
    <Layout>
      <div className="flex flex-row justify-between gap-4">
        <div className="flex flex-col gap-4 basis-1/2 ">
          <div>
            <PlanList />
          </div>

          <div>
            <SubscriptionList />
          </div>
        </div>
        <div className="basis-1/2">
          <div className="bg-white p-8 ">
            <div className="flex gap-4">
              <div className="basis-1/2 ">
                <div className="bg-[#f1f2ff] text-left pl-16 p-2">
                  <PersonOutlineIcon />
                  <p className="py-2 font-bold text-[#5b5756]">Customers</p>
                  <p className="text-2xl font-bold">205</p>
                  <p className="pt-6 font-bold text-[#8f8b83]">
                    25 new customers{" "}
                  </p>
                </div>
              </div>
              <div className="basis-1/2">
                <div className="bg-[#fef4e2]  text-left pl-16 p-2">
                  <MonetizationOnIcon />
                  <p className="py-2 font-bold text-[#5b5756]">Subscriptions</p>
                  <p className="text-2xl font-bold">150</p>
                  <p className="pt-6 font-bold text-[#8f8b83]">
                    25 new Subscriptions{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <div className="basis-1/2">
                <div className="bg-[#fde7e2]  text-left pl-16 p-2">
                  <PersonOutlineIcon />
                  <p className="py-2 font-bold text-[#5b5756]">Products</p>
                  <p className="text-2xl font-bold">125</p>
                  <p className="pt-6 font-bold text-[#8f8b83]">
                    25 new prodcuts{" "}
                  </p>
                </div>
              </div>
              <div className="basis-1/2">
                <div className="bg-[#d7f3ef]  text-left pl-16 p-2">
                  <PersonOutlineIcon />
                  <p className="py-2 font-bold text-[#5b5756] ">
                    Unpaid Invoice
                  </p>
                  <p className="text-2xl font-bold">90</p>
                  <p className="pt-6 font-bold text-[#8f8b83] ">
                    25 new unpaid invoice{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
