import Layout from '../layout/Layout'
import { useRecoilValue } from 'recoil'
import { themeState } from '../store/atoms'

export default function Index() {
  const sidebarWidth = useRecoilValue(themeState)
  return (
    <Layout>
       <div style={{ height: 2000 }} className="left-1/4 top-1/2 absolute">
        Sidebar width {sidebarWidth}
      </div>
    </Layout>
  )
}
