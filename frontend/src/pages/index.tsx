import Head from 'next/head'
import AppLayout from 'src/containers/app-layout'
import HomeContainer from 'src/containers/home'
import { useAuthStore } from 'src/stores/hooks'

export default function Page() {
  const { isLoggedIn } = useAuthStore()
  return (
    <>
      <Head>
        <title>{isLoggedIn ? 'マイページTOP' : '企業の方'}</title>
      </Head>

      <HomeContainer />
    </>
  )
}

Page.getLayout = (page: React.ReactElement) => {
  return <AppLayout isUser={true}>{page}</AppLayout>
}
