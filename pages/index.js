import Layout from "../layouts/Layout";
import PlanSummary from "../components/dashboard/PlanSummary";
import { useRecoilValue } from "recoil";
import { themeState } from "../store/atoms";
import SubscriptionSummary from "../components/dashboard/SubscriptionSummary";
import Statistic from "../components/dashboard/Statistic";
import SignupStatics from "../components/dashboard/SignupStatics";
import Footer from "../layouts/Footer";
export default function Index() {
  return (
    <Layout>
      <div className="flex flex-row justify-between gap-6">
        <div className="flex flex-col gap-8 basis-5/6 ">
          <div>
            <PlanSummary />
          </div>

          <div>
            <SubscriptionSummary />
          </div>

          <div>
            <Footer />
          </div>
        </div>
        <div className="  flex flex-col gap-8 basis-2/6">
          <Statistic />
          <SignupStatics />
        </div>
      </div>
    </Layout>
  );
}
