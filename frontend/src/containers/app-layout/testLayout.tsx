// const { Layout } = antd
import { Layout } from 'antd'
import { Content } from 'antd/lib/layout/layout'

// import Sider from 'antd/lib/layout/Sider'
import Sider from './app-sidebar'
// const { Sider, Content } = Layout
// import Tabs from './app-tabs'

export default function layout({ children }) {
  return (
    <>
      <div className="">
        <Layout hasSider={true}>
          <Sider/>
          <Content>
            <div className="pl-[5px]">{children}</div>
          </Content>
        </Layout>
      </div>
    </>
  )
}
