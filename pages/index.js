import Layout from "../layouts/Layout";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PlanSummary from "../components/dashboard/PlanSummary";
import { useRecoilValue } from "recoil";
import { themeState } from "../store/atoms";
import SubscriptionSummary from "../components/dashboard/SubscriptionSummary";
import Statistic from "../components/dashboard/Statistic";
import SignupStatics from "../components/dashboard/SignupStatics";
export default function Index() {
  return (
    <Layout>
      <div className="flex flex-row justify-between gap-4">
        <div className="flex flex-col gap-8 basis-4/6 ">
          <div>
            <PlanSummary />
          </div>

          <div>
            <SubscriptionSummary />
          </div>
        </div>
        <div className="  flex flex-col gap-8 basis-2/6">
          <Statistic />
          <SignupStatics/>
        </div>
      </div>
    </Layout>
  );
}
