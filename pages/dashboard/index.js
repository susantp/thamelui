import Layout from '../../layouts/Layout'
import PlanSummary from '../../components/dashboard/PlanSummary'
import SubscriptionSummary from '../../components/dashboard/SubscriptionSummary'
import Statistic from '../../components/dashboard/Statistic'
import SignupStatics from '../../components/dashboard/SignupStatics'
import Footer from '../../layouts/Footer'

import axios from 'axios'

export default function Index ({ data }) {
  return (
    <Layout>
      <div className="flex flex-col xl:flex-row justify-between gap-6">
        <div className="flex flex-col gap-8 basis-5/6 ">
          <div>
            <PlanSummary plans={data.orderSummary}/>
          </div>

          <div>
            <SubscriptionSummary subscriptions={data.subscriptionSummary}/>
          </div>
        </div>

        <div className="flex flex-col gap-8 basis-2/6">
          <Statistic statistics={data.statistics}/>
          <SignupStatics signupstatics={data.signups}/>

        </div>

      </div>
      <Footer/>
    </Layout>
  )
}

export const getServerSideProps = async (Context) => {
  let data = null
  let errors = null
  try {
    const res = await axios.get(`http://localhost:3000/api/dashboard`)
    data = res.data
  } catch (err) {
    errors = err.message
  }

  return {
    props: {
      data,
      errors,
    },
  }
}
