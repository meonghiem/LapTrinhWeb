import { Layout } from 'antd'
import clsx from 'clsx'
import { observer } from 'mobx-react-lite'
import Head from 'next/head'
import { useEffect } from 'react'
import { SpinContainer } from 'src/common/components/spin-container'
import { LayoutType } from 'src/stores/auth'
import { useAuthStore } from 'src/stores/hooks'

import AppHeader from './app-header'
import MenuMobile from './app-menu/menu-mobile'
import AppSidebar from './app-sidebar'
import AppTabs from './app-tabs'

export type TabType = {
  text: string
  url: string
  active: boolean
}

type Props = {
  className?: string
  parentTab?: TabType[]
  childTab?: TabType[] | undefined
  isBox?: boolean
  hasSidebar?: boolean
  isUser?: boolean
}

const { Sider, Content } = Layout

const HomepageForGuest = ({ children }) => {
  return (
    <>
      <AppHeader />
      <Layout className={`page-layout mx-auto flex-1`} hasSider={false}>
        <MenuMobile />
        {/* {showMenu && <div className="page-desktop-menu">{nav}</div>} */}
        <div className={clsx(`page-layout-children flex-1`)}>
          <div className="main-content">{children}</div>
        </div>
      </Layout>
    </>
  )
}

export default observer(function AppLayout({
  children,
  parentTab,
  childTab,
  isBox,
  hasSidebar = true,
  isUser = false,
}: React.PropsWithChildren<Props>): JSX.Element {
  const store = useAuthStore()
  const { layout, isLoggedIn } = store

  useEffect(() => {
    store.checkAuth()
  }, [])

  if (isLoggedIn === undefined) {
    return <SpinContainer type="full-screen" size="large" />
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
      {layout === LayoutType.GUEST && <HomepageForGuest>{children}</HomepageForGuest>}

      {layout === LayoutType.USER && !isUser && (
        <Layout hasSider={true}>
          {hasSidebar && (
            <Sider>
              <AppSidebar />
            </Sider>
          )}
          <Layout>
            <Content className="mx-2">
              {parentTab && <AppTabs role="parent" tabs={parentTab}></AppTabs>}
              {childTab && <AppTabs role="children" tabs={childTab}></AppTabs>}
              <div
                className={clsx(
                  'my-3',
                  { '!min-h-[calc(100vh-54px-1.5rem)]': childTab === undefined },
                  { '!min-h-[calc(100vh-110px-1.5rem)]': childTab !== undefined },
                  { 'rounded-lg shadow-xl': isBox === true }
                )}
              >
                {children}
              </div>
            </Content>
          </Layout>
        </Layout>
      )}
      {layout === LayoutType.USER && isUser && <HomepageForGuest>{children}</HomepageForGuest>}
      {/* <AppFooter /> */}

      <style jsx>{`
        .main-content {
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
          border-radius: 1rem;
          padding: 2rem;
          margin-top: 0.5rem;
        }
        .logo-mobile {
          font-weight: 800 !important;
          font-size: 36px;
          line-height: 49px;
          letter-spacing: 0.1em;
        }

        @media (max-width: 575.98px) {
          :global(.page-layout.ant-layout) {
            justify-content: center;
          }
        }

        .menu-item {
          font-size: 0.6875rem;
          font-weight: 700;
          padding: 0rem 1.75rem;
          position: relative;
          margin-bottom: 25px;
        }
        .menu-link {
          color: #003b54;
          font-size: 14px;
          font-weight: 500;
        }
      `}</style>
    </>
  )
})
