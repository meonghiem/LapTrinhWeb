import 'styles/globals.css'
import 'styles/index.scss'

import { ConfigProvider } from 'antd'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import { getSession, SessionProvider, useSession } from 'next-auth/react'
import NProgress from 'nprogress'
import { ReactElement, ReactNode } from 'react'
import { RootStoreHydration } from 'src/stores'
import { RootStoreProvider } from 'src/stores/provider'
// import nextAuth from 'next-auth'



ConfigProvider.config({
  theme: {
    primaryColor: '#004B8F',
    successColor: '#7DCA00',
    errorColor: '#FF0000',
    warningColor: '#FF9900',
  },
})

export type NextPageWithLayout<P = any> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
  pageProps: AppProps['pageProps'] & {
    hydrationData: RootStoreHydration
    session: any
  }
}
 function MyApp({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout): ReactNode {
  const getLayout = Component.getLayout ?? ((page) => page)
  // const session1= async() => {const a = await getSession() ; return a};
  // console.log(session1);
  

  return (
    <SessionProvider session={session}>
      <RootStoreProvider hydrationData={pageProps.hydrationData}>
        {getLayout(<Component {...pageProps} />)}
      </RootStoreProvider>
    </SessionProvider>
  )
}

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})
Router.events.on('routeChangeError', () => NProgress.done())

export default MyApp
